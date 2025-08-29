"use client";

import { useSearchParamsNavigation } from "@/app/hooks/use-search-params-navigation";
import { numberToFormatted } from "@/lib/utils";
import type yup from "@/lib/yup";
import {
  getServiceProviderInstance,
  type ServiceProviderKey,
} from "@/services";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { QuickStartContinueButton } from "../components/continue-button";
import { useOrderContext } from "../components/order-provider";
import { OrderSlider } from "../components/slider";
import { ServiceOrderVariants, type QuickStartStep } from "../entities";

export function QuickStartStepsServicesSelection() {
  const { navigate } = useSearchParamsNavigation<{ step: QuickStartStep }>();
  const params = useParams<{ slug: ServiceProviderKey }>();

  const provider = getServiceProviderInstance(params.slug);
  const services = ServiceOrderVariants[params.slug];
  if (!services || !provider)
    throw new Error("Service schema is not available.");

  const order = useOrderContext();

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      ...provider.orderSchema.getDefault(),
      ...order.services,
    },
    resolver: yupResolver(provider.orderSchema),
  });

  const values = form.watch(services.map((x) => x.name));
  const totalPrice = useMemo(
    () =>
      values.reduce(
        (prev, current, idx) =>
          Number(current) * services[idx]!.pricePerUnit + Number(prev),
        0,
      ),
    [services, values],
  )!;

  const onSubmit = useCallback(
    (orderData: yup.InferType<typeof provider.orderSchema>) => {
      order.setServices(orderData);
      const fieldsToRequireArticlesSelection = provider.config.services
        .filter((x) => x.requiresArticlesSelection)
        .map((x) => x.key);

      const requireArticlesSelection = Object.entries(orderData)
        .filter(([, value]) => Number(value ?? 0) > 0)
        .some(([key]) => fieldsToRequireArticlesSelection.includes(key));

      navigate({
        step: requireArticlesSelection ? "select-posts" : "billing",
      });
    },
    [navigate, order, provider],
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-6 space-y-6">
          {services.map((benef) => (
            <OrderSlider key={benef.name} {...benef} />
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between border-t pt-4">
          <p className="font-semibold">Total:</p>
          <p className="font-semibold text-gray-800">
            ${numberToFormatted(+totalPrice)}
          </p>
        </div>
        <QuickStartContinueButton
          disabled={!form.formState.isValid}
          className="sticky bottom-2 z-50 mt-6"
        />
      </form>
    </FormProvider>
  );
}
