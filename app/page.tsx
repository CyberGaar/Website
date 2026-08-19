import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import GlobeAnimation from "./components/GlobeAnimation";
import { caseStudies } from "./data/caseStudies";

const offers = [
  {
    id: "industries",
    icon: "◉",
    title: "Industries",
    copy: "Security shaped around your operational reality, regulatory pressure and the systems your organisation depends on.",
    items: ["Financial services", "Healthcare", "Technology & SaaS", "Public sector", "Retail & eCommerce", "Critical infrastructure"],
    href: "/#contact",
  },
  {
    id: "services",
    icon: "✣",
    title: "Services",
    copy: "Clear, evidence-led security services that reveal exposure, test resilience and make the next action obvious.",
    items: ["Security audits", "Penetration testing", "Vulnerability scanning", "Cyber Essentials", "ISO 27001", "SOC 2 readiness"],
    href: "/services",
  },
  {
    id: "solutions",
    icon: "⊞",
    title: "Solutions",
    copy: "Practical programmes that turn one-off findings into stronger controls, better visibility and continuous resilience.",
    items: ["Assurance readiness", "Attack surface clarity", "Secure product delivery", "Continuous resilience"],
    href: "/product-studio",
  },
];

const trustItems = ["MICROSOFT", "AWS", "CLOUDFLARE", "CISCO", "FORTINET", "GITHUB"];

function Arrow() {
  return <span aria-hidden="true">⟶</span>;
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero reference-hero" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> CYBER ASSURANCE, MADE CLEAR</p>
          <h1>See every gap.<br />Secure every move.</h1>
          <p className="hero-intro">
            We help businesses understand and reduce cyber risk through focused
            security audits, penetration testing and vulnerability scanning.
          </p>
          <a className="reference-link" href="/services">Explore what we do <Arrow /></a>
        </div>

        <div className="globe-stage" aria-label="Animated globe showing global security standards">
          <GlobeAnimation />
        </div>
      </section>

      <section className="trust-strip" aria-label="Trusted security ecosystem">
        <p>TRUSTED SECURITY ECOSYSTEM</p>
        <div className="trust-window">
          <div className="trust-track">
            {[...trustItems, ...trustItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="offers" aria-label="Cybergaar industries, services and solutions">
        {offers.map((offer) => (
          <article className="offer-column" id={offer.id} key={offer.title}>
            <div className="offer-title">
              <span className="offer-icon" aria-hidden="true">{offer.icon}</span>
              <h2>{offer.title}</h2>
            </div>
            <p>{offer.copy}</p>
            <div className="offer-pills">
              {offer.items.map((item) => <a href={offer.href} key={item}>{item}</a>)}
            </div>
            <a className="offer-explore" href={offer.href}>Explore all {offer.title.toLowerCase()} <Arrow /></a>
          </article>
        ))}
      </section>

      <section className="about-statement" id="about">
        <p>Cybergaar turns technical exposure into business decisions. We look deeper, explain plainly and focus on the risks that can genuinely affect your organisation.</p>
      </section>

      <section className="stories reference-stories" id="stories">
        <div className="reference-section-title">
          <h2>Client stories</h2>
          <a href="/case-studies">See all client stories <Arrow /></a>
        </div>
        <div className="story-grid">
          {caseStudies.map((story, index) => (
            <article className="story-card" key={story.title}>
              <div className={`story-visual story-visual-${index + 1}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="story-grid-lines" aria-hidden="true" />
              </div>
              <div className="story-copy">
                <p className="story-type">{story.sector.toUpperCase()} · REPRESENTATIVE ENGAGEMENT</p>
                <h3>{story.title}</h3>
                <p>{story.summary}</p>
                <a href={`/case-studies/${story.slug}`} aria-label={`Read: ${story.title}`}>Read the story <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact reference-contact" id="contact">
        <div>
          <p className="eyebrow"><span /> HOW CAN WE HELP?</p>
          <h2>Let&apos;s make your<br />next move secure.</h2>
        </div>
        <div className="contact-side">
          <p>Tell us what you&apos;re protecting, what&apos;s changing, or where you need certainty. We&apos;ll help you find the right first step.</p>
          <a className="reference-link" href="/contact">Contact Cybergaar <Arrow /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
