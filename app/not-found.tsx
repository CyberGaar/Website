import type { Metadata } from "next";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Page not found | Cybergaar",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="inner-page" id="top">
      <SiteHeader />
      <section className="inner-hero case-studies-hero">
        <div><p className="eyebrow"><span /> 404</p><h1>This page could not be found.</h1></div>
        <p>The link may be out of date. Try our services, training or contact page instead.</p>
      </section>
      <section className="case-study-list">
        <article className="case-study-row">
          <div className="case-study-index">→</div>
          <div><p>KEEP EXPLORING</p><h2>Find what you were looking for.</h2></div>
          <a href="/services">Explore services <span aria-hidden="true">⟶</span></a>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
