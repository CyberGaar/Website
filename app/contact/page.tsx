import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Cybergaar",
  description: "Talk to Cybergaar about security audits, vulnerability scanning, penetration testing, compliance automation or an MSP partnership.",
};

export default function ContactPage() {
  return (
    <main className="inner-page" id="top">
      <SiteHeader />
      <section className="contact-page-hero">
        <div>
          <p className="eyebrow"><span /> CONTACT CYBERGAAR</p>
          <h1>Start with the risk you need to understand.</h1>
          <p>Tell us what you are protecting, what has changed or where you need certainty. We will help identify the right first step.</p>
        </div>
        <aside>
          <p>DIRECT EMAIL</p>
          <a href="mailto:hello@cybergaar.com">hello@cybergaar.com</a>
          <span>We aim to respond within one business day.</span>
        </aside>
      </section>
      <section className="contact-form-section">
        <div><p>YOUR ENQUIRY</p><h2>Give us enough context to make the first conversation useful.</h2></div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}

