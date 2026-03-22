import type { Feature, HomePoint } from "./types";

export const homePageTitle =
  "Digital presence for service businesses" as const;

export const homeHero = {
  eyebrow: "Websites for service brands",
  headline: "Presence that converts. Structure that scales.",
  subhead:
    "We design and build the digital layer you run leads through—clear story, fast experience, contact paths that match real hiring behavior.",
  primaryCta: { href: "/contact", label: "Start a project" },
  secondaryCta: { href: "/how-it-works", label: "How we work" },
} as const;

export const homeValueStripSection = {
  title: "How we work with you",
  subtitle: "Three commitments on every engagement.",
} as const;

export const homeValueProps: Feature[] = [
  {
    title: "Clarity",
    description:
      "Offer, audience, and proof stated plainly—so the right prospect recognizes you in one scroll.",
  },
  {
    title: "Conversion",
    description:
      "CTAs, trust, and page flow aligned to how people actually book trades and professional services.",
  },
  {
    title: "Continuity",
    description:
      "Launch is baseline. We iterate with your services, markets, and what qualified leads tell you.",
  },
];

export const homeServicesOverviewSection = {
  title: "What we deliver",
  subtitle:
    "Positioning, product, and performance—handled as one system, not disconnected tickets.",
  cta: { href: "/services", label: "Full service detail" },
} as const;

export const homeWhyItMatters: {
  title: string;
  lead: string;
  points: HomePoint[];
} = {
  title: "Why it matters",
  lead: "In service businesses, the website is often the entire first meeting. Weak structure does not create mystery—it creates silence.",
  points: [
    {
      title: "Comparison is instant",
      text: "Prospects skim three tabs. If scope, proof, or contact is unclear, they do not debate—they move on.",
    },
    {
      title: "Trust is structural",
      text: "Reviews and credentials only work when the page guides the eye and the next step is obvious.",
    },
    {
      title: "Growth changes the site",
      text: "New lines, regions, and campaigns need templates and IA that flex without a rebuild every year.",
    },
  ],
};

export const homeProcessSection = {
  title: "Process",
  subtitle: "Outcome per phase. No fog between milestones.",
  cta: { href: "/how-it-works", label: "Explore each phase" },
} as const;

export const homeIndustriesSection = {
  cta: { href: "/contact", label: "Talk about your market" },
} as const;

export const homePricingPreviewSection = {
  title: "Investment",
  subtitle: "Starting frameworks. We fix fee and timeline after discovery.",
  cta: { href: "/pricing", label: "Full pricing detail" },
  footnote: "Written scope before deposit. Change orders only when you change the brief.",
} as const;

export const homeCta = {
  title: "Next step: a focused conversation",
  body: "Share your services, markets, and what qualified demand looks like. We respond with a clear path—not a generic pitch deck.",
  primaryCta: { href: "/contact", label: "Request a call" },
  secondaryCta: { href: "/pricing", label: "See tiers" },
} as const;
