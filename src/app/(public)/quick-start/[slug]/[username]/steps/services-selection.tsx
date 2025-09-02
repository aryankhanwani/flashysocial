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

  // Check if user has any posts
  const hasPosts = useMemo(() => {
    return order.userPosts.length > 0;
  }, [order.userPosts.length]);

  const onSubmit = useCallback(
    (orderData: yup.InferType<typeof provider.orderSchema>) => {
      // If no posts available, reset services that require article selection
      if (!hasPosts) {
        const resetData = { ...orderData };
        provider.config.services
          .filter((x) => x.requiresArticlesSelection)
          .forEach((service) => {
            resetData[service.key as keyof typeof resetData] = 0;
          });
        order.setServices(resetData);
        
        // Navigate directly to billing since no article selection is needed
        navigate({
          step: "billing",
        });
        return;
      }

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
    [navigate, order, provider, hasPosts],
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Error message when no posts available */}
        {!hasPosts && (
          <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  No posts available
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>Your account is either private or you don&apos;t have any posts. Services that require post selection (likes, comments, views) are disabled.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 space-y-6">
          {services.map((benef) => (
            <OrderSlider 
              key={benef.name} 
              {...benef} 
              disabled={!hasPosts && benef.requiresArticlesSelection}
            />
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between border-t pt-4">
          <p className="font-semibold">Total:</p>
          <p className="font-semibold text-gray-800">
            ${numberToFormatted(+totalPrice)}
          </p>
        </div>
        <QuickStartContinueButton
          disabled={!form.formState.isValid }
          className="sticky bottom-2 z-50 mt-6"
        />
      </form>
    </FormProvider>
  );
}
