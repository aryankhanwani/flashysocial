import { type ServiceProviderKey, ServiceProviders } from ".";

export function getServiceProviderInstance(
  key: ServiceProviderKey,
  enabledOnly = false,
) {
  const provider = ServiceProviders[key];
  if (enabledOnly && !provider?.config.enabled) return undefined;
  return provider.instance;
}

export function getServiceProviderConfig(
  key: ServiceProviderKey,
  enabledOnly = false,
) {
  return getServiceProviderInstance(key, enabledOnly)?.config;
}
