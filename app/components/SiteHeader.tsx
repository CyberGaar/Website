"use client";

import { useEffect, useState } from "react";
import { getServicesByCategory } from "../data/services";

const regions = [
  { code: "global", flag: "◎", label: "Global", href: "/" },
  { code: "uk", flag: "🇬🇧", label: "United Kingdom", href: "/uk" },
  { code: "pk", flag: "🇵🇰", label: "Pakistan", href: "/pk" },
];

const auditLinks = getServicesByCategory("audits").slice(0, 6);
const scanLinks = getServicesByCategory("vulnerability-scanning").slice(0, 4);
const pentestLinks = getServicesByCategory("penetration-testing").slice(0, 4);

const discoveryMenus = {
  industries: {
    title: "Industries",
    copy: "Security decisions grounded in your sector, your obligations and the way your organisation operates.",
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

type ActiveMenu = "services" | keyof typeof discoveryMenus;

function Arrow() {
  return <span aria-hidden="true">⟶</span>;
}

function Chevron() {
  return <span className="chevron" aria-hidden="true">⌄</span>;
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu | null>(null);
  const [currentRegion, setCurrentRegion] = useState(regions[0]);

  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    if (path === "/uk" || path.startsWith("/uk/")) setCurrentRegion(regions[1]);
    else if (path === "/pk" || path.startsWith("/pk/")) setCurrentRegion(regions[2]);
    else {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const language = navigator.language.toLowerCase();
      if (timeZone === "Asia/Karachi" || language.endsWith("-pk")) setCurrentRegion(regions[2]);
      else if (timeZone === "Europe/London" || language === "en-gb") setCurrentRegion(regions[1]);
    }
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setRegionOpen(false);
    setActiveMenu(null);
  };

  const toggleMenu = (menu: ActiveMenu) => {
    setRegionOpen(false);
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const renderServiceLinks = (items: typeof auditLinks) =>
    items.map((item) => (
      <a href={`/services/${item.slug}`} onClick={closeMenus} key={item.slug}>
        {item.shortName ?? item.name} <span aria-hidden="true">›</span>
      </a>
    ));

  return (
    <header className="site-header reference-header">
      <a className="brand" href="/" aria-label="Cybergaar home" onClick={closeMenus}>
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
          <button type="button" aria-expanded={activeMenu === "services"} onClick={() => toggleMenu("services")}>Services <Chevron /></button>
          <button type="button" aria-expanded={activeMenu === "industries"} onClick={() => toggleMenu("industries")}>Industries <Chevron /></button>
          <button type="button" aria-expanded={activeMenu === "solutions"} onClick={() => toggleMenu("solutions")}>Solutions <Chevron /></button>
          <a href="/msp" onClick={closeMenus}>MSP</a>
          <a href="/product-studio" onClick={closeMenus}>Product Studio</a>
          <a href="/#stories" onClick={closeMenus}>Client stories</a>
          <div className={`mobile-subnav ${activeMenu === "services" ? "mobile-subnav-open" : ""}`}>
            <a href="/services/audits" onClick={closeMenus}>All audits</a>
            <a href="/services/cyber-essentials" onClick={closeMenus}>Cyber Essentials</a>
            <a href="/services/vulnerability-scanning" onClick={closeMenus}>Vulnerability scanning</a>
            <a href="/services/penetration-testing" onClick={closeMenus}>Penetration testing</a>
          </div>
        </div>

        <div className="secondary-nav">
          <a href="/#contact" onClick={closeMenus}>Contact</a>
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
                  onClick={closeMenus}
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
          <div className="mega-menu" aria-label={`${activeMenu} menu`}>
            {activeMenu === "services" ? (
              <>
                <div className="mega-intro">
                  <p>EXPLORE CYBERGAAR</p>
                  <h2>Services</h2>
                  <span>Audit, scan and test your environment with evidence-led security services.</span>
                  <a href="/services" onClick={closeMenus}>Explore all services <Arrow /></a>
                </div>
                <div className="mega-groups mega-service-groups">
                  <div className="mega-group">
                    <h3><a href="/services/audits">Audit & compliance</a></h3>
                    {renderServiceLinks(auditLinks)}
                    <a className="mega-all" href="/services/audits" onClick={closeMenus}>View all 16 audits <Arrow /></a>
                  </div>
                  <div className="mega-group">
                    <h3><a href="/services/vulnerability-scanning">Vulnerability scanning</a></h3>
                    {renderServiceLinks(scanLinks)}
                    <a className="mega-all" href="/services/vulnerability-scanning" onClick={closeMenus}>View all 7 scans <Arrow /></a>
                  </div>
                  <div className="mega-group">
                    <h3><a href="/services/penetration-testing">Penetration testing</a></h3>
                    {renderServiceLinks(pentestLinks)}
                    <a className="mega-all" href="/services/penetration-testing" onClick={closeMenus}>View all 7 tests <Arrow /></a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mega-intro">
                  <p>EXPLORE CYBERGAAR</p>
                  <h2>{discoveryMenus[activeMenu].title}</h2>
                  <span>{discoveryMenus[activeMenu].copy}</span>
                  <a href={`/#${activeMenu}`} onClick={closeMenus}>Explore all {discoveryMenus[activeMenu].title.toLowerCase()} <Arrow /></a>
                </div>
                <div className="mega-groups">
                  {discoveryMenus[activeMenu].groups.map((group) => (
                    <div className="mega-group" key={group.title}>
                      <h3>{group.title}</h3>
                      {group.links.map((link) => <a href="/#contact" onClick={closeMenus} key={link}>{link} <span aria-hidden="true">›</span></a>)}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <button className="nav-scrim" type="button" aria-label="Close navigation menu" onClick={closeMenus} />
        </>
      )}
    </header>
  );
}

