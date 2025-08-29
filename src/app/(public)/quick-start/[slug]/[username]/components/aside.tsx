"use client";

import { useSearchParamsNavigation } from "@/app/hooks/use-search-params-navigation";
import { Logo } from "@/components/commons/logo";
import { cn } from "@/lib/utils";
import type { QuickStartStep } from "../entities";
import { QuickStartHelpMeSection } from "./help-me-section";
import { QuickStartSummarySection } from "./summary-section";

export function QuickStartAside() {
  const { params } = useSearchParamsNavigation<{ step: QuickStartStep }>();

  return (
    <div
      className={cn(
        "top-0 flex flex-1 shrink-0 basis-full flex-col items-center justify-center p-10 text-center transition-all duration-300 md:sticky md:min-h-[70dvh] md:basis-1/2",
        params.step !== "services-selection" && "md:basis-[5rem]",
      )}
    >
      <Logo className="mx-auto mb-10 block max-h-8 md:mb-auto" />

      {params.step === "services-selection" && <QuickStartHelpMeSection />}
      {params.step !== "services-selection" && <QuickStartSummarySection />}
    </div>
  );
}
