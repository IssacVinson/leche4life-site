import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Cta } from "@/components/cta";
import { PackageTabs } from "@/components/package-tabs";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Services/Packages",
  description:
    "Prenatal, postpartum, signature, emergency, and tongue-tie lactation packages with Amanda Howell, IBCLC. Pricing is discussed on a discovery call.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services/Packages"
        title="Care for the season you are in"
        lede="Packages are shaped around where you are — still expecting, home with a new baby, in a hard week, or sorting out oral function. There are no public rates on this page."
      />

      <section className="bg-page">
        <Container className="py-16 lg:py-20">
          <p className="max-w-2xl leading-relaxed">
            Visits can be virtual, in your home across the greater Charlotte
            metro, or at the Concord office. If you are not sure which package
            fits, book a discovery call and Amanda will help you choose.
          </p>
          <div className="mt-10">
            <PackageTabs />
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <h2 className="max-w-xl text-4xl sm:text-5xl">
            Not sure which one fits?
          </h2>
          <Cta href={site.calendly} external>
            Book a discovery call
          </Cta>
        </Container>
      </section>
    </>
  );
}
