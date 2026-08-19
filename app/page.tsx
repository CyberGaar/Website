"use client";

import { useEffect, useState } from "react";

const offers = [
  {
    id: "industries",
    icon: "◉",
    title: "Industries",
    copy: "Security shaped around your operational reality, regulatory pressure and the systems your organisation depends on.",
    items: ["Financial services", "Healthcare", "Technology & SaaS", "Public sector", "Retail & eCommerce", "Critical infrastructure"],
  },
  {
    id: "services",
    icon: "✣",
    title: "Services",
    copy: "Clear, evidence-led security services that reveal exposure, test resilience and make the next action obvious.",
    items: ["Security audits", "Penetration testing", "Vulnerability scanning", "Cloud security review", "Application security", "Compliance readiness"],
  },
  {
    id: "solutions",
    icon: "⊞",
    title: "Solutions",
    copy: "Practical programmes that turn one-off findings into stronger controls, better visibility and continuous resilience.",
    items: ["Assurance readiness", "Attack surface clarity", "Secure product delivery", "Continuous resilience"],
  },
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

const regions = [
  { code: "global", flag: "◎", label: "Global", href: "/" },
  { code: "uk", flag: "🇬🇧", label: "United Kingdom", href: "/uk" },
  { code: "pk", flag: "🇵🇰", label: "Pakistan", href: "/pk" },
];

const navMenus = {
  services: {
    title: "Services",
    copy: "Focused security expertise that helps you understand exposure, validate resilience and act with confidence.",
    groups: [
      { title: "Audit & assurance", links: ["Security audits", "Compliance readiness", "Cloud security review"] },
      { title: "Offensive security", links: ["Penetration testing", "Web & API testing", "Network testing"] },
      { title: "Continuous protection", links: ["Vulnerability scanning", "Attack surface monitoring", "Remediation validation"] },
    ],
  },
  industries: {
    title: "Industries",
    copy: "Security decisions grounded in your sector, your obligations and the way your organisation really operates.",
    groups: [
      { title: "Regulated", links: ["Financial services", "Healthcare", "Public sector"] },
      { title: "Digital", links: ["Technology & SaaS", "Retail & eCommerce", "Digital platforms"] },
      { title: "Essential", links: ["Critical infrastructure", "Energy & utilities", "Professional services"] },
    ],
  },
  solutions: {
    title: "Solutions",
    copy: "Practical security programmes designed around the outcome your organisation needs next.",
    groups: [
      { title: "Prepare", links: ["Assurance readiness", "Compliance roadmap", "Security baseline"] },
      { title: "Discover", links: ["Attack surface clarity", "Exposure validation", "Risk prioritisation"] },
      { title: "Improve", links: ["Secure product delivery", "Continuous resilience", "Developer enablement"] },
    ],
  },
} as const;

function Arrow() {
  return <span aria-hidden="true">⟶</span>;
}

function Chevron() {
  return <span className="chevron" aria-hidden="true">⌄</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<keyof typeof navMenus | null>(null);
  const [currentRegion, setCurrentRegion] = useState(regions[0]);

  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    if (path.startsWith("/uk")) {
      setCurrentRegion(regions[1]);
      return;
    }
    if (path.startsWith("/pk")) {
      setCurrentRegion(regions[2]);
      return;
    }

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const language = navigator.language.toLowerCase();
    if (timeZone === "Asia/Karachi" || language.endsWith("-pk")) setCurrentRegion(regions[2]);
    else if (timeZone === "Europe/London" || language === "en-gb") setCurrentRegion(regions[1]);
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setRegionOpen(false);
    setActiveMenu(null);
  };

  const handleNavMenu = (menu: keyof typeof navMenus) => {
    if (window.innerWidth <= 900) {
      document.getElementById(menu)?.scrollIntoView({ behavior: "smooth" });
      closeMenus();
      return;
    }
    setRegionOpen(false);
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <main>
      <header className="site-header reference-header">
        <a className="brand" href="#top" aria-label="Cybergaar home" onClick={closeMenus}>
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
          <div className="primary-nav">
            <button type="button" aria-expanded={activeMenu === "services"} onClick={() => handleNavMenu("services")}>Services <Chevron /></button>
            <button type="button" aria-expanded={activeMenu === "industries"} onClick={() => handleNavMenu("industries")}>Industries <Chevron /></button>
            <button type="button" aria-expanded={activeMenu === "solutions"} onClick={() => handleNavMenu("solutions")}>Solutions <Chevron /></button>
            <a href="#stories" onClick={closeMenus}>Client stories</a>
            <a href="#about" onClick={closeMenus}>About</a>
            <button className="search-button" type="button" aria-label="Search Cybergaar"><span /></button>
          </div>

          <div className="secondary-nav">
            <a href="#contact" onClick={closeMenus}>Contact</a>
            <div className="region-picker">
              <button
                type="button"
                className="region-button"
                aria-expanded={regionOpen}
                aria-controls="region-menu"
                onClick={() => {
                  setActiveMenu(null);
                  setRegionOpen(!regionOpen);
                }}
              >
                <span className="region-flag">{currentRegion.flag}</span>
                <span>{currentRegion.label}</span>
                <Chevron />
              </button>
              <div className={`region-menu ${regionOpen ? "region-menu-open" : ""}`} id="region-menu">
                <p>Select a Cybergaar site</p>
                {regions.map((region) => (
                  <a
                    className={currentRegion.code === region.code ? "active-region" : ""}
                    href={region.href}
                    key={region.code}
                    onClick={() => {
                      setCurrentRegion(region);
                      closeMenus();
                    }}
                  >
                    <span>{region.flag}</span>{region.label}
                    {currentRegion.code === region.code && <b aria-label="Current site">✓</b>}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {activeMenu && (
          <>
            <div className="mega-menu" aria-label={`${navMenus[activeMenu].title} menu`}>
              <div className="mega-intro">
                <p>EXPLORE CYBERGAAR</p>
                <h2>{navMenus[activeMenu].title}</h2>
                <span>{navMenus[activeMenu].copy}</span>
                <a href={`#${activeMenu}`} onClick={closeMenus}>Explore all {navMenus[activeMenu].title.toLowerCase()} <Arrow /></a>
              </div>
              <div className="mega-groups">
                {navMenus[activeMenu].groups.map((group) => (
                  <div className="mega-group" key={group.title}>
                    <h3>{group.title}</h3>
                    {group.links.map((link) => <a href="#contact" onClick={closeMenus} key={link}>{link} <span aria-hidden="true">›</span></a>)}
                  </div>
                ))}
              </div>
            </div>
            <button className="nav-scrim" type="button" aria-label="Close navigation menu" onClick={closeMenus} />
          </>
        )}
      </header>

      <section className="hero reference-hero" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> CYBER ASSURANCE, MADE CLEAR</p>
          <h1>See every gap.<br />Secure every move.</h1>
          <p className="hero-intro">
            We help businesses understand and reduce cyber risk through focused
            security audits, penetration testing and vulnerability scanning.
          </p>
          <a className="reference-link" href="#services">Explore what we do <Arrow /></a>
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
              {offer.items.map((item) => <a href="#contact" key={item}>{item}</a>)}
            </div>
            <a className="offer-explore" href="#contact">Explore all {offer.title.toLowerCase()} <Arrow /></a>
          </article>
        ))}
      </section>

      <section className="about-statement" id="about">
        <p>Cybergaar turns technical exposure into business decisions. We look deeper, explain plainly and focus on the risks that can genuinely affect your organisation.</p>
      </section>

      <section className="stories reference-stories" id="stories">
        <div className="reference-section-title">
          <h2>Client stories</h2>
          <a href="#contact">See all client stories <Arrow /></a>
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

      <section className="contact reference-contact" id="contact">
        <div>
          <p className="eyebrow"><span /> HOW CAN WE HELP?</p>
          <h2>Let&apos;s make your<br />next move secure.</h2>
        </div>
        <div className="contact-side">
          <p>Tell us what you&apos;re protecting, what&apos;s changing, or where you need certainty. We&apos;ll help you find the right first step.</p>
          <a className="reference-link" href="mailto:hello@cybergaar.com">Contact Cybergaar <Arrow /></a>
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
            <a href="/uk">United Kingdom site</a>
            <a href="/pk">Pakistan site</a>
            <a href="#top">Privacy</a>
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
