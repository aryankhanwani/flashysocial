"use client";

import NextScript from "next/script";
import {
  useLayoutEffect,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

declare namespace Script {
  export interface Props extends ComponentPropsWithoutRef<typeof NextScript> {
    mountDelay?: number;
  }
}

export function Script({ mountDelay = 0, ...props }: Script.Props) {
  const [canMount, setCanMount] = useState<boolean>(false);
  useLayoutEffect(() => {
    setTimeout(() => setCanMount(true), mountDelay);
  }, [mountDelay]);

  if (!canMount) return null;
  return <NextScript {...props} />;
}
