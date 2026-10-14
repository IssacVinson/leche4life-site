import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Cta } from "@/components/cta";
import { ImageHero } from "@/components/image-hero";
import { PackageBlock } from "@/components/package-block";
import { pageMetadata } from "@/lib/seo";
import { expectingPackages, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "I’m Expecting",
  description:
    "Prenatal lactation planning with Amanda Howell, IBCLC: a virtual Prenatal Consultation or the Signature Package with in-home visits after birth across the greater Charlotte metro.",
  path: "/expecting/",
});

const cta = { href: site.calendly, label: "Book a Discovery Call", external: true };

export default function ExpectingPage() {
  return (
    <>
      <ImageHero
        eyebrow="I’m Expecting"
        title={
          <>
            Plan for feeding <em>before</em> your baby arrives
          </>
        }
        lede="You are planning, not panicking — and that is the best time to prepare. Get your questions answered and your support lined up now, so the first days feel familiar instead of frantic."
        image={{
          src: "/images/expecting-hero.jpg",
          alt: "A pregnant woman cradling her belly in soft window light.",
        }}
      >
        <Cta href={cta.href} external className="h-14 px-8 text-lg font-semibold">
          {cta.label}
        </Cta>
      </ImageHero>

      {expectingPackages.map((pkg, index) => (
        <PackageBlock key={pkg.id} pkg={pkg} index={index} cta={cta} />
      ))}

      <section className="bg-cream">
        <Container className="flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div>
            <h2 className="max-w-xl text-4xl sm:text-5xl">
              Not sure which one fits?
            </h2>
            <p className="lede mt-4 max-w-xl">
              Book a short discovery call and Amanda will help you choose.
            </p>
          </div>
          <Cta href={cta.href} external className="h-14 px-8 text-lg font-semibold">
            {cta.label}
          </Cta>
        </Container>
      </section>
    </>
  );
}
