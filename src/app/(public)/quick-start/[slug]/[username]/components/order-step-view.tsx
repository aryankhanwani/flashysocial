"use client";

import { useSearchParamsNavigation } from "@/app/hooks/use-search-params-navigation";
import { useMemo, useState, useEffect } from "react";
import type { QuickStartStep } from "../entities";
import { QuickStartStepsBilling } from "../steps/billing";
import { QuickStartStepsSelectPosts } from "../steps/select-posts";
import { QuickStartStepsServicesSelection } from "../steps/services-selection";
import { useOrderContext } from "./order-provider";

const stepViews: Record<QuickStartStep, JSX.Element> = {
  "services-selection": <QuickStartStepsServicesSelection />,
  "select-posts": <QuickStartStepsSelectPosts />,
  billing: <QuickStartStepsBilling />,
};

export function QuickStartOrderStepView() {
  const { navigate, params } = useSearchParamsNavigation<{
    step: QuickStartStep;
  }>();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  if (!stepViews[params.step])
    throw new Error("Invalid order step identifier.");
  
  const currentView = useMemo(() => stepViews[params.step], [params.step]);

  const { services, userPosts } = useOrderContext();
  
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [params.step]);

  // Prevent navigation to select-posts when no posts are available
  if (params.step === "select-posts" && userPosts.length === 0) {
    navigate({
      step: "services-selection",
    });
    return null;
  }

  if (
    params.step !== "services-selection" &&
    Object.values(services).length <= 0
  ) {
    navigate({
      step: "services-selection",
    });
    return null;
  }

  if (isTransitioning) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-sm text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return currentView;
}
