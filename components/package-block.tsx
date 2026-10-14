import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/container";
import { Cta } from "@/components/cta";
import { publicPath } from "@/lib/base-path";
import type { SalesPackage } from "@/lib/site";
import { cn } from "cn";

function Accordion({ title, items }: { title: string; items: string[] }) {
  return (
    <details className="group border-b border-sage/70">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown
          aria-hidden="true"
          className="size-5 shrink-0 transition-transform group-open:rotate-180"
          strokeWidth={1.5}
        />
      </summary>
      <ul className="space-y-3 pb-5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span
              aria-hidden="true"
              className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-ink"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}

export function PackageBlock({
  pkg,
  index,
  cta,
}: {
  pkg: SalesPackage;
  index: number;
  cta: { href: string; label: string; external?: boolean };
}) {
  const flipped = index % 2 === 1;
  const headingId = `${pkg.id}-heading`;
  return (
    <section
      id={pkg.id}
      aria-labelledby={headingId}
      className={cn(
        "scroll-mt-28 border-b border-sage/50",
        flipped ? "bg-white" : "bg-page",
      )}
    >
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div
          className={cn(
            "relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] lg:aspect-[4/5]",
            flipped && "lg:order-2",
          )}
        >
          <Image
            src={publicPath(pkg.image.src)}
            alt={pkg.image.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className={cn(flipped && "lg:order-1")}>
          <h2 id={headingId} className="text-4xl sm:text-5xl">
            {pkg.name}
          </h2>
          <p className="lede mt-5">{pkg.forWho}</p>

          <div className="mt-8 border-t border-sage/70">
            <Accordion title="What’s included" items={pkg.included} />
            <Accordion title="What we’ll cover" items={pkg.cover} />
            <Accordion title="Visit breakdown" items={pkg.breakdown} />
          </div>

          <div className="mt-8 rounded-2xl bg-cream px-6 py-5">
            <p className="eyebrow">Investment</p>
            <p className="mt-1 font-display text-4xl">{pkg.price}</p>
          </div>

          <div className="mt-8">
            <Cta
              href={cta.href}
              external={cta.external}
              className="h-14 px-8 text-lg font-semibold"
            >
              {cta.label}
            </Cta>
          </div>
        </div>
      </Container>
    </section>
  );
}
