"use client";

import type { StripeCheckoutSchema } from "@/app/api/third-party/payment/stripe/entities";
import type { ServiceProviderKey } from "@/services";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";
import type Stripe from "stripe";
import { useOrderContext } from "../[username]/components/order-provider";

export function useProceedCheckout() {
  const { username } = useParams<{ username: string }>();
  const { slug } = useParams<{ slug: ServiceProviderKey }>();
  const { selectedPosts, services } = useOrderContext();

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: StripeCheckoutSchema) =>
      axios
        .post<
          Stripe.Response<Stripe.Checkout.Session>
        >("/api/third-party/payment/stripe", payload)
        .then((res) => res.data),
  });
  const handleProceedToCheckout = useCallback(
    ({ email }: { email: string }) => {
      mutate(
        {
          username,
          email,
          serviceProvider: slug,
          services,
          selectedPosts,
        },
        {
          async onSettled(session, error) {
            if (error || !session) {
              toast.error(error?.message ?? "Could not create stripe session.");
              return;
            }

            // Redirect directly to Stripe checkout
            if (session.url) {
              window.location.href = session.url;
            } else {
              toast.error("No checkout URL received from Stripe.");
            }
          },
        },
      );
    },
    [mutate, selectedPosts, services, slug, username],
  );

  return [handleProceedToCheckout, isPending] as const;
}
