export type TrainingSession = {
  title: string;
  venue: string;
  date: string;
  /** ISO start date, only where the exact day is confirmed. */
  isoDate?: string;
  isoEndDate?: string;
  audience: string;
  summary: string;
  topics: string[];
  href: string;
  source: string;
};

export const trainingSessions: TrainingSession[] = [
  {
    title: "AI Red-Team Workshop: OWASP Top 10 for LLM Applications",
    venue: "UBIT, University of Karachi",
    date: "2 November 2026",
    isoDate: "2026-11-02",
    isoEndDate: "2026-11-02",
    audience: "About 90 students",
    summary: "A hands-on workshop on attacking and defending large language model applications, including live hacking of an LLM.",
    topics: ["OWASP Top 10 for LLMs", "AI red teaming", "LLM security"],
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7523312659409113088",
    source: "LinkedIn",
  },
  {
    title: "OWASP AI Exchange: PwnzzAI hands-on LLM security workshop",
    venue: "NED University of Engineering and Technology, Karachi",
    date: "2026",
    audience: "Students, organised with CyberSents",
    summary: "A practical session covering how LLM applications fail and how to defend them.",
    topics: ["Prompt injection", "Insecure output handling", "Supply-chain vulnerabilities", "Denial-of-service risks", "Secure defence strategies"],
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7509835404020232192",
    source: "LinkedIn",
  },
  {
    title: "Cyber Circle: how modern digital exploits work",
    venue: "NIC Karachi",
    date: "11 September 2026, 3:00 to 6:00 PM",
    isoDate: "2026-09-11T15:00:00+05:00",
    isoEndDate: "2026-09-11T18:00:00+05:00",
    audience: "Students and professionals",
    summary: "A community session with an expert panel, career guidance and networking, hosted with the National Incubation Center Karachi.",
    topics: ["Prompt injection", "Modern exploit mechanics", "Cybersecurity careers", "Networking"],
    href: "https://www.instagram.com/cybergaar/p/DdGjWUgNpBj/",
    source: "Instagram",
  },
  {
    title: "CyberGaar × YES: cybersecurity awareness session",
    venue: "Youth Entrepreneurship Society, Salim Habib University",
    date: "September 2026",
    audience: "Students",
    summary: "A collaboration with the Youth Entrepreneurship Society covering social engineering and cybersecurity career paths.",
    topics: ["Social engineering", "Career opportunities", "Cyber awareness"],
    href: "https://www.instagram.com/youthentrepreneurship.shu/reel/DdPAtOlIudN/",
    source: "Instagram",
  },
];

export type MediaItem = {
  title: string;
  outlet: string;
  date: string;
  kind: "Press" | "Event" | "Community";
  /** ISO publication date, only where the outlet shows an exact date. */
  isoDate?: string;
  /** True for independent third-party coverage. */
  independent?: boolean;
  summary: string;
  href: string;
};

export const mediaItems: MediaItem[] = [
  {
    title: "National Incubation Center Karachi startup CyberGaar joins Pakistan cybersecurity delegation at GISEC Global 2026",
    outlet: "DealBeat",
    date: "23 October 2026",
    kind: "Press",
    isoDate: "2026-10-23",
    independent: true,
    summary: "CyberGaar's founder joined Pakistan's cybersecurity delegation at GISEC Global 2026 in Dubai (16 to 18 September). CyberGaar is a Cohort 15 startup at NIC Karachi.",
    href: "https://dealbeat.ink/national-incubation-center-karachi-startup-cybergaar-joins-pakistan-cybersecurity-delegation-at-gisec-global-2026/",
  },
  {
    title: "NIC Karachi Cohort 15: 36 startups selected for the 2026 incubation programme",
    outlet: "DealBeat",
    date: "4 April 2026",
    kind: "Press",
    isoDate: "2026-04-04",
    independent: true,
    summary: "DealBeat lists CyberGaar among the 36 startups selected for the National Incubation Center Karachi Cohort 15, a cohort spanning sectors that include cybersecurity.",
    href: "https://dealbeat.ink/nic-karachi-cohort-15-36-startups-selected-for-incubation-program-2026/",
  },
  {
    title: "NIC Karachi launches Cohort 15, welcomes 36 innovative startups in Pakistan",
    outlet: "TechJuice",
    date: "2026",
    kind: "Press",
    independent: true,
    summary: "TechJuice names CyberGaar among the startups featured in NIC Karachi Cohort 15.",
    href: "https://www.techjuice.pk/nic-karachi-launches-cohort-15-welcomes-36-innovative-startups-in-pakistan/",
  },
  {
    title: "Celebrating the partners behind TechFest'26 at NED University",
    outlet: "TechFest on LinkedIn",
    date: "2026",
    kind: "Community",
    summary: "TechFest thanked CyberGaar among the partners supporting the TechFest'26 community at NED University.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7523474652455657472",
  },
  {
    title: "Cyber Circle at NIC Karachi",
    outlet: "CyberGaar on LinkedIn",
    date: "11 September 2026",
    kind: "Event",
    summary: "Invitation to a three-hour session on modern digital exploits with panel discussions, practical insights and networking.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7503185583301890048",
  },
];
