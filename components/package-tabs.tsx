"use client";

import { useEffect, useState } from "react";
import { Cta } from "@/components/cta";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { packages, pricingNote, site, type PackageGroup } from "@/lib/site";

const ids = new Set(packages.map((group) => group.id));

function readHash() {
  if (typeof window === "undefined") return "prenatal";
  const id = window.location.hash.replace("#", "");
  return ids.has(id) ? id : "prenatal";
}

function OfferingCard({
  offering,
  heading,
}: {
  offering: PackageGroup["offerings"][number];
  heading: "h2" | "h3";
}) {
  const Title = heading;
  return (
    <article className="flex h-full flex-col rounded-3xl border border-sage/80 bg-white p-7 sm:p-9">
      <Title className="text-[2.15rem] sm:text-4xl">{offering.title}</Title>
      <p className="mt-4 text-[1.05rem] leading-relaxed">{offering.pitch}</p>
      <p className="mt-8 font-sans text-xs font-semibold tracking-[0.16em] text-ink uppercase">
        Includes
      </p>
      <ul className="mt-4 space-y-3">
        {offering.includes.map((item) => (
          <li key={item} className="flex gap-3 text-[1.02rem] leading-relaxed">
            <span
              aria-hidden="true"
              className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-ink"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 rounded-2xl bg-cream px-5 py-4 text-[0.98rem] leading-relaxed">
        {pricingNote}
      </p>
      <div className="mt-8">
        <Cta href={site.calendly} external>
          Book a discovery call
        </Cta>
      </div>
    </article>
  );
}

export function PackageTabs() {
  const [value, setValue] = useState("prenatal");

  useEffect(() => {
    const apply = () => {
      const id = readHash();
      setValue(id);
      if (window.location.hash && ids.has(window.location.hash.replace("#", ""))) {
        document.getElementById("packages")?.scrollIntoView({ block: "start" });
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  return (
    <Tabs
      id="packages"
      value={value}
      onValueChange={(next, details) => {
        if (details.reason !== "none") return;
        const id = String(next);
        setValue(id);
        const nextUrl = `${window.location.pathname}#${id}`;
        window.history.replaceState(null, "", nextUrl);
      }}
      className="scroll-mt-28 gap-8"
    >
      <TabsList
        aria-label="Packages"
        className="flex h-auto w-full flex-wrap justify-start gap-2 rounded-3xl bg-cream p-3 sm:p-4"
        style={{ height: "auto" }}
      >
        {packages.map((group) => (
          <TabsTrigger
            key={group.id}
            value={group.id}
            className="h-auto flex-none rounded-full bg-sage px-4 py-3 text-left text-[0.95rem] font-medium whitespace-normal text-ink hover:bg-white data-active:bg-white data-active:text-ink data-active:shadow-sm"
            style={{ height: "auto" }}
          >
            {group.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {packages.map((group) => (
        <TabsContent key={group.id} value={group.id} className="outline-none">
          {group.offerings.length === 1 ? (
            <OfferingCard offering={group.offerings[0]} heading="h2" />
          ) : (
            <div>
              <h2 className="sr-only">{group.label}</h2>
              <div className="grid gap-5 lg:grid-cols-2">
                {group.offerings.map((offering) => (
                  <OfferingCard key={offering.title} offering={offering} heading="h3" />
                ))}
              </div>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}
