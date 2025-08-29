"use client";

import { Slider } from "@/components/ui/slider";
import { cn, numberToFormatted } from "@/lib/utils";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

declare namespace OrderSlider {
  export interface Props extends ComponentPropsWithoutRef<"div"> {
    name: string;
    max: number;
    label: string;
    pricePerUnit: number;
    min?: number;
    defaultQuantity?: number;
    step?: number;
    requiresArticlesSelection?: boolean;
  }
}

export const OrderSlider = forwardRef<HTMLDivElement, OrderSlider.Props>(
  (
    {
      className,
      name,
      max,
      label,
      pricePerUnit,
      min = 0,
      defaultQuantity = 0,
      step = 1,
      requiresArticlesSelection: _requiresArticlesSelection = false,
      ...props
    },
    ref,
  ) => {
    const form = useFormContext();

    return (
      <Controller
        control={form.control}
        name={name}
        render={({ field }) => (
          <div>
            <div
              ref={ref}
              {...props}
              className={cn(
                "mb-3 flex items-center justify-between",
                className,
              )}
            >
              <p>
                {numberToFormatted(Number(field.value ?? 0), 0)} {label}
              </p>
              <p>${numberToFormatted(pricePerUnit * field.value ?? 0)}</p>
            </div>
            <Slider
              {...field}
              name={name}
              defaultValue={[defaultQuantity]}
              value={[field.value]}
              step={step}
              min={min}
              max={max}
              className="w-full"
              onValueChange={([value]) => field.onChange(value)}
            />
          </div>
        )}
      />
    );
  },
);
OrderSlider.displayName = "OrderSlider";
