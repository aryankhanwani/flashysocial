import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export function getThirdPartyAssetPermanentUrl(thirdPartyUrl: string) {
  return `/api/third-party/asset/${encodeURIComponent(thirdPartyUrl)}`;
}

export function numberToFormatted(value: number, decimals = 2) {
  return Number(value)
    .toFixed(decimals)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getThirdPartyStripeCheckoutUrl(url: string) {
  return url;
}
