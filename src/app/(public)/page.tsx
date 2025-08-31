import { redirect, RedirectType } from "next/navigation";

type SearchParams = {
  aff_id?: string;
  trackingCode?: string;
  offer_id?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  // Preserve affiliate parameters in redirect
  const affiliateParams = new URLSearchParams();

  // Add affiliate tracking parameters
  if (searchParams.aff_id) {
    affiliateParams.set("aff_id", searchParams.aff_id);
  }
  if (searchParams.trackingCode) {
    affiliateParams.set("trackingCode", searchParams.trackingCode);
  }
  if (searchParams.offer_id) {
    affiliateParams.set("offer_id", searchParams.offer_id);
  }

  // Add UTM parameters
  const utmParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ] as const;
  utmParams.forEach((param) => {
    const value = searchParams[param];
    if (value) {
      affiliateParams.set(param, value);
    }
  });

  const redirectUrl = affiliateParams.toString()
    ? `/instagram?${affiliateParams.toString()}`
    : "/instagram";

  redirect(redirectUrl, RedirectType.replace);
}
