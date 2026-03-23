import type {
  ContentPage,
  PricingAddOnRow,
  PricingFaqItem,
  PricingSetupBand,
  ServicesCtaBlock,
} from "./types";

/** Shorter line for meta / Open Graph (keep roughly under ~160 characters). */
export const pricingMetaDescription =
  "Simple transparent pricing: one-time website setup by page count, $149/mo subscription with hosting, maintenance, ZenLeads CRM Starter, and ongoing improvements—plus clear add-ons." as const;

/** Short label for `<title>` and sharing cards (see `pricingPage.title` for the on-page H1). */
export const pricingMetaTitle = "Pricing" as const;

export const pricingPage: ContentPage = {
  title: "Simple pricing for a faster, smarter digital presence.",
  description:
    "Zen/Iconic keeps costs easy to follow: a one-time setup fee from your page count, one monthly subscription, and straightforward add-ons when you need more. You get rapid website rebuilds, hosting, maintenance, ongoing improvements, and lead tools—an ongoing digital presence, not a one-and-done brochure site.",
};

/** Extra intro copy shown under the first paragraph on /pricing only. */
export const pricingIntroParagraphs = [
  "Small business owners should see the full picture quickly—what you pay once, what runs each month, and what costs extra if your needs grow.",
] as const;

export const pricingSeo = {
  keywords: [
    "small business website pricing",
    "managed website monthly subscription",
    "website setup fee page count",
    "ZenLeads CRM included",
    "ongoing website partner pricing",
  ],
} as const;

export const pricingSetupSection = {
  id: "pricing-setup",
  title: "One-time setup fee",
  bands: [
    {
      label: "Small Website",
      pageRange: "1–5 pages",
      price: "$300",
    },
    {
      label: "Medium Website",
      pageRange: "6–10 pages",
      price: "$500",
    },
    {
      label: "Large Website",
      pageRange: "11–15 pages",
      price: "$800",
    },
    {
      label: "Very Large Website",
      pageRange: "16+ pages",
      price: "$50 per page over 15 pages",
    },
  ] as const satisfies readonly PricingSetupBand[],
  includesTitle: "Setup includes",
  includes: [
    "AI-assisted website rebuild",
    "Modern responsive layout",
    "Content transfer from your existing site",
    "AI-enhanced copy cleanup for SEO and professionalism",
    "Contact form setup",
    "Basic on-page SEO setup",
    "Vercel deployment",
    "Preview link for review",
    "One round of revisions",
    "Final launch and domain connection",
  ] as const,
  turnaroundNote:
    "We aim for rapid turnaround—often as fast as one business day—depending on how quickly your content is ready and how complex the project is.",
} as const;

export const pricingSubscriptionSection = {
  id: "pricing-monthly",
  title: "Monthly subscription",
  price: "$149",
  cadence: "/month",
  intro:
    "One plan covers what most local businesses need to stay fast, secure, visible, and easy to contact—with room to grow.",
  items: [
    "Hosting",
    "Maintenance",
    "Security updates",
    "Performance monitoring",
    "Basic SEO improvements",
    "Analytics tracking",
    "Lead capture forms",
    "ZenLeads CRM – Starter included",
    "1 content update per month",
    "1 new landing page per month",
    "Image updates",
    "Minor text edits",
    "Technical support",
    "Ongoing site improvements",
  ] as const,
  zenLeadsNote:
    "Need more pipeline and automation? You can upgrade ZenLeads anytime as your CRM needs grow.",
} as const;

export const pricingAddOnsSection = {
  id: "pricing-add-ons",
  title: "Add-ons",
  subtitle: "Transparent pricing when you want extra work outside your subscription.",
  rows: [
    { label: "Additional content update", price: "$40" },
    { label: "Additional landing page", price: "$75" },
    { label: "New website page", price: "$100" },
    { label: "Blog post creation", price: "$50" },
    { label: "SEO page optimization", price: "$75" },
    { label: "Logo design or redesign", price: "$150" },
    { label: "Copywriting per page", price: "$50" },
    { label: "Domain/email setup", price: "$50" },
    { label: "CRM or third-party integrations", price: "$100" },
    { label: "Rush / same-day edits", price: "$50" },
    { label: "ZenLeads upgrades", price: "Custom / varies by plan" },
  ] as const satisfies readonly PricingAddOnRow[],
} as const;

export const pricingValueSection = {
  id: "pricing-value",
  title: "More than a website",
  body: "Zen/Iconic is built for businesses that want momentum online—not a PDF and a handshake. We rebuild, launch, and keep improving how you show up, how fast you load, and how easy it is to become a lead.",
  points: [
    "Your subscription is structured to help you generate leads and keep the site current as your services and market change.",
    "We treat your website as a living business asset: maintained, measured, and refined—not a project that goes quiet after launch.",
  ] as const,
} as const;

export const pricingFootnote: string =
  "Numbers are confirmed in writing before work begins. If scope or timing is unusual, we align on setup, subscription, and add-ons up front so there are no surprises.";

/** Bundled props for the pricing page body component. */
export const pricingPageSections = {
  setup: pricingSetupSection,
  subscription: pricingSubscriptionSection,
  addOns: pricingAddOnsSection,
  value: pricingValueSection,
  footnote: pricingFootnote,
} as const;

export const pricingFaqSection = {
  title: "Common questions",
} as const;

export const pricingFaqs: PricingFaqItem[] = [
  {
    question: "Is this only a website?",
    answer:
      "Your site is the hub, but the service is ongoing: we host it, keep it secure and fast, improve it over time, capture leads, and include ZenLeads CRM Starter so inquiries are easier to track. The goal is a stronger digital presence and more qualified conversations—not a static brochure you maintain alone.",
  },
  {
    question: "What does the setup fee cover vs. the monthly fee?",
    answer:
      "Setup is one-time: the rebuild, layout, content move, copy cleanup, forms, basic on-page SEO, Vercel deployment, preview, revisions, launch, and domain connection—priced from your page count. Monthly is recurring: hosting, maintenance, monitoring, SEO and analytics basics, lead forms, ZenLeads Starter, scheduled updates and landing pages, and support—plus ongoing improvements to the site itself.",
  },
  {
    question: "Why not pay once for a website?",
    answer:
      "Search, competitors, and your offers keep moving. A single project goes stale. The subscription keeps you credible, reachable, and improving—and keeps us accountable after go-live.",
  },
  {
    question: "Why monthly instead of hourly?",
    answer:
      "Predictable cost and reserved attention for your business. We maintain a clear backlog of improvements and prioritize what matters for leads and reputation.",
  },
  {
    question: "How should I think about ROI?",
    answer:
      "We do not guarantee rankings or lead counts. Many local businesses only need a handful of extra good jobs per month for the math to work. We will tell you honestly if we are not the right fit.",
  },
  {
    question: "Do I own the assets?",
    answer:
      "Yes. Your content, accounts, and work product are yours. Access is documented so you are never locked out.",
  },
  {
    question: "What if I need more than the included updates?",
    answer:
      "Use the add-ons list for extra content updates, landing pages, new pages, blog posts, SEO passes, integrations, rush work, or ZenLeads upgrades. We quote anything custom before billing.",
  },
];

export const pricingPageCta: ServicesCtaBlock = {
  title: "Ready to upgrade your online presence?",
  body: "Let's rebuild your site and launch fast. Tell us what you do, what you have today, and what “more leads” would look like—we will respond with clear next steps.",
  primaryCta: { href: "/contact", label: "Book a strategy call" },
  secondaryCta: { href: "/how-it-works", label: "How it works" },
};
