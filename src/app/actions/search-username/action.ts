"use server";

import {
  getServiceProviderInstance,
  type ServiceProviderKey,
} from "@/services";
import type { ServicesUnifiedApi } from "@/services/services";

export declare namespace SearchUsernameAction {
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
    users: ServicesUnifiedApi.User[];
  }

  export type Response = Error | Success;
}

export default async function searchUsername<T extends object>(
  serviceKey: ServiceProviderKey,
  options: SearchUsernameAction.Options<T>,
): Promise<SearchUsernameAction.Response> {
  // 1. Get service api instance.
  const serviceApiInstance = getServiceProviderInstance(serviceKey, true)?.api;
  if (!serviceApiInstance)
    return {
      status: "error",
      message: "Service api instance is unavailable",
    };

  // 2. Fetch the list of users by search.
  const users = await serviceApiInstance.utils.findUsersByName?.(
    options.username,
  );
  if (!users)
    return {
      status: "error",
      message: `${serviceKey}.utils.findUsersByName is not implemented.`,
    };

  return {
    status: "success",
    message: `Found a list of ${users.length} users.`,
    users,
  };
}
