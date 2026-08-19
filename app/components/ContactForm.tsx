"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Cybergaar enquiry from ${company || name}`);
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n"));

    setStatus("Your email application is opening with the enquiry filled in.");
    window.location.href = `mailto:hello@cybergaar.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name<input name="name" type="text" autoComplete="name" required /></label>
        <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <div className="form-row">
        <label>Company<input name="company" type="text" autoComplete="organization" /></label>
        <label>What can we help with?
          <select name="service" defaultValue="Security audit">
            <option>Security audit</option>
            <option>Vulnerability scanning</option>
            <option>Penetration testing</option>
            <option>Product Studio</option>
            <option>MSP partnership</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label>Tell us about your requirement<textarea name="message" rows={6} required /></label>
      <button type="submit">Prepare email <span aria-hidden="true">⟶</span></button>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}

