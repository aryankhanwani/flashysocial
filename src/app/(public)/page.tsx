import { redirect, RedirectType } from "next/navigation";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Preserve affiliate parameters in redirect
  const affiliateParams = new URLSearchParams();
  
  // Add affiliate tracking parameters
  if (searchParams.aff_id) {
    affiliateParams.set('aff_id', searchParams.aff_id as string);
  }
  if (searchParams.trackingCode) {
    affiliateParams.set('trackingCode', searchParams.trackingCode as string);
  }
  if (searchParams.offer_id) {
    affiliateParams.set('offer_id', searchParams.offer_id as string);
  }
  
  // Add UTM parameters
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  utmParams.forEach(param => {
    if (searchParams[param]) {
      affiliateParams.set(param, searchParams[param] as string);
    }
  });
  
  const redirectUrl = affiliateParams.toString() 
    ? `/instagram?${affiliateParams.toString()}`
    : '/instagram';
    
  redirect(redirectUrl, RedirectType.replace);
}
