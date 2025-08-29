"use server";

import {
  getServiceProviderInstance,
  type ServiceProviderKey,
} from "@/services";
import type { ServicesUnifiedApi } from "@/services/services";

export declare namespace CreateOrderAction {
  interface Options<TOption extends object = object> {
    username: string;
    metadata?: TOption;
  }

  interface Error {
    status: "error";
    message: string;
  }

  interface Success {
    status: "success";
    message: string;
    user: ServicesUnifiedApi.User;
    posts: ServicesUnifiedApi.Post[];
  }

  export type Response = Error | Success;
}

export default async function createOrder<T extends object>(
  serviceKey: ServiceProviderKey,
  options: CreateOrderAction.Options<T>,
): Promise<CreateOrderAction.Response> {
  const serviceApiInstance = getServiceProviderInstance(serviceKey, true)?.api;
  if (!serviceApiInstance)
    return {
      status: "error",
      message: "Service api instance is unavailable",
    };

  try {
    const [user, posts] = await Promise.allSettled([
      serviceApiInstance.utils.findUserByName(options.username),
      serviceApiInstance.utils.findPosts(options.username),
    ]);

    if (user.status === "rejected" || !user.value) {
      return {
        status: "error",
        message: "The targeted user account could not be resolved.",
      };
    }

    return {
      status: "success",
      message: `Found a user with the provided username.`,
      user: user.value,
      posts: posts.status === "fulfilled" ? posts.value : [],
    };
  } catch (error) {
    console.error("Error in createOrder:", error);
    return {
      status: "error",
      message: "An unexpected error occurred while fetching user data.",
    };
  }
}
