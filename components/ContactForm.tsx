"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        phone: form.get("phone"),
        message: form.get("message"),
      }),
    });

    setLoading(false);

    alert("Thank you. We will contact you shortly.");
  }

  return (
    <form onSubmit={handleSubmit} className="contactForm">

      <input
        name="name"
        placeholder="Full Name"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
      />

      <input
        name="phone"
        placeholder="Phone"
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Tell us about your project"
        required
      />

      <button className="button" disabled={loading}>
        {loading ? "Sending..." : "Request Consultation"}
      </button>

    </form>
  );
}
