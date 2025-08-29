"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useSearchParamsNavigation<
  TParams extends Record<string, string> = Record<string, string>,
>() {
  const router = useRouter();
  const currentSearchParams = useSearchParams();

  const toJSON = useCallback(
    () => Object.fromEntries(currentSearchParams.entries()) as TParams,
    [currentSearchParams],
  );

  const navigate = useCallback(
    (params: Partial<TParams>) => {
      const json = toJSON();

      const sanitizedParams = Object.fromEntries(
        Object.entries({
          ...json,
          ...params,
        }).filter(([, value]) => value !== undefined),
      );
      const scopedSearchParams = new URLSearchParams(sanitizedParams);
      router.push(`?${scopedSearchParams.toString()}`);
    },
    [router, toJSON],
  );

  return {
    search: currentSearchParams,
    params: toJSON(),
    toJSON,
    navigate,
  };
}
