"use client";

import type { ServiceProviderKey } from "@/services";
import type { ServicesUnifiedApi } from "@/services/services";
import { useParams } from "next/navigation";
import {
  type ContextType,
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { ServiceOrderVariants } from "../entities";

declare namespace OrderProvider {
  export interface Props {
    children: ReactNode;
    user: ServicesUnifiedApi.User;
    posts: ServicesUnifiedApi.Post[];
  }

  export interface Context {
    services: Record<string, number | undefined>;
    userPosts: ServicesUnifiedApi.Post[];
    selectedPosts: ServicesUnifiedApi.Post[];
  }
}

const defaultValues: OrderProvider.Context = {
  services: {},
  userPosts: [],
  selectedPosts: [],
};
const OrderContext = createContext<OrderProvider.Context>(defaultValues);

export default function OrderProvider({
  children,
  user,
  posts,
}: OrderProvider.Props) {
  const [state, setState] =
    useState<ContextType<typeof OrderContext>>(defaultValues);

  const ctx = useMemo(
    () => ({
      state,
      setState,
      user,
      services: state.services,
      userPosts: posts,
      selectedPosts: state.selectedPosts,

      setServices(
        newState:
          | OrderProvider.Context["services"]
          | ((
              prev: OrderProvider.Context["services"],
            ) => OrderProvider.Context["services"]),
      ) {
        setState((prev) => ({
          ...prev,
          services:
            typeof newState === "function" ? newState(prev.services) : newState,
        }));
      },

      setSelectedPosts(
        newState:
          | OrderProvider.Context["selectedPosts"]
          | ((
              prev: OrderProvider.Context["selectedPosts"],
            ) => OrderProvider.Context["selectedPosts"]),
      ) {
        setState((prev) => ({
          ...prev,
          selectedPosts:
            typeof newState === "function"
              ? newState(prev.selectedPosts)
              : newState,
        }));
      },
    }),
    [posts, state, user],
  );

  return <OrderContext.Provider value={ctx}>{children}</OrderContext.Provider>;
}

export function useOrderContext() {
  const { slug } = useParams<{ slug: ServiceProviderKey }>();

  const ctx = useContext(OrderContext) as {
    state: OrderProvider.Context;
    setState: Dispatch<SetStateAction<OrderProvider.Context>>;
    user: ServicesUnifiedApi.User;
    services: Record<string, number>;
    selectedPosts: ServicesUnifiedApi.Post[];
    userPosts: ServicesUnifiedApi.Post[];
    setServices(
      newState:
        | OrderProvider.Context["services"]
        | ((
            prev: OrderProvider.Context["services"],
          ) => OrderProvider.Context["services"]),
    ): void;
    setSelectedPosts(
      newState:
        | OrderProvider.Context["selectedPosts"]
        | ((
            prev: OrderProvider.Context["selectedPosts"],
          ) => OrderProvider.Context["selectedPosts"]),
    ): void;
  };

  const totalAmount = useMemo(() => {
    const servicesAmounts = Object.entries(ctx.services).map(
      ([serviceKey, quantity]) => {
        const service = ServiceOrderVariants[slug]?.find(
          (x) => x.name === serviceKey,
        );
        if (!service) return 0;

        const multiplyFactor = service.requiresArticlesSelection
          ? Math.max(1, ctx.selectedPosts.length)
          : 1;
        return service.pricePerUnit * quantity * multiplyFactor;
      },
    );

    return servicesAmounts.reduce((prev, current) => prev + current, 0);
  }, [ctx.selectedPosts.length, ctx.services, slug]);

  return {
    ...ctx,
    totalAmount,
  };
}
