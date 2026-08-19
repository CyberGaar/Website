"use client";

import { useEffect, useState } from "react";

const industries = [
  {
    number: "01",
    title: "Financial services",
    copy: "Protect sensitive transactions, customer data and fast-moving digital products.",
  },
  {
    number: "02",
    title: "Healthcare",
    copy: "Reduce clinical and operational risk while keeping essential systems available.",
  },
  {
    number: "03",
    title: "Technology & SaaS",
    copy: "Build security into cloud infrastructure, applications and every release cycle.",
  },
  {
    number: "04",
    title: "Public sector",
    copy: "Strengthen critical services with clear assurance and pragmatic remediation.",
  },
];

const services = [
  {
    number: "01",
    title: "Security audits",
    copy: "A clear, evidence-led view of your controls, risks and readiness against the frameworks that matter.",
    meta: "ISO 27001 · SOC 2 · PCI DSS",
  },
  {
    number: "02",
    title: "Penetration testing",
    copy: "Human-led testing that shows how a real attacker could reach your systems, data and users.",
    meta: "Web · API · Cloud · Network",
  },
  {
    number: "03",
    title: "Vulnerability scanning",
    copy: "Continuous visibility across your attack surface, with noise removed and priorities made obvious.",
    meta: "External · Internal · Continuous",
  },
];

const solutions = [
  ["Assurance readiness", "Turn complex compliance requirements into a practical, achievable roadmap."],
  ["Attack surface clarity", "Know what is exposed, what matters most and what your team should fix first."],
  ["Secure product delivery", "Find weaknesses before release and help developers prevent them coming back."],
  ["Continuous resilience", "Combine recurring validation, tracking and advice into one security rhythm."],
];

const stories = [
  {
    type: "FINANCIAL SERVICES",
    title: "Making a fast-growing fintech ready for enterprise scrutiny",
    copy: "A focused audit and remediation plan gave leadership a clear route from security questions to confident answers.",
  },
  {
    type: "HEALTHCARE",
    title: "Finding critical exposure before it reached patient-facing systems",
    copy: "Targeted testing connected technical findings to operational risk, helping the team act in the right order.",
  },
  {
    type: "SAAS",
    title: "Building repeatable security into a high-velocity release cycle",
    copy: "A continuous testing cadence helped engineering teams spot issues earlier and ship with greater confidence.",
  },
];

