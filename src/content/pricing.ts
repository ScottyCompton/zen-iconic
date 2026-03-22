import type {
  ContentPage,
  PricingFaqItem,
  PricingTier,
  ServicesCtaBlock,
} from "./types";

/** Shorter line for meta / Open Graph (keep roughly under ~160 characters). */
export const pricingMetaDescription =
  "Setup fee plus monthly plans for local small and medium-sized businesses: we build your digital foundation and keep improving your online presence, SEO pages, and support—so you get more calls and leads. Long-term partner, not a one-time website project." as const;

export const pricingPage: ContentPage = {
  title: "Pricing",
  description:
    "Zen/Iconic is not selling one-time website projects. We provide ongoing digital presence and growth support for locally operated businesses that want more leads and a clearer presence online: a setup fee to build your foundation, then a monthly subscription so we keep hosting, updating, and helping you show up where customers look. Every plan is Launch, Growth, or Momentum—and we stay involved after go-live.",
};

/** Extra intro copy shown under the first paragraph on /pricing only. */
export const pricingIntroParagraphs = [
  "The setup fee covers building your initial website and digital foundation: structure, customer-facing pages, launch, forms, and the basics so people can find and contact you.",
  "The monthly fee covers hosting, updates, improvements, SEO pages as we add them, fixes, and support. Search habits, your offers, and competitors change; the subscription is how your online side keeps working for more calls and leads.",
  "This is not just a website—it is ongoing help with how your business looks and performs online. Whether you run a service-based business, a professional practice, or another local SMB, most teams only need a few extra good opportunities per month for this to pay for itself. We intend to be a long-term partner managing that side of the business—not a vendor you only hear from when something breaks.",
] as const;

export const pricingSeo = {
  keywords: [
    "local business website monthly cost",
    "setup fee managed online presence",
    "more leads local SMB",
    "ongoing website partner pricing",
  ],
} as const;

export const pricingTiers: PricingTier[] = [
  {
    name: "Launch",
    tagline: "Modern foundation and a professional online presence",
    description:
      "For businesses that need a modern foundation and professional online presence—so customers can find you, trust what they see, and reach out without friction.",
    setup: "$400",
    monthly: "$50/mo",
    billingNote:
      "Best when you want the build and hosting handled, plus light ongoing help—without a heavy monthly change cadence.",
    benefits: [
      "Modern website build",
      "Mobile optimization",
      "Hosting",
      "Contact forms",
      "Basic SEO structure",
      "Launch support",
      "Minor updates",
    ],
    cta: "Discuss Launch",
  },
  {
    name: "Growth",
    tagline: "Ongoing improvements, SEO pages, and more visibility",
    description:
      "For businesses that want ongoing improvements, SEO pages, and visibility growth—more than a launch-and-leave site.",
    setup: "$700",
    monthly: "$100/mo",
    billingNote:
      "Includes everything in Launch, with more room each month for edits, new pages, and SEO work tied to how people search in your area.",
    highlighted: true,
    benefits: [
      "Everything in Launch",
      "Monthly updates and edits",
      "New pages added over time",
      "SEO and location pages",
      "Analytics and performance tracking",
      "Ongoing improvements",
      "Priority support",
    ],
    cta: "Discuss Growth",
  },
  {
    name: "Momentum",
    tagline: "Lead generation, campaigns, and long-term expansion",
    description:
      "For businesses focused on long-term lead generation and expansion—we treat your online side as something to keep improving, not set and forget.",
    setup: "$1,000",
    monthly: "$200/mo",
    billingNote:
      "Everything in Growth, with the highest priority when you need changes and more capacity for pages, tests, and follow-through.",
    benefits: [
      "Everything in Growth",
      "Landing pages for marketing campaigns",
      "Ongoing optimization",
      "Content and page expansion",
      "Conversion improvements",
      "Strategy and growth support",
      "Highest priority support",
    ],
    cta: "Discuss Momentum",
  },
];

export const pricingFootnote: string =
  "Each tier is a one-time setup fee plus a monthly subscription. If scope or your situation is unusual, we confirm numbers in writing before work starts. Zen/Iconic is built to stay your partner on the digital side—not a one-time quote and goodbye.";

export const pricingFaqSection = {
  title: "Straight answers",
} as const;

export const pricingFaqs: PricingFaqItem[] = [
  {
    question: "Is this only a website?",
    answer:
      "Your website is the main thing customers see, but the service is ongoing: we host it, keep it current, add pages when it helps search and leads, fix problems, and support you month to month. The goal is a stronger online presence and more calls and form fills—not a brochure you are left to maintain alone.",
  },
  {
    question: "What does the setup fee cover vs. the monthly fee?",
    answer:
      "Setup is one-time: building your initial site and digital foundation—planning, pages, launch, forms, and baseline structure so people can find and contact you. Monthly is recurring: hosting, updates, improvements, SEO pages as we add them, support, and keeping everything aligned with how you operate.",
  },
  {
    question: "Why not pay once for a website?",
    answer:
      "Search, competitors, and your services keep moving. A one-off build goes stale. The monthly plan keeps you visible, credible, and easy to reach—and keeps us accountable after launch.",
  },
  {
    question: "Why monthly instead of hourly?",
    answer:
      "Predictable cost and reserved attention for your business. We keep a shared list of improvements and prioritize what matters for calls and leads.",
  },
  {
    question: "How should I think about ROI?",
    answer:
      "We do not guarantee rankings or lead counts. Many local businesses only need a handful of extra good jobs per month for this to make sense. We will tell you honestly if the math does not fit.",
  },
  {
    question: "Do I own the assets?",
    answer:
      "Yes. Your content, accounts, and work product are yours. Access is documented so you are never locked out.",
  },
  {
    question: "Can we change tiers?",
    answer:
      "Yes. After any agreed start period, we can move between Launch, Growth, and Momentum as your needs change. Bigger scope shifts get a short written update so everyone is aligned.",
  },
];

export const pricingPageCta: ServicesCtaBlock = {
  title: "Not sure which plan fits?",
  body: "Tell us what you do, how leads find you now, and what more customers would look like for you. We will suggest Launch, Growth, or Momentum—or pass if we are not the right partner.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/how-it-works", label: "How it works" },
};
