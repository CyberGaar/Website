export type CaseStudy = {
  slug: string;
  sector: string;
  title: string;
  summary: string;
  tags?: string[];
  metrics?: { label: string; value: string }[];
  challenge: string;
  approach: string;
  outcome: string;
  challengePoints?: { title: string; detail: string }[];
  solutionPoints?: { title: string; detail: string }[];
  hurdles?: { issue: string; fix: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cloudflare-zero-trust-shared-access",
    sector: "Technology",
    title: "Zero Trust controls for shared customer access",
    summary: "A data analytics firm needed rapid access to short-term customer environments without losing accountability when clients only provided shared credentials.",
    tags: ["AWS", "Cloudflare", "GCP", "Zero Trust", "VPN", "IAM", "Logging", "Application security"],
    metrics: [
      { label: "HTTP/HTTPS visibility", value: "100%" },
      { label: "Shared credential attribution", value: "92%" },
      { label: "Cloudflare tier", value: "Free Tier" },
    ],
    challenge: "Customers refused to provision individual RBAC or federated SSO because engagements often lasted less than two weeks. Five analysts sometimes had to use one admin@client.com account, creating compliance risk, zero visibility and no clear answer to questions like: who deleted the table?",
    approach: "Cybergaar routed access through Cloudflare Gateway and identity-aware device policies. Even where the destination application still saw a shared customer account, the gateway authenticated the individual employee before forwarding traffic and preserved a secondary audit trail.",
    outcome: "The firm gained practical user-level attribution, safer third-party access sharing, better observability across applications and a lower-cost path to compliance evidence without forcing every customer to redesign their identity stack.",
    challengePoints: [
      { title: "Shared Credentials", detail: "Customers would not create individual accounts or enable SSO for short engagements, so analysts were pushed toward shared logins." },
      { title: "Zero Visibility", detail: "Customer-side logs only showed the shared account, leaving no reliable way to identify which internal analyst performed a risky action." },
      { title: "Compliance Risk", detail: "Manual onboarding and offboarding created windows where former employees could retain access to critical SaaS tools." },
    ],
    solutionPoints: [
      { title: "Identity-Aware Proxying", detail: "Cloudflare Gateway authenticated the employee via the WARP client before traffic reached the shared customer account." },
      { title: "Hardware-Identity Bind", detail: "Password vault access was tied to corporate email and approved device posture so shared credentials could only be used from trusted endpoints." },
      { title: "Granular Traffic Inspection", detail: "HTTP/HTTPS logging captured visited URLs and API calls at the edge so activity could be reconstructed after the fact." },
    ],
    hurdles: [
      { issue: "VPN vs. Zero Trust Conflict: analysts needed to simulate traffic from countries such as Brazil, but VPN software conflicted with the Zero Trust client.", fix: "Configured browser-level SOCKS5 proxies so country-specific testing could continue without breaking endpoint routing." },
      { issue: "Log Retention on Free Tier: Cloudflare free/standard retention windows were too short for 90-day audit evidence.", fix: "Implemented a weekly export process for CSV logs so the client could retain evidence outside the dashboard." },
    ],
  },
  {
    slug: "cisco-router-network-hardening",
    sector: "Network security",
    title: "Auditing Cisco routers for misconfiguration and legacy risk",
    summary: "A professional services firm regained control of a black-box network, removed ghost devices and improved video stability without replacing all infrastructure immediately.",
    tags: ["Cisco", "PuTTY", "IP scanning", "SSH", "Load balancing", "QoS", "Nmap", "Vulnerability scanning"],
    metrics: [
      { label: "Admin control restored", value: "100%" },
      { label: "Legacy devices identified", value: "4+" },
      { label: "Video jitter reduction", value: "40%" },
    ],
    challenge: "The network had been set up years earlier by a departed contractor. Passwords were lost, shadow devices had been added without oversight, and video conferencing traffic competed with low-priority traffic during stakeholder meetings.",
    approach: "Cybergaar performed a controlled network assessment, recovered router access through ROMMON, scanned for unknown devices, hardened legacy services and configured QoS/load balancing around business-critical traffic.",
    outcome: "The client regained administrative control, removed unmanaged devices, reduced video jitter and received a practical hardening plan for end-of-life equipment until budget was available for replacement.",
    challengePoints: [
      { title: "Gap in Security", detail: "The infrastructure had never been reviewed for security because the original vendor focused only on connectivity." },
      { title: "Unknown Devices", detail: "The business had no current inventory of connected devices or what each one was doing." },
      { title: "Congested Pipelines", detail: "Video conferencing traffic had no priority and was frequently degraded by background usage." },
    ],
    solutionPoints: [
      { title: "Full Network Scan", detail: "Nmap and manual validation were used to identify exposed services, active hosts and legacy risks." },
      { title: "Shadow Device Identification", detail: "Unmanaged Raspberry Pis and small servers were located and moved toward safer segmentation." },
      { title: "Intelligent Traffic Shaping", detail: "QoS and load balancing were configured to prioritise voice/video packets over background data." },
    ],
    hurdles: [
      { issue: "Gaining Entry: lost admin passwords meant the router could not be safely managed.", fix: "Bypassed startup-config through ROMMON, reset secrets and secured administrative access without wiping business-critical settings." },
      { issue: "Legacy Hardware Risk: the router firmware was end-of-life and could not receive modern patches.", fix: "Applied a hardening template, disabled non-essential services and reduced exposed attack surface until replacement was approved." },
    ],
  },
  {
    slug: "iso-42001-ai-governance-saas",
    sector: "SaaS",
    title: "AI governance for a SaaS provider using ISO 42001",
    summary: "A SaaS provider needed a practical AI governance baseline that could support customer assurance, application security and future ISO 42001 readiness.",
    tags: ["ISO 42001", "AI governance", "SaaS", "Application security", "IAM", "Logging", "Risk management", "Compliance"],
    metrics: [
      { label: "AI systems inventoried", value: "100%" },
      { label: "Governance gaps prioritised", value: "4+" },
      { label: "Evidence model", value: "Reusable" },
    ],
    challenge: "AI features had been added quickly across the product without a consistent register of use cases, model risks, access paths or evidence needed for customer reviews and future ISO 42001 alignment.",
    approach: "Cybergaar mapped AI use cases, reviewed data flows, aligned control expectations to ISO 42001 themes and built a lightweight governance workflow for risk ownership, logging, approvals and periodic review.",
    outcome: "The SaaS provider gained a structured AI governance backlog, clearer ownership for model and data risk, and a reusable evidence model for enterprise customers asking about AI security and compliance.",
    challengePoints: [
      { title: "Shadow AI Usage", detail: "Teams were using AI-enabled tooling without one consolidated register or approval workflow." },
      { title: "Application Risk", detail: "Model inputs, outputs and customer data exposure needed to be reviewed alongside normal application security controls." },
      { title: "Assurance Pressure", detail: "Enterprise customers wanted clear answers about AI governance before procurement and renewal." },
    ],
    solutionPoints: [
      { title: "AI System Inventory", detail: "Documented AI features, supporting vendors, data categories, access rights and business owners." },
      { title: "ISO 42001 Mapping", detail: "Mapped governance, risk, monitoring and improvement activities to ISO 42001 readiness themes." },
      { title: "Evidence Workflow", detail: "Created practical evidence expectations for approvals, risk reviews, logs and periodic control checks." },
    ],
    hurdles: [
      { issue: "Fast Product Change: AI features were evolving faster than formal governance could be written.", fix: "Used a lightweight register and recurring review cadence instead of a heavy one-time policy exercise." },
      { issue: "Unclear Ownership: product, engineering and security all owned part of the risk but no single workflow connected them.", fix: "Defined control owners and escalation points for AI-related security, privacy and compliance decisions." },
    ],
  },
  {
    slug: "fintech-enterprise-readiness",
    sector: "Financial services",
    title: "Making a fast-growing fintech ready for enterprise scrutiny",
    summary: "A focused audit and remediation plan gave leadership a clear route from security questions to confident answers.",
    challenge: "A growing fintech needed to answer increasingly detailed customer security reviews without slowing its commercial momentum.",
    approach: "Cybergaar reviewed the control environment, organised the evidence and translated gaps into a prioritised remediation plan.",
    outcome: "Leadership gained a repeatable assurance process and a clearer way to respond to enterprise security expectations.",
  },
  {
    slug: "healthcare-exposure-validation",
    sector: "Healthcare",
    title: "Finding critical exposure before it reached patient-facing systems",
    summary: "Targeted testing connected technical findings to operational risk, helping the team act in the right order.",
    challenge: "A healthcare environment needed an independent view of weaknesses that could affect sensitive and patient-facing services.",
    approach: "Cybergaar combined vulnerability analysis with targeted validation, then ranked findings by plausible operational impact.",
    outcome: "The security team received a focused remediation sequence that put the most consequential exposure first.",
  },
  {
    slug: "saas-secure-delivery",
    sector: "SaaS",
    title: "Building repeatable security into a high-velocity release cycle",
    summary: "A continuous testing cadence helped engineering teams spot issues earlier and ship with greater confidence.",
    challenge: "A SaaS team needed stronger security coverage without adding a heavy gate to a fast product-release cycle.",
    approach: "Cybergaar introduced a practical testing cadence, clear ownership and developer-ready remediation guidance.",
    outcome: "Security findings moved earlier in the delivery cycle and the team gained a more predictable route to closure.",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
