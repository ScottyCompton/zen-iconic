import type { Feature, HomePoint } from "./types";

export const homePageTitle =
  "Growth, presence, and leads for local service businesses" as const;

export const homeHero = {
  eyebrow: "Zen/Iconic",
  headline: "More customers. Clearer presence. Ongoing support.",
  subhead:
    "We help local service businesses win work through better visibility, credibility, and lead capture. The site is infrastructure—we build and manage the whole digital layer so people can find you, trust you, and reach you without friction.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/how-it-works", label: "How we work" },
} as const;

export const homeValueStripSection = {
  title: "How we think about the work",
  subtitle: "Three principles that shape every relationship.",
} as const;

export const homeValueProps: Feature[] = [
  {
    title: "Demand first",
    description:
      "We start from who you need to reach and how they choose a provider—not from page templates. Clarity beats decoration when the goal is booked work.",
  },
  {
    title: "Presence that converts",
    description:
      "Search, maps, and referrals send people to one place. We keep that presence accurate, fast, and easy to act on so interest turns into contact.",
  },
  {
    title: "Partnership, not handoff",
    description:
      "Most operators need ongoing help: updates, new offers, SEO pages, fixes, and judgment calls. We stay in the loop so your digital side keeps pace with the business.",
  },
];

export const homeServicesOverviewSection = {
  title: "What we run with you",
  subtitle:
    "A single engagement covers the systems prospects touch before they call—messaging, surfaces, capture, hosting, and steady improvement. Not a brochure project.",
  cta: { href: "/services", label: "See how it breaks down" },
} as const;

export const homeWhyItMatters: {
  title: string;
  lead: string;
  points: HomePoint[];
} = {
  title: "What an outdated presence actually costs",
  lead: "When listings are thin, the story is vague, or contact is buried, people do not argue—they hire someone else. That cost shows up as fewer calls, not as a line item.",
  points: [
    {
      title: "Visibility and credibility move together",
      text: "If you are hard to parse or slow to load on a phone, you read as less established than a competitor who is not.",
    },
    {
      title: "One-time builds go stale",
      text: "Services change, seasons change, and search behavior changes. Without a partner, the asset that was “done” quietly stops representing how you operate today.",
    },
    {
      title: "You need a system, not a PDF",
      text: "We build and manage digital infrastructure—pages, forms, tracking, hosting, updates—so discovery and contact stay reliable month to month.",
    },
  ],
};

export const homeProcessSection = {
  title: "How engagement runs",
  subtitle:
    "Audit, plan, build, launch, then improve on a rhythm. You always know what we are doing and why.",
  cta: { href: "/how-it-works", label: "See each phase" },
} as const;

export const homeIndustriesSection = {
  cta: { href: "/contact", label: "Talk about your trade" },
} as const;

export const homePricingPreviewSection = {
  title: "Subscription-based partnership",
  subtitle:
    "Modest onboarding, then a fixed monthly program—hosting, updates, SEO pages, improvements, and support. Tiers scale with how much capacity you need.",
  cta: { href: "/pricing", label: "Compare tiers" },
  footnote:
    "Fees are confirmed in writing before work starts. This is structured as growth infrastructure, not a one-off quote for pages.",
} as const;

export const homeCta = {
  title: "If growth depends on how you show up online, we should talk",
  body: "Share what you do, where you operate, and how leads arrive today. We will be direct about fit, tier, and what a sensible first 90 days looks like.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/pricing", label: "View pricing" },
} as const;
