"use client";

import { useState } from "react";

type Status = { type: "success" | "error"; text: string } | null;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setLoading(true);
    setStatus(null);

    const form = new FormData(formEl);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          message: form.get("message"),
          website: form.get("website"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong.");
      }

      formEl.reset();
      setStatus({
        type: "success",
        text: "Thank you. We will contact you shortly.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        text:
          err instanceof Error
            ? err.message
            : "Could not send your message. Please try again or contact us on WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contactForm">

      <input
        name="name"
        placeholder="Full Name"
        aria-label="Full Name"
        autoComplete="name"
        maxLength={100}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        aria-label="Email"
        autoComplete="email"
        maxLength={200}
        required
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone"
        aria-label="Phone"
        autoComplete="tel"
        maxLength={40}
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Tell us about your project"
        aria-label="Tell us about your project"
        maxLength={5000}
        required
      />

      {/* Honeypot field: hidden from users, filled only by bots */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <button className="button" disabled={loading}>
        {loading ? "Sending..." : "Request a consultation"}
      </button>

      {status && (
        <p
          role="status"
          style={{ color: status.type === "success" ? "#2e7d32" : "#c62828" }}
        >
          {status.text}
        </p>
      )}

    </form>
  );
}
