import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Cta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";
import { episodes, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Resources/Podcast",
  description:
    "For the Love of Milk, the podcast co-hosted by Amanda Howell, IBCLC, plus mentorship for IBCLC interns and doulas.",
  path: "/resources",
});

const platforms = [
  { label: "Buzzsprout", href: site.podcast },
  { label: "Apple Podcasts", href: site.podcastApple },
  { label: "Spotify", href: site.podcastSpotify },
  { label: "Amazon Music", href: site.podcastAmazon },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources/Podcast"
        title="For the Love of Milk"
        lede="A podcast co-hosted by two holistic IBCLCs, Amanda and Anna. Each week they talk through clinical experience and the real stories of mothers in the highs and lows of breastfeeding."
      />

      <section className="bg-page">
        <Container className="py-16 lg:py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Cta href={site.podcast} external>
              Listen
            </Cta>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {platforms.map((platform) => (
                <li key={platform.href}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline decoration-blush decoration-2 underline-offset-4 hover:decoration-ink"
                  >
                    {platform.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="mt-14 text-4xl">Recent episodes</h2>
          <ol className="mt-6 divide-y divide-sage/70 border-y border-sage/70">
            {episodes.map((episode) => (
              <li key={episode.href}>
                <a
                  href={episode.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-2 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-6"
                >
                  <span className="font-display text-3xl text-ink">
                    {episode.number}
                  </span>
                  <span>
                    <span className="block font-display text-3xl text-ink group-hover:underline">
                      {episode.title}
                    </span>
                    <span className="mt-2 block text-sm">{episode.date}</span>
                    <span className="mt-2 block leading-relaxed">{episode.summary}</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed">
            Episodes are for education. They are not a substitute for care with
            your own clinician. More written resources can live here later.
          </p>
          <p className="mt-4">
            <a
              href={site.instagramFoods}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline decoration-blush decoration-2 underline-offset-4"
            >
              L4L Foods on Instagram
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </Container>
      </section>

      <section aria-labelledby="mentor-heading" className="bg-blush">
        <Container className="grid gap-8 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          <div className="lg:col-span-8">
            <p className="eyebrow">Mentorship</p>
            <h2 id="mentor-heading" className="mt-4 text-4xl sm:text-5xl">
              Mentor with me
            </h2>
            <p className="lede mt-5 max-w-2xl">
              Amanda mentors IBCLC interns and doulas who want to practice
              holistic, integrative lactation care. Mentorship is arranged one
              conversation at a time. There is no public fee.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Cta href={site.calendly} external>
              Book a discovery call
            </Cta>
          </div>
        </Container>
      </section>
    </>
  );
}
