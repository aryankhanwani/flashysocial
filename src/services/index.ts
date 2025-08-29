import type { CreateAxiosDefaults } from "axios";
import * as instagram from "./@instagram";
export { default as AppProviderInstance } from "./provider-instance";
export * from "./utils";

export declare namespace ServiceProvider {
  interface Config {
    appKey: string;
    appLabel: string;
    enabled: boolean;
    services: ConfigService[];
  }

  type ApiInstantiator = () => CreateAxiosDefaults;

  interface ConfigService {
    key: string;
    label: string;
    unitPrice: number;
    requiresArticlesSelection: boolean;
    morph: Partial<ConfigServiceMorph>;
  }

  interface ConfigServiceMorph {
    required: boolean;
    min: number;
    max: number;
    step: number;
    defaultValue: number;
  }
}

export const ServiceProviders = {
  instagram,
} as const;
export type ServiceProviderKey = keyof typeof ServiceProviders;
