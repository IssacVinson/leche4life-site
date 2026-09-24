import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { Cta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";
import { publicPath } from "@/lib/base-path";
import { serviceArea, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Amanda Howell, IBCLC, has supported Charlotte-area families since 2005 with holistic, integrative lactation care in Concord and across the metro.",
  path: "/about",
});

const credentials = [
  "International Board Certified Lactation Consultant",
  "Supporting families since 2005",
  "Master class trained",
  "Gut–brain trained",
  "BLS",
  "Host of For the Love of Milk",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Meet Amanda Howell, IBCLC"
        lede="A Concord lactation consultant for greater Charlotte families, from pregnancy through the long middle of feeding."
      />

      <section className="bg-page">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-10 lg:py-20">
          <div className="space-y-6 lg:col-span-7 lg:col-start-1 lg:row-start-1">
            <p className="text-lg leading-relaxed">
              Amanda Howell is an International Board Certified Lactation
              Consultant. She has been supporting families since 2005, from the
              months before a baby arrives through the weeks and months of
              feeding that follow.
            </p>
            <p>
              She is based in Concord and sees families across the greater
              Charlotte metro — in your home, virtually, and in-office at{" "}
              {site.office}. The address is {site.addressSingle}.
            </p>
            <p>
              Amanda is a mother of five. Her care is holistic and integrative:
              a clinical look at latch, milk transfer, weight, and oral
              function, held together with how you are healing and how your
              household actually runs. She will not hand you a script that
              ignores the baby in front of her, or the parent holding that baby.
            </p>
            <p>
              Families come before a baby arrives, in the tender first weeks,
              when something hurts, when supply or weight is a worry, and when
              a tongue-tie is part of the question.
            </p>
            <p>
              She also mentors IBCLC interns and doulas who are learning to
              practice with the same steadiness she brings to the families she
              serves.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] lg:mx-0 lg:aspect-auto lg:h-full lg:max-w-none lg:min-h-[28rem]">
              <Image
                src={publicPath("/images/Agalma-VIDA.jpg")}
                alt="Amanda Howell, IBCLC, in her office at Vida Wellness Center."
                fill
                priority
                sizes="(min-width: 1024px) 36vw, min(28rem, 100vw)"
                className="object-cover object-top"
              />
            </div>
          </div>
          <aside className="rounded-3xl bg-cream p-7 sm:p-9 lg:col-span-7 lg:col-start-1 lg:row-start-2">
            <h2 className="text-3xl">Credentials</h2>
            <ul className="mt-6 space-y-4">
              {credentials.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-ink"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section aria-labelledby="area-heading" className="border-y border-sage/50 bg-white">
        <Container className="py-16 lg:py-20">
          <p className="eyebrow">Service area</p>
          <h2 id="area-heading" className="mt-4 max-w-2xl text-4xl sm:text-5xl">
            Concord, and the greater Charlotte metro
          </h2>
          <p className="lede mt-5 max-w-2xl">
            Home visits are for families in Mecklenburg, Cabarrus, Matthews,
            Indian Trail, Waxhaw, Huntersville, Gaston, Mt. Holly, and Belmont.
            Virtual visits are there when the drive is the thing that makes
            care impossible.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {serviceArea.map((place) => (
              <li
                key={place}
                className="rounded-full bg-cream px-4 py-2 text-sm text-ink"
              >
                {place}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-blush">
        <Container className="grid gap-8 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          <div className="lg:col-span-8">
            <h2 className="max-w-3xl text-5xl sm:text-6xl">
              Mamas, you don’t have to do this alone.
            </h2>
            <p className="lede mt-5 max-w-xl">
              If feeding feels heavier than it should, start with a
              conversation. Amanda will help you sort out what kind of visit
              fits.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Cta href={site.calendly} external>
              Book a consult
            </Cta>
          </div>
        </Container>
      </section>
    </>
  );
}
