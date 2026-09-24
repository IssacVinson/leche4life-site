"use client";

import { useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

const fieldClass =
  "h-12 rounded-xl border-sage bg-white px-3.5 text-base text-ink md:text-base";

const linkClass =
  "font-medium underline decoration-blush decoration-2 underline-offset-4";

type Status = "idle" | "sending" | "sent" | "error";

const mentorshipNote =
  "I'd like to ask about mentorship for an IBCLC intern or a doula.";

function subscribeToTopic() {
  return () => {};
}

function getTopic() {
  return new URLSearchParams(window.location.search).get("topic") ?? "";
}

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
  const topic = useSyncExternalStore(subscribeToTopic, getTopic, () => "");
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const messageValue = message ?? (topic === "mentorship" ? mentorshipNote : "");

  if (!id) {
    return (
      <div role="status" className="rounded-3xl bg-cream px-6 py-8 sm:px-8">
        <p className="leading-relaxed">
          This form is not set up to send yet. {fallbackCopy()}
        </p>
      </div>
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      setMessage("");
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
      action={`https://formspree.io/f/${id}`}
      method="POST"
      onSubmit={onSubmit}
      className="space-y-5"
      noValidate={false}
    >
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
        <Label htmlFor="name">Name</Label>
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
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          value={messageValue}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-40 rounded-xl border-sage bg-white px-3.5 py-3 text-base text-ink md:text-base"
          placeholder="How you are feeding, your baby’s age if they are here, and whether you prefer virtual, home, or office."
        />
      </div>

      <p className="text-sm leading-relaxed">
        Amanda reads these herself and will follow up to find a time.
      </p>

      {status === "error" ? (
        <p role="alert" className="rounded-2xl bg-blush px-4 py-3 text-sm leading-relaxed">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="h-12 rounded-full px-6 text-base font-medium hover:bg-primary hover:brightness-[0.97]"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
      <p className="text-sm leading-relaxed">
        If you or your baby need urgent medical care, call your provider or 911.
        This form is not an emergency line.
      </p>
    </form>
  );
}
