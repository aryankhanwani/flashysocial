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
    disabled?: boolean;
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
      disabled = false,
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
          <div className={cn(disabled && "opacity-50")}>
            <div
              ref={ref}
              {...props}
              className={cn(
                "mb-3 flex items-center justify-between",
                className,
              )}
            >
              <p className={cn(disabled && "text-gray-500")}>
                {numberToFormatted(Number(field.value ?? 0), 0)} {label}
              </p>
              <p className={cn(disabled && "text-gray-500")}>
                ${numberToFormatted(pricePerUnit * field.value ?? 0)}
              </p>
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
              onValueChange={([value]) => !disabled && field.onChange(value)}
              disabled={disabled}
            />
            {disabled && (
              <p className="mt-2 text-xs text-gray-500">
                This service requires posts to be available
              </p>
            )}
          </div>
        )}
      />
    );
  },
);
OrderSlider.displayName = "OrderSlider";
