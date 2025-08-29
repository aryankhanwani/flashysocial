import { ServiceLogo } from "@/components/commons/service-logo";
import { cn } from "@/lib/utils";
import {
  getServiceProviderConfig,
  ServiceProviders,
  type ServiceProviderKey,
} from "@/services";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";
import { LandingForm } from "./landing-form";

export declare namespace LandingProviderSelector {
  export interface Props extends ComponentPropsWithoutRef<"div"> {
    slug: ServiceProviderKey;
    includeForm?: boolean;
  }
}

export function LandingProviderSelector({
  className,
  slug,
  includeForm = false,
  ...props
}: LandingProviderSelector.Props) {
  const provider = getServiceProviderConfig(slug, true);

  return (
    <>
      <div
        className={cn(
          "mt-6 flex flex-row flex-wrap items-center justify-center gap-4 px-4",
          className,
        )}
        {...props}
      >
        {Object.values(ServiceProviders).map((provider) => (
          <Link
            key={provider.config.appKey}
            href={provider.config.appKey}
            prefetch={false}
            className={cn(
              "pointer-events-none flex aspect-square w-28 flex-col items-center justify-center gap-2 rounded-lg p-2 py-4 text-center text-foreground no-underline transition-all",
              slug === provider.config.appKey && "!bg-foreground text-card",
              !provider.config.enabled && "opacity-30",
            )}
          >
            <div
              className={cn(
                provider.config.enabled && "pointer-events-auto",
                "relative rounded-xl bg-foreground/10 p-6",
              )}
            >
              <ServiceLogo
                serviceName={provider.config.appKey as ServiceProviderKey}
                className="h-full w-full"
                active={slug === provider.config.appKey}
              />
            </div>
            <span
              className={cn(
                provider.config.enabled && "pointer-events-auto",
                "block text-sm font-semibold",
              )}
            >
              {provider.config.appLabel}
            </span>
          </Link>
        ))}
      </div>

      {includeForm && provider && (
        <LandingForm provider={provider} className="my-10" />
      )}
    </>
  );
}
