import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { PathCards } from "@/components/path-cards";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Packages",
  description:
    "Choose your lactation support with Amanda Howell, IBCLC: packages for expecting mamas, and packages for when the baby is here.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Where are you right now?"
        lede="Packages now live on two pages — one for planning ahead, one for help after your baby arrives. Pick the one that fits."
      />

      <section className="bg-page">
        <Container className="py-16 lg:py-20">
          <PathCards headingLevel="h2" />
        </Container>
      </section>
    </>
  );
}
