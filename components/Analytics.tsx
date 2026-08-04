import Script from "next/script";
import { site } from "@/data/site";

/**
 * Gắn Google Analytics 4 + Facebook Pixel.
 * Chỉ chạy khi có biến môi trường tương ứng (xem .env.example).
 */
export default function Analytics() {
  return (
    <>
      {site.ga4 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${site.ga4}');`}
          </Script>
        </>
      )}

      {site.fbPixel && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${site.fbPixel}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
