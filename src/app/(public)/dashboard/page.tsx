import type { StripeCheckoutSchema } from "@/app/api/third-party/payment/stripe/entities";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { getCustomerToken } from "@/lib/session/guest/utils";
import stripe from "@/lib/stripe";
import { getThirdPartyStripeCheckoutUrl, numberToFormatted } from "@/lib/utils";
import Link from "next/link";
import Script from "next/script";

const ORDER_STATES = ["idle", "cancelled", "completed"] as const;
type OrderState = (typeof ORDER_STATES)[number];

export default async function Page({
  searchParams,
}: {
  searchParams: { order_result: string };
}) {
  const currentOrderState: OrderState = ORDER_STATES.includes(
    searchParams.order_result as OrderState,
  )
    ? (searchParams.order_result as OrderState)
    : "idle";

  const customerToken = getCustomerToken();
  const { data: orders } = await stripe.checkout.sessions.list({
    limit: 100,
    customer_details: {
      email:
        customerToken?.decrypt() ?? "unfortunately.broken@mail-brokker.brk",
    },
  });

  // Get the most recent completed order for conversion tracking
  const latestCompletedOrder = orders.find(
    (order) => order.status === "complete",
  );

  return (
    <>
      <Script
        id="affiliate-conversion-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() { 
              function getCookie(name) { 
                return document.cookie.split('; ').find(r => r.startsWith(name + '='))?.split('=')[1] || ''; 
              } 
              
              function getStored(key) { 
                try { 
                  return localStorage.getItem(key) || decodeURIComponent(getCookie(key)); 
                } catch(_) { 
                  return decodeURIComponent(getCookie(key) || ''); 
                } 
              } 
              
              window.trackAffiliateConversion = function(orderId, saleAmount) { 
                const trackingCode = getStored('aff_id') || getStored('tracking_code'); 
                const offerId = getStored('offer_id') || ''; 
                const amount = Number(saleAmount); 
                
                if (!trackingCode) { 
                  console.warn('[Affiliate] No tracking code found'); 
                  return; 
                } 
                
                if (!orderId) { 
                  console.warn('[Affiliate] orderId missing'); 
                  return; 
                } 
                
                if (!Number.isFinite(amount) || amount <= 0) { 
                  console.warn('[Affiliate] saleAmount invalid'); 
                  return; 
                } 
                
                const url = 'https://reaymhrclsanjlsmelam.supabase.co/functions/v1/record-conversion-pixel' + 
                  '?aff_id=' + encodeURIComponent(trackingCode) + 
                  '&order_id=' + encodeURIComponent(orderId) + 
                  '&sale_amount=' + encodeURIComponent(amount) + 
                  (offerId ? '&offer_id=' + encodeURIComponent(offerId) : '') + 
                  '&t=' + Date.now(); 
                
                const img = new Image(); 
                img.src = url; 
                img.onload = function() { 
                  // Conversion tracked successfully
                }; 
                img.onerror = function() { 
                  console.warn('[Affiliate] Pixel failed to load');
                }; 
              }; 
            })();
          `,
        }}
      />

      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {currentOrderState !== "idle" && (
          <Alert
            variant={currentOrderState === "completed" ? "success" : "error"}
            className="mb-10"
          >
            <AlertTitle>
              {currentOrderState === "completed" ? "Success" : "Error"}
            </AlertTitle>
            <AlertDescription>
              {currentOrderState === "completed" &&
                "Your order has been placed successfully."}
              {currentOrderState === "cancelled" &&
                "Your order has been cancelled."}
            </AlertDescription>
          </Alert>
        )}
        <h1 className="mb-6 text-2xl font-bold">Order History</h1>
        <div className="space-y-4">
          {orders.map((order) => {
            const metadata = order.metadata as Pick<
              StripeCheckoutSchema,
              "username" | "serviceProvider"
            > | null;

            return (
              <div
                key={order.id}
                className="overflow-hidden rounded-lg bg-card shadow-sm"
              >
                <div className="px-6 py-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap font-medium text-gray-500">
                      Order for{" "}
                      <Link
                        href={`https://instagram.com/${metadata?.username}`}
                        target="_blank"
                        className="inline-block rounded-lg p-1 text-primary"
                      >
                        @{metadata?.username ?? "??"}
                      </Link>
                    </span>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        order.status === "complete"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="mb-2 font-medium text-gray-700">
                    {new Date(order.created * 1000).toLocaleDateString()}
                  </p>
                  <p className="text-2xl font-bold text-gray-700">
                    $
                    {numberToFormatted(
                      Number(order.amount_subtotal ?? 0) / 100,
                    )}
                  </p>
                  {order.status === "open" && (
                    <Link
                      href={getThirdPartyStripeCheckoutUrl(order.url!)}
                      target="_self"
                      className="mt-4 inline-block"
                    >
                      <Button className="w-auto px-4 py-2">
                        Complete Order
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}

          {orders.length <= 0 && <p>Empty history</p>}
        </div>
      </div>

      {/* Conversion tracking for completed orders */}
      {currentOrderState === "completed" && latestCompletedOrder && (
        <Script
          id="track-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Track conversion for the latest completed order
                const orderId = '${latestCompletedOrder.id}';
                const saleAmount = ${Number(latestCompletedOrder.amount_subtotal ?? 0) / 100};
                
                if (window.trackAffiliateConversion) {
                  window.trackAffiliateConversion(orderId, saleAmount);
                } else {
                  // Fallback if function not loaded yet
                  setTimeout(() => {
                    if (window.trackAffiliateConversion) {
                      window.trackAffiliateConversion(orderId, saleAmount);
                    } else {
                      console.error('[Conversion Trigger Debug] Function still not found after fallback');
                    }
                  }, 1000);
                }
              })();
            `,
          }}
        />
      )}
    </>
  );
}
