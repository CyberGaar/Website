import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Thank you | Cybergaar",
  description: "Your enquiry has been sent to Cybergaar.",
  alternates: { canonical: "/contact/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <main className="inner-page" id="top">
      <SiteHeader />
      <section className="inner-hero case-studies-hero">
        <div><p className="eyebrow"><span /> MESSAGE SENT</p><h1>Thank you. We will be in touch.</h1></div>
        <p>We aim to respond within one business day. In the meantime, see how we work in our case studies and training.</p>
      </section>
      <section className="case-study-list">
        <article className="case-study-row">
          <div className="case-study-index">→</div>
          <div><p>WHILE YOU WAIT</p><h2>Read how we turn findings into action.</h2></div>
          <a href="/case-studies">Case studies <span aria-hidden="true">⟶</span></a>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
