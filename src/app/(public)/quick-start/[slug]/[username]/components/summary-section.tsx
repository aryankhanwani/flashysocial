"use client";

import { useSearchParamsNavigation } from "@/app/hooks/use-search-params-navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { numberToFormatted } from "@/lib/utils";
import type { ServiceProviderKey } from "@/services";
import { ArrowLeftIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { type QuickStartStep, ServiceOrderVariants } from "../entities";
import { useOrderContext } from "./order-provider";

export function QuickStartSummarySection() {
  const { navigate } = useSearchParamsNavigation<{ step: QuickStartStep }>();
  const { slug } = useParams<{ slug: ServiceProviderKey }>();
  const order = useOrderContext();

  return (
    <div className="flex w-full flex-col gap-4 text-start">
      <section>
        <h2 className="text-muted-foreground">Total Due Today</h2>
        <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-3xl font-semibold">
          ${numberToFormatted(order.totalAmount)}
        </p>
        {order.selectedPosts.length > 0 && (
          <span className="text-sm text-muted-foreground">
            From {order.selectedPosts.length} selected article(s).
          </span>
        )}
      </section>
      {Object.entries(order.services).length > 0 && (
        <Separator className="my-2" />
      )}
      <section>
        <ul className="flex flex-col gap-4">
          {Object.entries(order.services).map(([serviceKey, quantity]) => {
            const service = ServiceOrderVariants[slug];
            const good = service?.find((x) => x.name === serviceKey);
            if (!service || !good) return null;

            return (
              <li key={serviceKey} className="flex flex-col">
                <span className="text-muted-foreground">
                  {numberToFormatted(quantity, 0)} {good.label}
                </span>
                <span className="font-semibold">
                  ${numberToFormatted(Number(quantity * good.pricePerUnit))}{" "}
                  {good.requiresArticlesSelection &&
                    order.selectedPosts.length > 1 &&
                    quantity > 1 && (
                      <span style={{ color: "#FF9800" }}>
                        x {order.selectedPosts.length}
                      </span>
                    )}
                </span>
              </li>
            );
          })}
        </ul>
        {Object.entries(order.services).length > 0 && (
          <Button
            size="sm"
            className="mt-3 w-fit rounded-xl"
            onClick={() => navigate({ step: "services-selection" })}
            variant="outline"
          >
            <ArrowLeftIcon size="1em" />
            Edit Selection
          </Button>
        )}
      </section>
    </div>
  );
}
