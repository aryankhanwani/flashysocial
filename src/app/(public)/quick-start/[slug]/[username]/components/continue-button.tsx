"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

declare namespace QuickStartContinueButton {
  export type Props = ComponentPropsWithoutRef<typeof Button>;
}

export const QuickStartContinueButton = forwardRef<
  HTMLButtonElement,
  QuickStartContinueButton.Props
>(({ children, className, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(
      "w-full rounded-full py-3 text-lg font-semibold text-white transition-all hover:opacity-90",
      className,
    )}
    size="lg"
    type="submit"
    variant="primaryGradient"
    {...props}
  >
    {children ?? "Continue"}
  </Button>
));
QuickStartContinueButton.displayName = "QuickStartContinueButton";
