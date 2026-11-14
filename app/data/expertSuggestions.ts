export type ExpertSuggestion = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  readingTime: string;
  points: string[];
  relatedServices: Array<{ label: string; href: string }>;
  externalUrl?: string;
  datePublished?: string;
  sections?: Array<{ heading: string; paragraphs?: string[]; list?: string[] }>;
};

export const expertSuggestions: ExpertSuggestion[] = [
  {
    slug: "iso-27001-readiness-before-certification",
    title: "What to prepare before an ISO 27001 certification audit",
    summary: "A practical readiness checklist for teams that want fewer surprises before formal ISO 27001 assessment.",
    category: "ISO audit",
    readingTime: "5 min read",
    points: [
      "Define the ISMS scope in plain business terms before collecting evidence.",
      "Map people, business processes and technology assets to the controls you claim are operating.",
      "Run an internal gap assessment before involving the certification body.",
      "Keep evidence current, named and traceable to control ownership.",
    ],
    relatedServices: [
      { label: "ISO 27001", href: "/services/iso-27001" },
      { label: "Audit & compliance", href: "/services/audits" },
    ],
  },
  {
    slug: "cyber-essentials-evidence-checklist",
    title: "Cyber Essentials evidence checklist: what to collect before you apply",
    summary: "A practical checklist of the evidence and answers UK organisations should gather for the five Cyber Essentials controls before submitting.",
    category: "Cyber Essentials",
    readingTime: "7 min read",
    points: [
      "Define scope first: every device, user and cloud service that touches organisational data.",
      "Gather evidence for the five controls: firewalls, secure configuration, user access control, malware protection and security update management.",
      "Turn on multi-factor authentication for cloud services wherever it is offered.",
      "Remove or isolate unsupported software and patch critical and high-risk updates promptly.",
    ],
    relatedServices: [
      { label: "Cyber Essentials", href: "/services/cyber-essentials" },
      { label: "Audit & compliance", href: "/services/audits" },
    ],
    datePublished: "2026-11-14",
    sections: [
      {
        heading: "What Cyber Essentials asks for",
        paragraphs: [
          "Cyber Essentials is a UK government-backed scheme that checks whether an organisation has basic technical protections against common internet-based attacks. It is delivered through certification bodies licensed by the scheme operator, IASME, on behalf of the National Cyber Security Centre. There are two levels: Cyber Essentials, a verified self-assessment, and Cyber Essentials Plus, where a technical assessor tests your systems as well.",
          "Most failed or delayed applications come down to the same thing: the organisation could not show clearly what is in scope, or could not produce evidence that a control is actually applied. This checklist helps you gather that before you start the questionnaire. Cybergaar helps organisations prepare, but only the certification body can award certification.",
        ],
      },
      {
        heading: "Step 1: define and document your scope",
        paragraphs: ["Scope is the most common source of problems, so settle it first. Write down:"],
        list: [
          "The legal entity and any subsidiaries covered by the certificate.",
          "Every laptop, desktop, server, phone and tablet that accesses organisational data, including personal devices used for work.",
          "Every office network, home-working arrangement and cloud service in use.",
          "Who has access to what, including contractors and third-party administrators.",
        ],
      },
      {
        heading: "Step 2: boundary firewalls and internet gateways",
        paragraphs: ["Evidence that traffic between your devices and the internet is controlled:"],
        list: [
          "A list of firewalls or router firewalls in use, including the firewall built into each laptop for home working.",
          "Confirmation that default administrator passwords have been changed.",
          "Evidence that administration of firewalls is not exposed to the internet without protection.",
          "A record of any inbound rules that allow access from the internet, with a business reason for each.",
        ],
      },
      {
        heading: "Step 3: secure configuration",
        list: [
          "Unnecessary software, accounts and services removed or disabled.",
          "Default passwords changed on every device and service.",
          "Password policy or technical controls that block weak or guessed passwords.",
          "Automatic screen lock on devices, and auto-run disabled for removable media.",
          "An inventory of installed software and who approved it.",
        ],
      },
      {
        heading: "Step 4: user access control",
        list: [
          "A list of user accounts, with leavers removed promptly.",
          "Separate administrator accounts that are not used for email or web browsing.",
          "Multi-factor authentication enabled on all cloud services that support it, which the scheme requires, and on administrator accounts.",
          "A record of who has administrative rights and why.",
        ],
      },
      {
        heading: "Step 5: malware protection",
        list: [
          "Anti-malware software, or an approved application allow-listing approach, installed and active on in-scope devices.",
          "Evidence that protection updates automatically and scans files when they are accessed.",
          "For mobile devices, apps installed only from approved stores, or a managed allow-list.",
        ],
      },
      {
        heading: "Step 6: security update management",
        paragraphs: [
          "This control catches many applicants. Operating systems, applications and firmware must be supported and kept up to date.",
        ],
        list: [
          "Every device and piece of software is a supported version. Unsupported software must be removed or isolated from the internet.",
          "Critical and high-risk updates are applied within 14 days of release.",
          "Automatic updates are switched on where possible, with evidence such as a patch report or screenshot.",
          "Licensed software is used throughout, with end-of-life dates tracked.",
        ],
      },
      {
        heading: "Cyber Essentials Plus: what changes",
        paragraphs: [
          "For the Plus level, an assessor will check a sample of your devices and test your internet-facing systems directly. Expect them to verify patch levels, malware protection, and whether harmful email or web content is blocked. Run your own vulnerability scan and fix what it finds before the assessment, because failures found on the day can mean a retest.",
        ],
      },
      {
        heading: "Evidence checklist at a glance",
        list: [
          "Scope statement and asset inventory.",
          "Firewall configuration and rule review records.",
          "Account list, admin account list and joiner-and-leaver records.",
          "MFA settings for each cloud service.",
          "Anti-malware and patch status reports for sampled devices.",
          "Software inventory with supported versions and end-of-life dates.",
          "Sign-off by a senior person who is accountable for the answers.",
        ],
      },
      {
        heading: "Common reasons applications fail",
        list: [
          "Unsupported operating systems or software still in use on in-scope devices.",
          "MFA not turned on for email or cloud services.",
          "Home-working devices left out of scope.",
          "Shared administrator accounts and default passwords left unchanged.",
          "Answers given from memory with no evidence to support them.",
        ],
      },
    ],
  },
  {
    slug: "vulnerability-scanning-without-noise",
    title: "How to make vulnerability scanning useful instead of noisy",
    summary: "Scanning only helps when assets, credentials, validation and remediation ownership are handled properly.",
    category: "Vulnerability scanning",
    readingTime: "4 min read",
    points: [
      "Start with an asset list that separates public-facing, internal, cloud and endpoint scope.",
      "Use authenticated scanning where deeper patch and configuration evidence is required.",
      "Validate high-risk findings before sending teams a long remediation queue.",
      "Track repeat findings because they show process gaps, not just technical gaps.",
    ],
    relatedServices: [
      { label: "Vulnerability scanning", href: "/services/vulnerability-scanning" },
      { label: "Authenticated scanning", href: "/services/authenticated-vulnerability-scanning" },
    ],
  },
  {
    slug: "pentest-scope-that-matches-business-risk",
    title: "How to scope a penetration test around business risk",
    summary: "A pentest should reflect what the business actually relies on: people, applications, cloud, network paths and data flows.",
    category: "Penetration testing",
    readingTime: "5 min read",
    points: [
      "List the applications, identities, integrations and data flows that create real business exposure.",
      "Separate external attacker perspective from internal compromise scenarios.",
      "Include cloud and API scope when the product depends on managed services.",
      "Agree proof-of-impact rules before testing begins so reporting is useful and safe.",
    ],
    relatedServices: [
      { label: "Penetration testing", href: "/services/penetration-testing" },
      { label: "Web application pentest", href: "/services/web-application-penetration-testing" },
    ],
    datePublished: "2026-11-14",
    sections: [
      {
        heading: "Why scope decides the value of a penetration test",
        paragraphs: [
          "A penetration test only finds what it is pointed at. If the scope lists a marketing website but your real exposure sits in a customer API, an admin portal or a cloud storage bucket, the report can come back clean while the actual risk is untouched. Scope is the single biggest factor in whether a test is worth the money.",
          "A good scope starts from the business, not from an IP range. Ask what would hurt most if it were taken over, leaked or taken offline, then work back to the systems that make that possible.",
        ],
      },
      {
        heading: "Step 1: list what the business depends on",
        paragraphs: ["Before choosing test types, write down the assets that matter. Include the ones people forget:"],
        list: [
          "Customer-facing web applications and mobile apps, including their backend APIs.",
          "Identity systems: single sign-on, admin consoles, service accounts and API keys.",
          "Third-party integrations such as payment providers, CRMs and messaging services.",
          "Cloud accounts and the services running in them: storage, databases, containers and serverless functions.",
          "Internal networks, remote access and any systems that hold regulated or customer data.",
        ],
      },
      {
        heading: "Step 2: choose the attacker perspective",
        paragraphs: [
          "An external test assumes an attacker with no access, starting from the internet. An internal or assumed-breach test starts with a foothold, such as a compromised laptop or a low-privilege account, and asks how far an attacker could go. Most organisations need both, but if budget is limited, start with the perspective that matches your most likely threat. Internet-facing SaaS products usually start external and authenticated, while organisations with large offices and legacy networks often learn more from an internal test.",
        ],
      },
      {
        heading: "Step 3: decide the depth for each target",
        list: [
          "Black box: no information provided. It is closest to a real outsider but spends time on discovery.",
          "Grey box: test accounts and some documentation. This is usually the best value for web applications and APIs, because testers go straight to business logic and access control flaws.",
          "White box: source code or architecture access. It gives the deepest coverage and suits high-risk or regulated systems.",
        ],
      },
      {
        heading: "Step 4: include APIs, cloud and mobile when they exist",
        paragraphs: [
          "Modern products rarely live in one web page. If your mobile app talks to an API, test the API directly, because that is where authorisation bugs appear. If your product depends on managed cloud services, include configuration review of IAM roles, storage permissions and exposed services, since many serious findings are misconfigurations rather than code flaws.",
        ],
      },
      {
        heading: "Step 5: agree the rules of engagement",
        paragraphs: ["Put these in writing before testing starts, so the work is safe and the report is useful:"],
        list: [
          "Testing window, including any times to avoid such as month-end processing.",
          "Out-of-scope systems and third-party services you cannot authorise testing against.",
          "How far testers may go to prove impact, for example whether they may read sample data or only demonstrate access.",
          "Who to contact immediately if a critical issue is found mid-test.",
          "Whether social engineering or physical testing is allowed.",
          "Retest arrangements, so fixes can be verified afterwards.",
        ],
      },
      {
        heading: "A short scoping checklist",
        list: [
          "Have we listed every application, API and cloud account that holds customer data?",
          "Do we know whether we need an external view, an internal view, or both?",
          "Will testers get accounts for each user role, so they can test access control between them?",
          "Are third-party systems either excluded or authorised in writing?",
          "Have we agreed the proof-of-impact rules and an emergency contact?",
          "Is a retest included to confirm remediation?",
        ],
      },
      {
        heading: "Common scoping mistakes",
        list: [
          "Testing only the public website and leaving APIs and admin portals out.",
          "Scoping by IP count instead of by what the business would lose.",
          "Giving no test accounts, so testers cannot see anything behind the login.",
          "Treating the report as the finish line instead of planning remediation and a retest.",
        ],
      },
    ],
  },
  {
    slug: "pci-secure-software-key-management",
    title: "PCI Secure Software and the key management requirement",
    summary: "How PCI SSF objectives around strong cryptography and key lifecycle management connect to modern key infrastructure such as HashiCorp Vault.",
    category: "PCI DSS",
    readingTime: "6 min read",
    points: [
      "PCI SSF Security Objectives 8 and 9 require strong cryptography and controlled key lifecycle management, not just a completed checklist.",
      "Traditional hardware security modules and in-house key management often struggle with the automated, cloud-native delivery patterns payment software now uses.",
      "Identity-based secret management platforms can provide short-lived credentials, rotation, revocation and audit evidence that PCI assessors look for.",
      "The tool is only part of the requirement. Engineering teams still own secure configuration and the full key lifecycle within their application.",
    ],
    relatedServices: [
      { label: "PCI DSS", href: "/services/pci-dss" },
      { label: "Application security", href: "/services/web-application-penetration-testing" },
    ],
    externalUrl: "https://www.linkedin.com/pulse/pci-secure-software-requirement-key-management-solution-cybergaar-vp8wf/?trackingId=Gf9YgqauxXJVbdEW%2FLt0BQ%3D%3D",
  },
  {
    slug: "cisco-network-hardening-audit-checklist",
    title: "Hardening your Cisco network: a security audit checklist",
    summary: "A baseline set of Cisco IOS checks for disabling legacy services, locking down management access, and verifying interface, routing and logging configuration.",
    category: "Network security",
    readingTime: "3 min read",
    points: [
      "Check that legacy services such as Finger, PAD and TCP/UDP small servers are disabled to reduce reconnaissance and amplification risk.",
      "Review management access through VTY lines, SNMP, local user accounts and HTTP/HTTPS server settings.",
      "Verify interface hardening including Proxy ARP, CDP exposure on untrusted interfaces and IP directed broadcast controls.",
      "Confirm logging is active and sent to a secure syslog server so audit evidence is retained.",
    ],
    relatedServices: [
      { label: "Network penetration testing", href: "/services/network-penetration-testing" },
      { label: "Network vulnerability scanning", href: "/services/network-vulnerability-scanning" },
    ],
    externalUrl: "https://medium.com/@cybergaar1/hardening-your-cisco-network-a-complete-security-audit-checklist-4a356c3109d5?postPublishedType=initial",
  },
  {
    slug: "vibe-coder-guide-to-security",
    title: "A vibe coder's guide to security",
    summary: "A practical guide for developers using AI assistants to identify, verify and fix common security issues before they ship.",
    category: "Application security",
    readingTime: "25 min read",
    points: [
      "Use the same AI tools that generated the code to inspect for issues such as secret leaks, package hallucinations and misplaced client-side trust.",
      "Check for weak input validation, broken object-level authorization and missing rate limits before exposing an API.",
      "Review configuration for default credentials, overly broad CORS and IAM settings, and disabled data isolation.",
      "Treat AI output as a starting point, not a security guarantee: verify findings against the actual code and enforce controls server-side.",
    ],
    relatedServices: [
      { label: "Application security", href: "/services/web-application-penetration-testing" },
      { label: "Web application pentest", href: "/services/web-application-penetration-testing" },
    ],
    externalUrl: "https://medium.com/@cybergaar1/vibe-coder-guide-to-security-cc7f682d396e?postPublishedType=initial",
  },
];

export const getExpertSuggestion = (slug: string) => expertSuggestions.find((suggestion) => suggestion.slug === slug);
