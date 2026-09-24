import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";
import { serviceArea, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Amanda Howell, IBCLC, at Leche 4 Life Lactation. Call 980-313-1037 or send a message to book a consult in Concord and the greater Charlotte metro.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a consult"
        lede="Share a little about feeding and how you would like to meet. Amanda will follow up by phone or email. This form does not hold a calendar spot by itself."
      />

      <section className="bg-page">
        <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-sage/70 bg-white p-6 sm:p-9">
              <h2 className="text-4xl">Send a message</h2>
              <p className="mt-3 leading-relaxed">
                Prefer to call?{" "}
                <a href={site.phoneHref} className="font-medium underline decoration-blush decoration-2 underline-offset-4">
                  {site.phoneDisplay}
                </a>
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-cream p-6 sm:p-9">
              <h2 className="text-4xl">Reach Amanda</h2>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a href={site.phoneHref} className="hover:underline">
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] uppercase">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a href={site.emailHref} className="break-all hover:underline">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] uppercase">
                    Visits
                  </dt>
                  <dd className="mt-1 leading-relaxed">
                    Home visits in {serviceArea.join(", ")}. Virtual visits
                    are available beyond that drive.
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] uppercase">
                    Social
                  </dt>
                  <dd className="mt-2 flex flex-col gap-2">
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Instagram
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <a
                      href={site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Facebook
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
