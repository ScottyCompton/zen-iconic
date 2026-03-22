import type {
  ContentPage,
  PricingFaqItem,
  PricingTier,
  ServicesCtaBlock,
} from "./types";

export const pricingPage: ContentPage = {
  title: "Pricing",
  description:
    "Zen/Iconic is priced as ongoing digital growth support—not a website invoice. A focused onboarding establishes your foundation; the monthly program keeps presence, leads, and technical care moving forward.",
};

export const pricingSeo = {
  keywords: [
    "local service business marketing",
    "ongoing digital presence support",
    "lead generation partner",
    "subscription digital growth",
    "SEO and website management",
  ],
} as const;

export const pricingTiers: PricingTier[] = [
  {
    name: "Launch",
    tagline: "A modern foundation and a professional, findable presence",
    description:
      "For businesses that need to look and perform like the operator you are—clear story, solid structure, and contact paths that work. Onboarding establishes the base; the monthly plan keeps it hosted, current, and improving.",
    setup: "From $6.5k",
    monthly: "From $395/mo",
    billingNote:
      "Onboarding covers discovery, build, and go-live. Monthly includes hosting, monitoring, fixes, and a scheduled rhythm of updates and SEO-oriented improvements.",
    benefits: [
      "Positioning and page flow aligned to how local buyers decide",
      "Fast, mobile-first presence that reflects real service areas and proof",
      "Forms and routing your team will actually use",
      "Baseline analytics so you can see what drives contact—not guess",
    ],
    cta: "Discuss Launch",
  },
  {
    name: "Growth",
    tagline: "Ongoing improvements, SEO pages, updates, and visibility work",
    description:
      "For businesses that want the digital side to compound: new services and markets, landing pages, structured SEO pages, and steady refinement based on traffic and leads.",
    setup: "From $11k",
    monthly: "From $495/mo",
    billingNote:
      "Higher onboarding when scope is larger; monthly includes expanded capacity for pages, tests, and prioritization. Three-month minimum to start, then flexible.",
    highlighted: true,
    benefits: [
      "Backlog tied to leads and behavior—not one-off redesign cycles",
      "Room for location, service, and campaign pages as priorities shift",
      "Hosting, uptime, and break-fix covered inside the monthly program",
      "Direct access for triage; we advise on what to ship next",
    ],
    cta: "Discuss Growth",
  },
  {
    name: "Momentum",
    tagline: "Long-term lead focus—expansion pages, landing pages, optimization",
    description:
      "For operators who want a higher-touch partner: more velocity on landing pages, funnel refinement, expansion content, and continuous tuning without adding headcount.",
    setup: "From $4k",
    monthly: "From $995/mo",
    billingNote:
      "Lower onboarding if you are already live; we align a backlog and sprint. Monthly scales with output and stakeholders.",
    benefits: [
      "Diagnostics on how people find you and where they drop",
      "Iteration on copy, structure, speed, and trust where it affects contact",
      "Campaign and seasonal support without scrambling your crew",
      "Plain-language reporting on what shipped and what is queued",
    ],
    cta: "Discuss Momentum",
  },
];

export const pricingFootnote: string =
  "Onboarding and monthly fees are fixed after a short discovery call. If priorities shift materially, we document the change so expectations stay honest on both sides.";

export const pricingFaqSection = {
  title: "Straight answers",
} as const;

export const pricingFaqs: PricingFaqItem[] = [
  {
    question: "Is this “just a website”?",
    answer:
      "No. A site is part of the stack. The product is ongoing digital presence and lead support—hosting, updates, SEO pages, improvements, and someone accountable when something breaks or the business changes.",
  },
  {
    question: "Why subscription instead of a one-time build?",
    answer:
      "Search, offers, and seasons move. A static build ages. Subscription aligns us with keeping you findable, credible, and easy to contact—not with disappearing after launch.",
  },
  {
    question: "Why monthly instead of hourly?",
    answer:
      "You get predictable cost and reserved capacity. We maintain a shared backlog and prioritize by impact on visibility and leads—not by who opened a ticket last.",
  },
  {
    question: "How should I think about ROI?",
    answer:
      "We do not promise rankings or lead counts. Many local operators only need a handful of additional good jobs per month for disciplined presence work to be rational. We will be candid if the math does not make sense for your model.",
  },
  {
    question: "Do I own the assets?",
    answer:
      "Yes. Your content, accounts, and production work are yours. We document access so you are never locked behind opaque logins.",
  },
  {
    question: "Can we change tiers?",
    answer:
      "After any agreed minimum, we can adjust between Growth and Momentum or shift velocity. Meaningful scope changes get a short written update.",
  },
];

export const pricingPageCta: ServicesCtaBlock = {
  title: "Unsure which tier matches how you operate?",
  body: "Tell us how leads arrive today, what “good work” looks like, and how much change you expect in the next year. We will recommend a lane—or tell you we are not the right fit.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/how-it-works", label: "How we work" },
};
