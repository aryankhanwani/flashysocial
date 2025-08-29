import { ServiceProviders } from "@/services";
import type { ComponentPropsWithoutRef } from "react";
import type { OrderSlider } from "./components/slider";

export const QuickStartSteps = [
  "services-selection",
  "select-posts",
  "billing",
] as const;
export type QuickStartStep = (typeof QuickStartSteps)[number];

export const ServiceOrderVariants = Object.fromEntries(
  Object.entries(ServiceProviders).map(([providerKey, provider]) => [
    providerKey,
    provider.config.services.map<ComponentPropsWithoutRef<typeof OrderSlider>>(
      ({ label, key, unitPrice, morph, requiresArticlesSelection }) => ({
        label,
        name: key,
        pricePerUnit: unitPrice,
        max: morph.max,
        min: morph.min,
        defaultQuantity: morph.defaultValue,
        step: morph.step,
        requiresArticlesSelection,
      }),
    ),
  ]),
);
