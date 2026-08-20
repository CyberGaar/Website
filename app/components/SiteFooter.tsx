export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <a className="brand footer-brand" href="/" aria-label="Cybergaar home">
          <img src="/logo.png" alt="Cybergaar" />
        </a>
        <p>Clear assurance.<br />Stronger business.</p>
        <div className="footer-links">
          <a href="/services/audits">Audits</a>
          <a href="/services/vulnerability-scanning">Vulnerability scanning</a>
          <a href="/services/penetration-testing">Penetration testing</a>
          <a href="/global-standards">Global standards</a>
          <a href="/product-studio">Product Studio</a>
        </div>
        <div className="footer-links">
          <a href="/industries">Industries</a>
          <a href="/solutions">Solutions</a>
          <a href="/msp">MSP partners</a>
          <a href="/case-studies">Case studies</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Cybergaar. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
