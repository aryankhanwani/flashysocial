"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";
import { MoveHorizontalIcon } from "lucide-react";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="primary-gradient absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="grid h-[1.5rem] min-w-[2rem] cursor-pointer place-items-center rounded-lg border bg-white px-2 opacity-90 shadow-lg hover:opacity-100 focus:opacity-100">
      <MoveHorizontalIcon size="1em" className="shrink-0" />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