const trustItems = ["MICROSOFT", "AWS", "CLOUDFLARE", "CISCO", "FORTINET", "GITHUB"];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Cybergaar home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>CYBER<strong>GAAR</strong></span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>

        <nav className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
          <a href="#industries" onClick={closeMenu}>Industries</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#solutions" onClick={closeMenu}>Solutions</a>
          <a href="#stories" onClick={closeMenu}>Client stories</a>
          <a className="header-cta" href="#contact" onClick={closeMenu}>Talk to an expert <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy reveal">
          <p className="eyebrow light"><span /> CYBER ASSURANCE, MADE CLEAR</p>
          <h1>See every gap.<br />Secure every move.</h1>
          <p className="hero-intro">
            We help businesses understand and reduce cyber risk through focused
            security audits, penetration testing and vulnerability scanning.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Start a conversation <Arrow /></a>
            <a className="text-link light-link" href="#services">Explore our services <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof" aria-label="Cybergaar approach">
            <span><b>01</b> Find the exposure</span>
            <span><b>02</b> Prioritise the risk</span>
            <span><b>03</b> Strengthen the business</span>
          </div>
        </div>

        <div className="globe-stage" aria-label="Animated globe showing global security standards">
          <p className="globe-kicker">ALIGNED WITH GLOBAL STANDARDS</p>
          <div className="orbit orbit-one" aria-hidden="true"><span>ISO 27001</span></div>
          <div className="orbit orbit-two" aria-hidden="true"><span>SOC 2</span></div>
          <div className="orbit orbit-three" aria-hidden="true"><span>PCI DSS</span></div>
          <div className="standards-globe" aria-hidden="true">
            <div className="globe-lines" />
            <div className="globe-map map-one" />
            <div className="globe-map map-two" />
            <div className="scan-line" />
          </div>
          <div className="standard-label standard-nist">NIST<span>CSF</span></div>
          <div className="standard-label standard-gdpr">GDPR<span>READY</span></div>
          <p className="globe-caption"><span className="pulse-dot" /> CONTINUOUSLY MAPPING YOUR RISK</p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Security technology ecosystem">
        <p>TRUSTED SECURITY ECOSYSTEMS</p>
        <div className="trust-window">
          <div className="trust-track">
            {[...trustItems, ...trustItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="positioning section-pad">
        <p className="eyebrow"><span /> PRACTICAL SECURITY FOR MODERN BUSINESS</p>
        <div className="positioning-grid">
          <h2>Security should make<br />the next move <em>clear.</em></h2>
          <div>
            <p>Cybergaar turns technical exposure into business decisions. Our specialists look deeper, explain plainly and stay focused on the risks that can genuinely affect your organisation.</p>
            <a className="text-link" href="#contact">Why Cybergaar <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="industries section-pad" id="industries">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> INDUSTRIES</p>
            <h2>Context changes<br />the risk.</h2>
          </div>
          <p>We bring security thinking shaped around how your organisation operates—not a generic checklist.</p>
        </div>
        <div className="industry-grid">
          {industries.map((industry) => (
            <a className="industry-card" href="#contact" key={industry.title}>
              <span className="card-number">{industry.number}</span>
              <div>
                <h3>{industry.title}</h3>
                <p>{industry.copy}</p>
              </div>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading light-heading">
          <div>
            <p className="eyebrow light"><span /> CORE SERVICES</p>
            <h2>Three ways to<br />know what&apos;s real.</h2>
          </div>
          <p>Direct answers, evidence you can use and a practical path to reduce your exposure.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <a className="service-row" href="#contact" key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span className="service-meta">{service.meta}</span>
              <span className="round-arrow"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="solutions section-pad" id="solutions">
        <div className="solutions-title">
          <p className="eyebrow"><span /> SOLUTIONS</p>
          <h2>From a finding<br />to a <em>stronger system.</em></h2>
        </div>
        <div className="solution-grid">
          {solutions.map(([title, copy], index) => (
            <article className={`solution-card solution-${index + 1}`} key={title}>
              <span className="solution-icon" aria-hidden="true">{index === 0 ? "◎" : index === 1 ? "⌁" : index === 2 ? "◇" : "↻"}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#contact" aria-label={`Explore ${title}`}>Explore <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="stories section-pad" id="stories">
        <div className="section-heading stories-heading">
          <div>
            <p className="eyebrow"><span /> CLIENT STORIES</p>
            <h2>Security work that<br />moves business forward.</h2>
          </div>
          <a className="text-link" href="#contact">View all stories <Arrow /></a>
        </div>
        <div className="story-grid">
          {stories.map((story, index) => (
            <article className="story-card" key={story.title}>
              <div className={`story-visual story-visual-${index + 1}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="story-grid-lines" aria-hidden="true" />
              </div>
              <div className="story-copy">
                <p className="story-type">{story.type} · REPRESENTATIVE ENGAGEMENT</p>
                <h3>{story.title}</h3>
                <p>{story.copy}</p>
                <a href="#contact" aria-label={`Read: ${story.title}`}>Read the story <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow light"><span /> LET&apos;S TALK</p>
          <h2>Ready to see your<br />risk more clearly?</h2>
        </div>
        <div className="contact-side">
          <p>Tell us what you&apos;re protecting, what&apos;s changing, or where you need certainty. We&apos;ll help you find the right first step.</p>
          <a className="button primary" href="mailto:hello@cybergaar.com">Talk to a security expert <Arrow /></a>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#top" aria-label="Cybergaar home">
            <span className="brand-mark" aria-hidden="true"><i /></span>
            <span>CYBER<strong>GAAR</strong></span>
          </a>
          <p>Clear assurance.<br />Stronger business.</p>
          <div className="footer-links">
            <a href="#industries">Industries</a>
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
            <a href="#stories">Client stories</a>
          </div>
          <div className="footer-links">
            <a href="mailto:hello@cybergaar.com">Contact</a>
            <a href="#top">LinkedIn</a>
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Cybergaar. All rights reserved.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
