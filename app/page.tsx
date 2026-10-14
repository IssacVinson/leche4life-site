import type { Metadata } from "next";
import Link from "next/link";
import { House, Video } from "lucide-react";
import { Botanical } from "@/components/botanical";
import { Container } from "@/components/container";
import { Cta } from "@/components/cta";
import { PathCards } from "@/components/path-cards";
import { pageMetadata } from "@/lib/seo";
import { serviceArea, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Leche 4 Life Lactation | Amanda Howell, IBCLC",
  description:
    "Holistic lactation support for Charlotte-area families. Amanda Howell, IBCLC, offers home and virtual visits. Based in Concord, North Carolina.",
  path: "/",
  absolute: true,
});

const visits = [
  {
    title: "Virtual",
    icon: Video,
    body: "A full consult from your own space. Useful before baby arrives, for follow-ups, and when getting out of the house is the hard part.",
  },
  {
    title: "Home",
    icon: House,
    body: "Amanda comes to you. Home visits cover the greater Charlotte metro, so feeding can be assessed where it actually happens.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="grid items-center gap-10 py-16 sm:gap-12 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div className="lg:col-span-7">
            <p className="eyebrow">Amanda Howell, IBCLC · Concord, North Carolina</p>
            <h1 className="display-xl mt-4 max-w-3xl">
              Holistic lactation support for <em>Charlotte-area</em> families
            </h1>
            <p className="lede mt-5 max-w-xl">
              IBCLC care from pregnancy through postpartum — so you can feed
              your baby with confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Cta href="/expecting/" className="font-semibold">
                I’m Expecting
              </Cta>
              <Cta href="/baby-is-here/" className="font-semibold">
                The Baby Is Here
              </Cta>
            </div>
            <ul className="mt-8 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li>Supporting families since 2005</li>
              <li>Home and virtual visits</li>
              <li>Greater Charlotte metro</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-[2rem] bg-blush px-6 pt-8 pb-16 sm:px-8 sm:pt-10">
                <Botanical />
                <p className="mt-2 font-display text-3xl leading-tight italic sm:text-4xl">
                  Clinical care, close to home, without the rush.
                </p>
                <p className="mt-4 text-sm">Supporting families since 2005</p>
              </div>
              <div className="relative z-10 -mt-8 ml-4 max-w-sm rounded-2xl border border-sage/50 bg-white p-5 shadow-[0_16px_40px_rgba(81,81,66,0.08)] sm:ml-8">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase">
                  Visits
                </p>
                <p className="mt-2 font-display text-3xl">Home and virtual</p>
                <p className="mt-1 text-sm leading-relaxed">
                  Greater Charlotte metro
                  <br />
                  Based in Concord, North Carolina
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="how-heading" className="bg-page">
        <Container className="py-16 lg:py-20">
          <p className="eyebrow">Visit options</p>
          <h2 id="how-heading" className="mt-4 text-4xl sm:text-5xl">
            How I work
          </h2>
          <p className="lede mt-5 max-w-2xl">
            Same clinician, two ways to meet. Choose what fits the week you
            are in.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:max-w-5xl lg:gap-8">
            {visits.map((visit) => (
              <article
                key={visit.title}
                className="flex flex-col rounded-3xl border border-sage/70 bg-white p-7"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-cream text-ink">
                  <visit.icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-3xl">{visit.title}</h3>
                <p className="mt-3 leading-relaxed">{visit.body}</p>
                {visit.title === "Home" ? (
                  <p className="mt-5 border-t border-sage/60 pt-5 text-sm leading-relaxed">
                    {serviceArea.join(" · ")}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="paths-heading" className="border-y border-sage/50 bg-white">
        <Container className="py-16 lg:py-20">
          <p className="eyebrow">Where are you right now?</p>
          <h2 id="paths-heading" className="mt-4 max-w-xl text-4xl sm:text-5xl">
            Choose your path
          </h2>
          <div className="mt-12 lg:mt-14">
            <PathCards />
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-heading" className="bg-blush">
        <Container className="grid gap-8 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          <div className="lg:col-span-8">
            <p className="eyebrow">About</p>
            <h2 id="about-heading" className="mt-4 text-4xl sm:text-5xl">
              Amanda Howell, IBCLC
            </h2>
            <p className="lede mt-5 max-w-2xl">
              Supporting Charlotte-area families since 2005. Amanda is a mother
              and a holistic, integrative clinician. She also mentors IBCLC
              interns and doulas. The work is clinical. The point is that you
              are not left alone with it.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/about"
              className="text-base font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
            >
              About Amanda
            </Link>
          </div>
        </Container>
      </section>

      <section aria-labelledby="podcast-heading" className="bg-cream">
        <Container className="grid gap-8 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          <div className="lg:col-span-7">
            <p className="eyebrow">Podcast</p>
            <h2 id="podcast-heading" className="mt-4 text-4xl sm:text-5xl">
              For the Love of Milk
            </h2>
            <p className="lede mt-5 max-w-xl">
              Amanda co-hosts this show with fellow IBCLC Anna. Weekly
              conversations for mothers who want feeding support that sounds
              like a real person.
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <Cta href={site.podcast} external>
              Listen
            </Cta>
          </div>
        </Container>
      </section>

      <section aria-labelledby="close-heading" className="bg-ink">
        <Container className="py-16 text-cream lg:py-20">
          <h2 id="close-heading" className="max-w-3xl text-5xl text-cream sm:text-6xl">
            You don’t have to do this alone.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream">
            Start with where you are right now.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Cta href="/expecting/" className="font-semibold">
              I’m Expecting
            </Cta>
            <Cta href="/baby-is-here/" className="font-semibold">
              The Baby Is Here
            </Cta>
          </div>
        </Container>
      </section>
    </>
  );
}
