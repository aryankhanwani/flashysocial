import { env } from "@/env";
import { setCustomerToken } from "@/lib/session/guest/utils";

import yup from "@/lib/yup";
import {
  getServiceProviderInstance,
  type ServiceProviderKey,
} from "@/services";

import { type NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";
import { createStripeCheckoutSchema } from "./entities";
import { amountToCents, getService, getServiceTotalAmount } from "./utils";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const serviceInstance = getServiceProviderInstance(
    body.serviceProvider ?? "",
    true,
  );
  if (!serviceInstance)
    return new Response("Service not found or currently unavailable", {
      status: 400,
      statusText: "Bad Request",
    });

  try {
    // 0. Validating the payload
    const payload = createStripeCheckoutSchema(
      body.serviceProvider,
    ).validateSync(body, {
      abortEarly: true,
      strict: true,
      stripUnknown: true,
    });

    // 1. Preparing necessary checkers
    const amountMultiplier = Math.max(
      1,
      Number(payload.selectedPosts?.length ?? 0),
    );

    // 2. Create a new customer token and store it to cookies.
    setCustomerToken(payload.email);

    const sessionData = {
      customer_email: payload.email,
      customer_creation: "always",
      line_items: Object.entries(payload.services)
        .map<Stripe.Checkout.SessionCreateParams.LineItem | null>(
          ([name, quantity], idx) => {
            const service = getService(
              payload.serviceProvider as ServiceProviderKey,
              name,
            );
            const totalAmount =
              getServiceTotalAmount(
                payload.serviceProvider as ServiceProviderKey,
                name,
                Number(quantity ?? 0),
              ) * (service?.requiresArticlesSelection ? amountMultiplier : 1);
            if (!service || totalAmount <= 0) return null;

            return {
              price_data: {
                currency: "USD",
                unit_amount_decimal: amountToCents(totalAmount).toString(),
                product_data: {
                  name: `Package #${idx + 1}`,
                  description: `Quantiy: ${quantity}`,
                },
              },
              adjustable_quantity: {
                enabled: false,
              },
              quantity: 1,
            };
          },
        )
        .filter((x) => x !== null),
      mode: "payment",
      success_url: `${env.NEXTAUTH_URL}/dashboard?order_result=completed`,
      cancel_url: `${env.NEXTAUTH_URL}/dashboard?order_result=cancelled`,
      metadata: {
        username: payload.username,
        serviceProvider: payload.serviceProvider,
      },
    };

    const cloakingUrl = `${env.NEXT_PUBLIC_CLOACKING_BASE_URL}/api/stripe/create-session`;
    
    const proxyResponse = await fetch(cloakingUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.NEXT_PUBLIC_CLOACKING_AUTH_TOKEN}`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      body: JSON.stringify(sessionData)
    });
    console.log(env.NEXT_PUBLIC_CLOACKING_AUTH_TOKEN)
    if (!proxyResponse.ok) {
      throw new Error(`Cloaking service error: ${proxyResponse.statusText}`);
    }

    const session = await proxyResponse.json();

    return NextResponse.json(Object.assign(session), {
      status: 201,
    });
  } catch (err) {
    if (err instanceof Stripe.errors.StripeError)
      return new Response(err.message, {
        status: err.statusCode ?? 500,
      });

    if (err instanceof yup.ValidationError)
      return new Response(err.message, {
        status: 400,
        statusText: "Bad Request",
      });

    return new Response((err as Error).message, {
      status: 400,
      statusText: "Bad Request",
    });
  }
}
