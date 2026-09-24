"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Cta } from "@/components/cta";
import { Container } from "@/components/container";
import { Wordmark } from "@/components/logo";
import { nav, site } from "@/lib/site";
import { cn } from "cn";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

function isCurrent(pathname: string, href: string) {
  const current = normalize(pathname);
  const target = normalize(href);
  if (target === "/") return current === "/";
  return current === target;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const getFocusable = () =>
      panel
        ? Array.from(panel.querySelectorAll<HTMLElement>("a, button"))
        : [];
    getFocusable()[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-sage/70 bg-white">
      <Container className="flex h-[4.75rem] items-center justify-between gap-4">
        <Link href="/" aria-label="Leche 4 Life Lactation, home" className="rounded-sm">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-x-6 xl:flex">
          {nav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "text-[0.95rem] text-ink hover:underline hover:decoration-blush hover:decoration-2 hover:underline-offset-[0.55rem]",
                  current &&
                    "underline decoration-blush decoration-2 underline-offset-[0.55rem]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Cta
            href={site.calendly}
            external
            className="hidden h-10 px-4 text-sm sm:inline-flex xl:inline-flex"
          >
            Book a consult
          </Cta>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink xl:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id={panelId}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="border-t border-sage/60 bg-white xl:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col px-5 py-4 sm:px-8">
            <Cta href={site.calendly} external className="mb-2 w-full sm:hidden">
              Book a consult
            </Cta>
            {nav.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "border-b border-sage/40 py-3 text-lg text-ink",
                    current && "font-medium",
                  )}
                >
                  {item.label}
              </Link>
            );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
