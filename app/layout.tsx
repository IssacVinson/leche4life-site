import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const description =
  "Holistic lactation support for Charlotte-area families. Amanda Howell, IBCLC, offers home and virtual visits. Based in Concord, North Carolina.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Leche 4 Life Lactation | Amanda Howell, IBCLC",
    template: "%s | Leche 4 Life Lactation",
  },
  description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "Leche 4 Life Lactation | Amanda Howell, IBCLC",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leche 4 Life Lactation | Amanda Howell, IBCLC",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description,
  url: `${getSiteUrl()}/`,
  telephone: "+1-980-313-1037",
  email: site.email,
  areaServed: "Greater Charlotte metro",
  employee: {
    "@type": "Person",
    name: "Amanda Howell",
    jobTitle: "International Board Certified Lactation Consultant",
  },
  sameAs: [site.instagram, site.facebook, site.podcast],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-page text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-cta focus:px-4 focus:py-2 focus:text-cta-ink"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
