"use client";

import { useSearchParamsNavigation } from "@/app/hooks/use-search-params-navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UserAccountStatus } from "@/components/user-account-status";
import { cn, getThirdPartyAssetPermanentUrl } from "@/lib/utils";
import { ArrowLeftIcon, RotateCwIcon } from "lucide-react";
import type { QuickStartStep } from "../entities";
import { useOrderContext } from "./order-provider";
import { QuickStartRouterButton } from "./router-button";

export function QuickStartHeader() {
  const { params } = useSearchParamsNavigation<{ step: QuickStartStep }>();
  const order = useOrderContext();

  return (
    <div className="sticky top-0 z-50 flex flex-row items-center gap-4 border-b bg-inherit pb-4 pt-4">
      <QuickStartRouterButton
        action="back"
        clickInterval={1000}
        className={cn(params.step === "services-selection" && "hidden")}
      >
        <ArrowLeftIcon />
      </QuickStartRouterButton>
      <Avatar className="h-12 w-12">
        <AvatarImage
          src={getThirdPartyAssetPermanentUrl(order.user.profilePicUrl)}
          alt="User"
        />
        <AvatarFallback>{order.user.username.at(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold">@{order.user.username}</p>
        <div className="mt-1 flex flex-row flex-wrap gap-2">
          <UserAccountStatus
            status={order.user.selectable ? "valid" : "invalid"}
            size="1.5rem"
            messages={{
              invalid: (
                <>
                  <p>Private accounts cannot be operated.</p>
                  <p>
                    You may proceed for now, but please remember to update your
                    account status at a later time.
                  </p>
                </>
              ),
            }}
            defaultOpen={!order.user.selectable}
          />
          <Badge variant="outline">Selected</Badge>
        </div>
      </div>
      <QuickStartRouterButton
        action="refresh"
        className="ml-auto"
        clickInterval={3000}
        preserveIcon
      >
        <RotateCwIcon />
      </QuickStartRouterButton>
    </div>
  );
}
