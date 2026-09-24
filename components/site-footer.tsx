import Link from "next/link";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Wordmark tone="cream" />
          <p className="mt-5 max-w-xs text-[0.98rem] leading-relaxed text-cream">
            Holistic lactation care for families in Concord and the greater
            Charlotte metro.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="text-xs font-semibold tracking-[0.18em] text-cream uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-5">
          <p className="text-xs font-semibold tracking-[0.18em] text-cream uppercase">
            Visit
          </p>
          <ul className="mt-4 space-y-2 text-[0.98rem] leading-relaxed">
            <li>
              <a href={site.phoneHref} className="hover:underline">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              Home and virtual visits
              <span className="mt-1 block">
                Greater Charlotte metro
                <br />
                Based in Concord, North Carolina
              </span>
            </li>
            <li className="pt-2">
              <a
                href={site.instagram}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-cream/25">
        <Container className="py-5 text-sm text-cream">
          © 2026 Leche 4 Life Lactation
        </Container>
      </div>
    </footer>
  );
}
