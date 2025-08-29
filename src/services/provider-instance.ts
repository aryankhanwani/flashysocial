import yup from "@/lib/yup";
import axios, { type AxiosInstance } from "axios";
import { ServiceProviders, type ServiceProvider } from ".";
import type { ServicesUnifiedApi } from "./services";

type UtilsGenerator = (
  instance: AxiosInstance,
) => Partial<ServicesUnifiedApi.Instance["utils"]>;

function NotImplemented(label: string) {
  throw new Error(label + "is not implemented");
}

export default class AppProviderInstance {
  private _apiInstance: ServicesUnifiedApi.Instance | null = null;
  public readonly orderSchema: yup.ObjectSchema<
    Record<string, number | undefined>,
    yup.AnyObject,
    Record<string, undefined>,
    ""
  >;

  constructor(
    private _config: ServiceProvider.Config,
    private utilsGenerator: UtilsGenerator = () => ({
      // @ts-ignore
      findPosts: () => NotImplemented("findPosts"),

      // @ts-ignore
      findUserByName: () => NotImplemented("findUserByName"),

      // @ts-ignore
      findUsersByName: () => NotImplemented("findUsersByName"),
    }),
  ) {
    this.orderSchema = this.createOrderSchema();
  }

  private createApiInstance(
    generator: UtilsGenerator,
  ): ServicesUnifiedApi.Instance {
    const config = ServiceProviders.instagram.api();
    const instance = axios.create(config);

    return {
      instance,
      utils: generator(instance) as ServicesUnifiedApi.Instance["utils"],
    };
  }

  private createOrderSchema() {
    const schema = yup.object(
      Object.fromEntries(
        this.config.services.map((service) => {
          let serviceSchema = yup.number();

          // Assign min value validation
          if (service.morph.min)
            serviceSchema = serviceSchema.min(service.morph.min);

          // Assign max value validation
          if (service.morph.max)
            serviceSchema = serviceSchema.max(service.morph.max);

          // Assign is required validation
          if (service.morph.required) serviceSchema = serviceSchema.required();

          // Assign default value
          if (service.morph.defaultValue !== undefined)
            // @ts-ignore
            serviceSchema = serviceSchema.default(service.morph.defaultValue);

          return [service.key, serviceSchema];
        }),
      ),
    );

    // Assign at least one field selection requirement rule to the schema
    return schema.test(
      "at-least-one-greater-than-zero",
      "At least one field must be greater than zero",
      (value) =>
        Object.entries(value).some(([, value]) => Number(value ?? 0) > 0),
    );
  }

  get config(): Readonly<typeof this._config> {
    return this._config;
  }

  get api() {
    if (this._apiInstance === null && typeof window === "undefined")
      return this.createApiInstance(this.utilsGenerator);

    return this._apiInstance;
  }

  get doesCheckoutRequiresArticleSelection() {
    return this.config.services.some(
      (service) => service.requiresArticlesSelection,
    );
  }
}
