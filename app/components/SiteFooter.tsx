export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <a className="brand footer-brand" href="/" aria-label="Cybergaar home">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>CYBER<strong>GAAR</strong></span>
        </a>
        <p>Clear assurance.<br />Stronger business.</p>
        <div className="footer-links">
          <a href="/services/audits">Audits</a>
          <a href="/services/vulnerability-scanning">Vulnerability scanning</a>
          <a href="/services/penetration-testing">Penetration testing</a>
          <a href="/product-studio">Product Studio</a>
        </div>
        <div className="footer-links">
          <a href="/msp">MSP partners</a>
          <a href="mailto:hello@cybergaar.com">Contact</a>
          <a href="/uk">United Kingdom site</a>
          <a href="/pk">Pakistan site</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Cybergaar. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

