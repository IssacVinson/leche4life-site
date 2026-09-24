"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";
import { cn } from "cn";

const fieldClass =
  "h-12 rounded-xl border-sage bg-white px-3.5 text-base text-ink md:text-base";

const linkClass =
  "font-medium underline decoration-blush decoration-2 underline-offset-4";

const journeys = ["Pregnant", "Baby is here"] as const;
type Journey = (typeof journeys)[number];

type Status = "idle" | "sending" | "sent" | "error";

function formspreeId() {
  const id = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim() ?? "";
  return /^[A-Za-z0-9]+$/.test(id) ? id : "";
}

function fallbackCopy() {
  return (
    <>
      Email{" "}
      <a href={site.emailHref} className={linkClass}>
        {site.email}
      </a>{" "}
      or call{" "}
      <a href={site.phoneHref} className={linkClass}>
        {site.phoneDisplay}
      </a>
      .
    </>
  );
}

export function ContactForm() {
  const id = formspreeId();
  const [journey, setJourney] = useState<Journey | "">("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!id) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_gotcha") || "").trim()) {
      setStatus("sent");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      form.reset();
      setJourney("");
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(
        `The form could not send just now. Email ${site.email} or call ${site.phoneDisplay}.`,
      );
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl bg-cream px-6 py-10 sm:px-8">
        <h2 className="text-4xl">Message sent</h2>
        <p className="mt-4 leading-relaxed">
          Thank you. Your message was received. This note does not hold a spot
          on the calendar by itself. Amanda will follow up by phone or email.
        </p>
        <button
          type="button"
          className="mt-6 text-base font-medium underline decoration-ink/40 underline-offset-4"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      action={id ? `https://formspree.io/f/${id}` : undefined}
      method="POST"
      onSubmit={onSubmit}
      className="space-y-5"
      noValidate={false}
    >
      {!id ? (
        <div role="status" className="rounded-3xl bg-cream px-6 py-8 sm:px-8">
          <p className="leading-relaxed">
            This form is not set up to send yet. {fallbackCopy()}
          </p>
        </div>
      ) : null}

      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input
        type="hidden"
        name="_subject"
        value="Consult request from the Leche 4 Life website"
      />

      <div className="space-y-2">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" autoComplete="name" required className={fieldClass} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClass}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className={fieldClass}
        />
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">Where are you in your journey?</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {journeys.map((option) => {
            const selected = journey === option;
            return (
              <label
                key={option}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border border-sage bg-white px-4 py-3 text-base text-ink",
                  selected && "border-ink bg-cream",
                )}
              >
                <input
                  type="radio"
                  name="journey"
                  value={option}
                  required
                  checked={selected}
                  onChange={() => setJourney(option)}
                  className="size-4 accent-ink"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      {journey === "Pregnant" ? (
        <div className="space-y-2">
          <Label htmlFor="baby-due-date">Baby’s due date</Label>
          <Input
            id="baby-due-date"
            name="baby_due_date"
            type="date"
            required
            className={fieldClass}
          />
        </div>
      ) : null}

      {journey === "Baby is here" ? (
        <div className="space-y-2">
          <Label htmlFor="baby-birth-date">Baby’s date of birth</Label>
          <Input
            id="baby-birth-date"
            name="baby_date_of_birth"
            type="date"
            required
            className={fieldClass}
          />
        </div>
      ) : null}

      <div className="space-y-2">
        <Label htmlFor="town-and-state">Town and state</Label>
        <Input
          id="town-and-state"
          name="town_and_state"
          autoComplete="address-level2"
          required
          className={fieldClass}
          placeholder="Concord, NC"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="feeding-challenge">
          What’s been challenging about feeding? / How can I support you?
        </Label>
        <Textarea
          id="feeding-challenge"
          name="feeding_challenge"
          required
          className="min-h-40 rounded-xl border-sage bg-white px-3.5 py-3 text-base text-ink md:text-base"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="how-did-you-hear">
          How did you hear about Leche 4 Life?{" "}
          <span className="font-normal text-ink/70">(optional)</span>
        </Label>
        <Input id="how-did-you-hear" name="how_did_you_hear" className={fieldClass} />
      </div>

      <p className="text-sm leading-relaxed">
        Amanda reads these herself and will follow up to find a time.
      </p>

      {status === "error" ? (
        <p role="alert" className="rounded-2xl bg-blush px-4 py-3 text-sm leading-relaxed">
          {error}
        </p>
      ) : null}

      {id ? (
        <Button
          type="submit"
          disabled={status === "sending"}
          className="h-12 rounded-full px-6 text-base font-medium hover:bg-primary hover:brightness-[0.97]"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
      ) : null}

      <p className="text-sm leading-relaxed">
        If you or your baby need urgent medical care, call your provider or 911.
        This form is not an emergency line.
      </p>
    </form>
  );
}
