import type {
  ContentPage,
  PricingFaqItem,
  PricingTier,
  ServicesCtaBlock,
} from "./types";

export const pricingPage: ContentPage = {
  title: "Pricing",
  description:
    "We treat your website as a growth surface—not a one-off brochure. Launch establishes the foundation; Growth and Momentum keep it compounding through steady iteration, support, and prioritization.",
};

export const pricingSeo = {
  keywords: [
    "website pricing for service businesses",
    "monthly website partnership",
    "ongoing website growth",
    "web design and support retainer",
  ],
} as const;

export const pricingTiers: PricingTier[] = [
  {
    name: "Launch",
    tagline: "A credible site that earns inquiries—without dragging on forever",
    description:
      "Fixed-scope build: story, structure, speed, and contact paths aligned to how your buyers decide. Best when you need a strong baseline before you add a monthly rhythm.",
    setup: "From $6.5k",
    monthly: null,
    billingNote:
      "Project-based fee. Includes a post-launch support window; upgrade to Growth when you want ongoing iteration.",
    benefits: [
      "Clear positioning and page flow before design locks in",
      "Fast, mobile-first experience that reflects how you actually operate",
      "Forms and CTAs routed the way your team works today",
      "Foundational SEO and analytics so you can see what drives leads",
    ],
    cta: "Discuss Launch",
  },
  {
    name: "Growth",
    tagline: "Build or relaunch—then keep shipping improvements every month",
    description:
      "Setup covers the heavy lift; the monthly partnership is where leads, speed, and messaging get sharper over time. This is our default recommendation for operators who want the site to keep pace with the business.",
    setup: "From $11k",
    monthly: "From $495/mo",
    billingNote:
      "Partnership billed monthly after launch (three-month minimum, then flexible). Setup is scoped to your pages, integrations, and content load.",
    highlighted: true,
    benefits: [
      "Roadmap tied to leads and behavior—not random redesigns",
      "Room for new services, locations, or landing pages as priorities shift",
      "Hosting, monitoring, and fixes included in the monthly lane",
      "Direct access for prioritization—you are not filing tickets into a black hole",
    ],
    cta: "Discuss Growth",
  },
  {
    name: "Momentum",
    tagline: "Already live? Put full focus on conversion, performance, and backlog",
    description:
      "For teams with a site in market: we onboard fast, align a backlog, and run a higher-touch monthly program—experiments, refinements, and support without a full rebuild unless you need one.",
    setup: "From $4k",
    monthly: "From $995/mo",
    billingNote:
      "Onboarding covers audit, plan, and first sprint. Monthly retainer scales with velocity and stakeholders.",
    benefits: [
      "Lead and funnel diagnostics with a prioritized fix list",
      "Continuous CRO-style iteration: copy, structure, speed, trust blocks",
      "Campaign and seasonal pages without scrambling your internal team",
      "Executive-ready reporting on what changed and what is next",
    ],
    cta: "Discuss Momentum",
  },
];

export const pricingFootnote: string =
  "Every fee is fixed in writing after discovery. If scope shifts, we adjust with a change order—no surprise invoices.";

export const pricingFaqSection = {
  title: "Straight answers",
} as const;

export const pricingFaqs: PricingFaqItem[] = [
  {
    question: "Why monthly instead of hourly?",
    answer:
      "Hourly rewards churn. A monthly partnership gives you predictable capacity, a shared backlog, and us thinking about outcomes—not filling timesheets. You always know what the engagement costs.",
  },
  {
    question: "Do I own the site?",
    answer:
      "Yes. You own your content, accounts, and production assets. We document hosting and DNS so you are never held hostage by obscure logins.",
  },
  {
    question: "What if I only want Launch?",
    answer:
      "That is fine. Launch is designed to ship something you are proud to send prospects to. Many clients add Growth when they want the site to evolve with new offers or markets.",
  },
  {
    question: "Can we pause or change tiers?",
    answer:
      "After any agreed minimum, we can adjust velocity or shift between Growth and Momentum based on what the business needs. Major scope changes get a quick written update so expectations stay aligned.",
  },
];

export const pricingPageCta: ServicesCtaBlock = {
  title: "Not sure which lane fits?",
  body: "Tell us what is live today, what qualified demand looks like, and how hands-on you want support. We will recommend Launch, Growth, or Momentum—and if none fit, we will say so.",
  primaryCta: { href: "/contact", label: "Talk through options" },
  secondaryCta: { href: "/how-it-works", label: "See the process" },
};
