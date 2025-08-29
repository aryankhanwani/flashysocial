import { ServiceOrderVariants } from "@/app/(public)/quick-start/[slug]/[username]/entities";
import type { ServiceProviderKey } from "@/services";

export function amountToCents(amount: number) {
  return amount * 100;
}

export function getService(service: ServiceProviderKey, serviceName: string) {
  return ServiceOrderVariants[service]?.find((x) => x.name === serviceName);
}

export function getServiceTotalAmount(
  providerKey: ServiceProviderKey,
  serviceKey: string,
  quantity: number,
) {
  const service = getService(providerKey, serviceKey);
  if (!service) return 0;

  return service.pricePerUnit * quantity;
}
