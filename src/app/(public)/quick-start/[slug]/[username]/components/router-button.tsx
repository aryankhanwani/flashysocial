"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoaderCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  forwardRef,
  useState,
} from "react";

type RouterMethod = keyof ReturnType<typeof useRouter>;
type RouterMethodProps<TMethodName extends RouterMethod> = Parameters<
  ReturnType<typeof useRouter>[TMethodName]
>;

declare namespace QuickStartRouterButton {
  export interface Props<TMethodName extends RouterMethod>
    extends Omit<ComponentPropsWithoutRef<typeof Button>, "action"> {
    action: RouterMethod;
    args?: RouterMethodProps<TMethodName>;
    clickInterval?: number;
    preserveIcon?: boolean;
  }
}

export const QuickStartRouterButton = forwardRef(
  <TMethodName extends RouterMethod>(
    {
      className,
      children,
      action,
      // @ts-expect-error Just bypass the args type check as we are sure it will work.
      args = [],
      clickInterval = 0,
      preserveIcon = false,
      ...props
    }: QuickStartRouterButton.Props<TMethodName>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const router = useRouter();
    const [pending, setPending] = useState<boolean>(false);

    return (
      <Button
        ref={ref}
        size="icon"
        className={cn("rounded-full", className, pending && "animate-spin")}
        variant="ghost"
        onClick={() => {
          setPending(true);
          // @ts-expect-error Just bypass the args type check as we are sure it will work.
          router[action].apply(router, [...args]);
          setTimeout(() => setPending(false), clickInterval);
        }}
        disabled={pending}
        {...props}
      >
        {pending && !preserveIcon ? <LoaderCircleIcon /> : children}
      </Button>
    );
  },
);
QuickStartRouterButton.displayName = "QuickStartRouterButton";
