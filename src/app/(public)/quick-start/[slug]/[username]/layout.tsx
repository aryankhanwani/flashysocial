import { createOrder } from "@/app/actions/create-order";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import type { ServiceProviderKey } from "@/services";
import { Suspense, type ReactNode } from "react";
import { QuickStartAside } from "./components/aside";
import { QuickStartHeader } from "./components/header";
import OrderProvider from "./components/order-provider";

function QuickStartLoadingSkeleton() {
  return (
    <div className="flex min-h-[100dvh] flex-1 flex-col items-center justify-center bg-gray-100">
      <div className="h-[100dvh] w-full max-w-6xl overflow-auto bg-gray-50 shadow-xl md:h-[70dvh] md:overflow-clip md:rounded-lg">
        <div className="flex flex-row flex-wrap items-start">
          <div className="flex flex-1 shrink-0 basis-full flex-col items-center justify-center p-10 text-center md:sticky md:min-h-[70dvh] md:basis-1/2">
            <Skeleton className="h-8 w-32 mb-10" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-64" />
              <Skeleton className="h-4 w-56" />
            </div>
          </div>

          <div className="isolate flex flex-1 shrink-0 basis-full flex-col bg-white p-3 md:min-h-[70dvh] md:basis-1/2 md:p-10 md:pb-2">
            <div className="flex flex-row items-center gap-4 border-b pb-4 pt-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <Skeleton className="h-6 w-64 mx-auto" />
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-32 w-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function QuickStartContent({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: ServiceProviderKey; username: string };
}) {
  const order = await createOrder(params.slug, {
    username: params.username,
  });
  if (order.status === "error") throw new Error(order.message);

  return (
    <OrderProvider {...order}>
      <div className="flex min-h-[100dvh] flex-1 flex-col items-center justify-center bg-gray-100">
        <ScrollArea className="h-[100dvh] w-full max-w-6xl overflow-auto bg-gray-50 shadow-xl md:h-[70dvh] md:overflow-clip md:rounded-lg">
          <div className="flex flex-row flex-wrap items-start">
            <QuickStartAside />

            <div className="isolate flex flex-1 shrink-0 basis-full flex-col bg-white p-3 md:min-h-[70dvh] md:basis-1/2 md:p-10 md:pb-2">
              <QuickStartHeader />
              {children}
            </div>
          </div>
        </ScrollArea>
      </div>
    </OrderProvider>
  );
}

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: ServiceProviderKey; username: string };
}) {
  return (
    <Suspense fallback={<QuickStartLoadingSkeleton />}>
      <QuickStartContent params={params}>
        {children}
      </QuickStartContent>
    </Suspense>
  );
}
