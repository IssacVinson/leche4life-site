import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Cta } from "@/components/cta";
import { ImageHero } from "@/components/image-hero";
import { PackageBlock } from "@/components/package-block";
import { pageMetadata } from "@/lib/seo";
import { babyHerePackages } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "The Baby Is Here",
  description:
    "In-home lactation help now with Amanda Howell, IBCLC: Signature, Emergency, Two-Pack, and Single Visit packages across the greater Charlotte metro.",
  path: "/baby-is-here/",
});

const cta = { href: "/contact/", label: "Get Started" };

export default function BabyIsHerePage() {
  return (
    <>
      <ImageHero
        eyebrow="The Baby Is Here"
        title={
          <>
            Feeding feels hard right now. <em>I can help.</em>
          </>
        }
        lede="Pain, a baby who will not latch, a supply scare, or weight worries — Amanda comes to your home across the greater Charlotte metro. Pick the support that fits, fill out the short form, and you will get a text back with available times."
        image={{
          src: "/images/baby-is-here-hero.jpg",
          alt: "A mother holding her sleeping newborn by a sunlit window.",
        }}
      >
        <Cta href={cta.href} className="h-14 px-8 text-lg font-semibold">
          {cta.label}
        </Cta>
      </ImageHero>

      {babyHerePackages.map((pkg, index) => (
        <PackageBlock key={pkg.id} pkg={pkg} index={index} cta={cta} />
      ))}

      <section className="bg-cream">
        <Container className="flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div>
            <h2 className="max-w-xl text-4xl sm:text-5xl">
              You don’t have to do this alone.
            </h2>
            <p className="lede mt-4 max-w-xl">
              Fill out the short form and Amanda will text you shortly with
              available times.
            </p>
          </div>
          <Cta href={cta.href} className="h-14 px-8 text-lg font-semibold">
            {cta.label}
          </Cta>
        </Container>
      </section>
    </>
  );
}
