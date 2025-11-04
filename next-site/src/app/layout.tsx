import type { Metadata } from "next";
import Script from "next/script";
import { getCookieConsentConfig, getFavicons } from "@/lib/wordpress";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mandabay.com"),
  title: "Manda Bay | Kenyan Boutique Beach Hotel",
  description:
    "Book Direct for Best Rates — Stay at Manda Bay, a top destination in Kenya with award-winning accommodation.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Manda Bay | Kenyan Boutique Beach Hotel",
    description:
      "Book Direct for Best Rates — Stay at Manda Bay, a top destination in Kenya with award-winning accommodation.",
    url: "https://mandabay.com/",
    type: "article",
    images: [
      {
        url: "/uploads/2025/03/meta-drake.jpg",
        width: 1200,
        height: 630,
        alt: "Manda Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/uploads/2025/03/meta-drake.jpg"],
  },
  icons: {
    icon: [
      { url: "/uploads/2025/03/web-app-manifest-512x512-1-150x150.png", sizes: "32x32" },
      { url: "/uploads/2025/03/web-app-manifest-512x512-1-300x300.png", sizes: "192x192" },
    ],
    apple: "/uploads/2025/03/web-app-manifest-512x512-1-300x300.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieConsent = getCookieConsentConfig();
  const favicons = getFavicons();
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="/" />
        <link rel="stylesheet" href="/assets/styles/main.css" />
        <link rel="stylesheet" href="/mu-plugins/locomotive-cookie-consent/assets/cookie-consent%EF%B9%96ver=0.2.3.css" />
        {favicons.map((tag, index) => {
          if (tag.tagName === "link") {
            return <link key={index} {...tag.attributes} />;
          }
          return <meta key={index} {...tag.attributes} />;
        })}
      </head>
      <body className="u-font-sans u-antialiased">
        {children}
        <Script
          id="locomotive-cookie-consent-js-before"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: cookieConsent }}
        />
        <Script
          id="theme-vendors"
          src="/assets/scripts/vendors.js"
          strategy="lazyOnload"
        />
        <Script
          id="theme-app"
          src="/assets/scripts/app.js"
          strategy="lazyOnload"
        />
        <Script
          id="locomotive-cookie-consent"
          src="/mu-plugins/locomotive-cookie-consent/assets/cookie-consent%EF%B9%96ver=0.2.3.js"
          strategy="lazyOnload"
        />
        <Script id="vercel-va" strategy="afterInteractive">
          {`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`}
        </Script>
        <Script
          id="vercel-insights"
          src="/_vercel/insights/script.js"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}
