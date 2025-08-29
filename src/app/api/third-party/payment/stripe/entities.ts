import yup from "@/lib/yup";
import {
  getServiceProviderInstance,
  type ServiceProviderKey,
  ServiceProviders,
} from "@/services";

export const createStripeCheckoutSchema = (serviceKey: ServiceProviderKey) => {
  const service = getServiceProviderInstance(serviceKey, true);
  if (!service)
    throw new Error(
      "Service schema could not be created from an unavailable token.",
    );

  return yup.object({
    username: yup.string().required(),
    email: yup.string().required(),
    serviceProvider: yup
      .string()
      .oneOf(Object.keys(ServiceProviders))
      .required(),
    selectedPosts: yup.array().of(
      yup.object({
        id: yup.string().required(),
        mediaPreviewUrl: yup.string().optional(),
      }),
    ),
    services: service.orderSchema,
  });
};
export type StripeCheckoutSchema = yup.InferType<
  ReturnType<typeof createStripeCheckoutSchema>
>;
