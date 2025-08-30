import { ReactQueryClientProvider } from "@/components/providers/tanstack-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/styles/globals.css";
import "@/styles/utils.css";

import { type Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Script from "next/script";

const fontFamily = Instrument_Sans({
  adjustFontFallback: true,
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  icons: [
    {
      url: "instagram-landing/images/favicon.png",
      rel: "shortcut icon",
      type: "image/x-icon",
    },
    { url: "instagram-landing/images/webclip.png", type: "apple-touch-icon" },
  ],
  title: "Flashy Social",
  description:
    "Various social media app Promotion Tool — Trusted By Thousands Of Clients Around The World, Our Results Speak For Themselves.",

  openGraph: {
    title: "Flashy Social | Instagram Growth Service",
    description:
      "Instagram Promotion Tool — Trusted By Thousands Of Clients Around The World, Our Results Speak For Themselves.",
    type: "website",
  },

  twitter: {
    title: "Flashy Social | Instagram Growth Service",
    description:
      "Instagram Promotion Tool — Trusted By Thousands Of Clients Around The World, Our Results Speak For Themselves.",
    card: "summary_large_image",
  },
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en" className={`${fontFamily.className}`}>
        <head>
          <Script
            id="affiliate-tracking"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function() { 
                  const params = new URLSearchParams(location.search); 
                  const trackingCode = params.get('aff_id') || params.get('trackingCode'); 
                  const offerId = params.get('offer_id') || ''; 
                  
                  if (!trackingCode) {
                    return; 
                  }
                  
                  function setCookie(name, value, days) { 
                    const maxAge = days * 24 * 60 * 60; 
                    // If your flow uses subdomains, consider adding: + '; domain=.' + location.hostname.split('.').slice(-2).join('.') 
                    document.cookie = name + '=' + encodeURIComponent(value) + '; path=/; max-age=' + maxAge + '; samesite=Lax'; 
                  } 
                  
                  function persist(key, value) { 
                    try { 
                      localStorage.setItem(key, value); 
                    } catch (_) {
                      console.warn('[Affiliate] LocalStorage failed for:', key);
                    } 
                    setCookie(key, value, 30); 
                  } 
                  
                  // Persist affiliate identifiers 
                  persist('aff_id', trackingCode); 
                  if (offerId) persist('offer_id', offerId); 
                  
                  // Fire click pixel once we have the code 
                  const pixelUrl = 'https://reaymhrclsanjlsmelam.supabase.co/functions/v1/track-pixel' + 
                    '?aff_id=' + encodeURIComponent(trackingCode) + 
                    (offerId ? '&offer_id=' + encodeURIComponent(offerId) : '') + 
                    '&utm_source=' + encodeURIComponent(params.get('utm_source') || '') + 
                    '&utm_medium=' + encodeURIComponent(params.get('utm_medium') || '') + 
                    '&utm_campaign=' + encodeURIComponent(params.get('utm_campaign') || '') + 
                    '&utm_content=' + encodeURIComponent(params.get('utm_content') || '') + 
                    '&utm_term=' + encodeURIComponent(params.get('utm_term') || '') + 
                    '&t=' + Date.now();
                  
                  const pixel = new Image(); 
                  pixel.src = pixelUrl;
                  pixel.onload = function() {
                    // Pixel fired successfully
                  };
                  pixel.onerror = function() {
                    console.error('[Affiliate] Pixel failed to load');
                  };
                })();
              `,
            }}
          />
        </head>
        <body>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster position="bottom-center" richColors theme="light" />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
