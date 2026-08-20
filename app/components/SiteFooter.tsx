import { socials } from "../data/socials";

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <a className="brand footer-brand" href="/" aria-label="Cybergaar home">
          <img src="/logo.png" alt="Cybergaar" width="885" height="133" />
        </a>
        <div className="footer-links">
          <a href="/services/audits">Audits</a>
          <a href="/services/vulnerability-scanning">Vulnerability scanning</a>
          <a href="/services/penetration-testing">Penetration testing</a>
          <a href="/global-standards">Global standards</a>
          <a href="/product-studio">Product Studio</a>
          <a href="/expert-suggestions">Expert suggestions</a>
        </div>
        <div className="footer-links">
          <a href="/industries">Industries</a>
          <a href="/solutions">Solutions</a>
          <a href="/msp">MSP partners</a>
          <a href="/case-studies">Case studies</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
          <div className="social-links" aria-label="Cybergaar social links">
            {socials.map((social) => (
              <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>{social.label}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Cybergaar. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
