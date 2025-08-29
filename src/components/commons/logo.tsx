import { type ComponentPropsWithoutRef, forwardRef } from "react";

export const Logo = forwardRef<
  HTMLImageElement,
  ComponentPropsWithoutRef<"img">
>((props, ref) => (
  <img
    ref={ref}
    src="/instagram-landing/images/Design-sans-titre-6.png"
    loading="lazy"
    alt="logo"
    {...props}
  />
));
Logo.displayName = "Logo";
