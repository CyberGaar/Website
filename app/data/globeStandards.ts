export type GlobeCountry = {
  name: string;
  region: string;
  standards: string[];
  relatedServices: string[];
};

export const globeCountries: GlobeCountry[] = [
  { name: "United States", region: "North America", standards: ["NIST CSF", "SOC 2", "HIPAA", "PCI DSS", "GLBA"], relatedServices: ["SOC 2 readiness", "NIST control mapping", "PCI DSS readiness"] },
  { name: "Canada", region: "North America", standards: ["PIPEDA", "ISO 27001", "CyberSecure Canada"], relatedServices: ["ISO 27001 implementation", "privacy controls", "security audit"] },
  { name: "Mexico", region: "North America", standards: ["LFPDPPP", "ISO 27001"], relatedServices: ["ISO audit", "privacy readiness", "vulnerability scanning"] },
  { name: "Brazil", region: "South America", standards: ["LGPD", "ISO 27001"], relatedServices: ["privacy review", "ISO 27001 implementation", "application security"] },
  { name: "Argentina", region: "South America", standards: ["PDPA", "ISO 27001", "Law 25.326"], relatedServices: ["ISO audit", "data protection review", "security testing"] },
  { name: "United Kingdom", region: "Europe", standards: ["Cyber Essentials", "Cyber Essentials Plus", "UK GDPR", "ISO 27001"], relatedServices: ["Cyber Essentials readiness", "ISO 27001 audit", "vulnerability scanning"] },
  { name: "France", region: "Europe", standards: ["GDPR", "NIS2", "SecNumCloud"], relatedServices: ["NIS2 readiness", "cloud security review", "application security"] },
  { name: "Germany", region: "Europe", standards: ["BSI", "GDPR", "IT-SiG", "KRITIS"], relatedServices: ["security audit", "incident readiness", "penetration testing"] },
  { name: "Spain", region: "Europe", standards: ["ENS", "GDPR", "NIS2"], relatedServices: ["compliance gap assessment", "NIS2 readiness", "cloud security"] },
  { name: "Italy", region: "Europe", standards: ["ISO 27001", "GDPR", "NIS2"], relatedServices: ["ISO 27001 implementation", "GDPR review", "application security testing"] },
  { name: "Netherlands", region: "Europe", standards: ["BIO", "GDPR", "NIS2"], relatedServices: ["control assessment", "NIS2 readiness", "vulnerability scanning"] },
  { name: "Sweden", region: "Europe", standards: ["ISO 27001", "NIS2"], relatedServices: ["ISO audit", "NIS2 readiness", "security implementation"] },
  { name: "Poland", region: "Europe", standards: ["ISO 27001", "NIS2"], relatedServices: ["ISO 27001 readiness", "security audit", "penetration testing"] },
  { name: "China", region: "Asia", standards: ["MLPS", "PIPL", "CSL", "DSL"], relatedServices: ["privacy controls", "security assessment", "cloud security review"] },
  { name: "Japan", region: "Asia", standards: ["ISMS", "APPI", "Cybersecurity Basic Act"], relatedServices: ["ISMS readiness", "application security", "security audit"] },
  { name: "India", region: "Asia", standards: ["CERT-In", "DPDPA", "IT Act 2000"], relatedServices: ["incident readiness", "data protection review", "penetration testing"] },
  { name: "Pakistan", region: "Asia", standards: ["PECA", "NCSS", "ISO 27001"], relatedServices: ["ISO 27001 implementation", "vulnerability scanning", "application security testing"] },
  { name: "Australia", region: "Asia Pacific", standards: ["ISM", "Essential Eight", "Privacy Act", "SOCI Act"], relatedServices: ["Essential Eight review", "cloud security", "penetration testing"] },
  { name: "Singapore", region: "Asia Pacific", standards: ["PDPA", "CSA", "Cyber Security Act"], relatedServices: ["PDPA review", "application security", "vulnerability scanning"] },
  { name: "Saudi Arabia", region: "Middle East", standards: ["ECC", "NCA", "PDPL", "SAMA CSF"], relatedServices: ["SAMA readiness", "cloud security review", "security audit"] },
  { name: "UAE", region: "Middle East", standards: ["ISR", "NESA", "PDPL"], relatedServices: ["security audit", "cloud security", "penetration testing"] },
  { name: "South Africa", region: "Africa", standards: ["POPIA", "Cybercrimes Act"], relatedServices: ["privacy review", "vulnerability scanning", "application security"] },
  { name: "Nigeria", region: "Africa", standards: ["NDPR", "Cybercrimes Act"], relatedServices: ["data protection review", "security audit", "penetration testing"] },
  { name: "Kenya", region: "Africa", standards: ["DPA", "Computer Misuse and Cybercrimes Act"], relatedServices: ["privacy readiness", "application security", "vulnerability scanning"] },
];

export const globeRegions = Array.from(new Set(globeCountries.map((country) => country.region)));
