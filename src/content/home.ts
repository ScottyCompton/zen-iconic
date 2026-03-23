import type { Feature, HomePoint, PricingPreviewCard } from "./types";

export const homePageTitle =
  "More customers online for local and growing businesses" as const;

export const homeHero = {
  eyebrow:
    "For locally operated businesses that rely on being found and chosen online",
  headline: "Business powered by intelligent design",
  subhead:
    "Using the power of modern AI tools, we help small and medium-sized local businesses get more customers by improving their online presence, building and managing their website, and making it easier for people to find and contact them.",
  primaryCta: { href: "/contact", label: "Book a Strategy Call" },
  secondaryCta: { href: "/how-it-works", label: "See How It Works" },
} as const;

export const homeValueStripSection = {
  title: "What Zen/Iconic does for you",
  subtitle:
    "More visibility, more leads, and more customers—without you running the website yourself.",
} as const;

export const homeValueProps: Feature[] = [
  {
    title: "We build and run the digital side",
    description:
      "You focus on estimates, crews, and appointments. We handle the site customers see first: structure, speed on phones, forms, hosting, and fixes—on an ongoing subscription, not a one-time handoff.",
  },
  {
    title: "Easier to find, easier to contact",
    description:
      "A clear, modern site with obvious phone, text, or form paths turns more visitors into calls and leads. We keep that path working as your services and area change.",
  },
  {
    title: "Ongoing updates—not set and forget",
    description:
      "Most small businesses need steady updates and support. Your monthly plan covers improvements, new pages when they help search, and someone to call when something breaks.",
  },
];

export const homeServicesOverviewSection = {
  title: "How we help you win more work",
  subtitle:
    "Outdated, slow, or clunky sites cost real opportunities—especially on phones. We improve how you show up online, keep the site current, and make reaching you simple. The goal is more leads and customers, not a prettier brochure.",
  cta: { href: "/what-we-do", label: "See what we do" },
} as const;

export const homeWhyItMatters: {
  title: string;
  lead: string;
  points: HomePoint[];
} = {
  title: "An old or hard-to-use website costs you customers",
  lead: "People judge your business by your website before they ever call. Many locally operated businesses lose leads because the site feels dated, loads slowly, or is frustrating on a phone—not because what you offer is weak.",
  points: [
    {
      title: "Customers decide fast",
      text: "If the site looks neglected, they assume the service might be too. Clear offers, proof, and contact options build trust in seconds.",
    },
    {
      title: "Phones are where the search happens",
      text: "Most searches for a local provider start on a phone. Tiny text, broken buttons, or buried phone numbers send people to the next name on the list.",
    },
    {
      title: "You should not be fixing the website",
      text: "Zen/Iconic manages the public digital side so you are not chasing hosting, plugins, or form errors. You run the business; we keep the front door open.",
    },
  ],
};

export const homeProcessSection = {
  title: "How we work with you",
  subtitle:
    "We start with how you get customers today, then build and launch a solid foundation and keep improving on a schedule—subscription-based support aimed at more visibility, leads, and repeat business.",
  cta: { href: "/how-it-works", label: "See each step" },
} as const;

export const homeIndustriesSection = {
  cta: { href: "/contact", label: "Book a Strategy Call" },
} as const;

export const homePricingPreviewSection = {
  title: "Simple setup, one monthly subscription",
  subtitle:
    "A one-time rebuild priced from your page count, then $149 per month for hosting, maintenance, ZenLeads CRM Starter, updates, and ongoing improvements—with clear add-ons when you need more.",
  cta: { href: "/pricing", label: "See full pricing" },
  footnote:
    "Ongoing digital presence and growth support—not a launch-and-disappear project. Every engagement is confirmed in writing before work starts.",
} as const;

export const homePricingPreviewCards: readonly PricingPreviewCard[] = [
  {
    title: "One-time setup",
    priceLine: "From $300",
    description:
      "Based on page count: small sites through very large builds, including rebuild, content transfer, forms, SEO basics, preview, revisions, and launch.",
  },
  {
    title: "Monthly partnership",
    priceLine: "$149 / month",
    description:
      "Hosting, security, monitoring, analytics, lead forms, ZenLeads CRM Starter, monthly content and landing page allowances, support, and continuous site improvements.",
  },
];

export const homeCta = {
  title: "Ready for more visibility and customers?",
  body: "Tell us what you do, where you work, and how people find you today. Book a strategy call—we will respond with a clear next step or an honest no if we are not the right fit.",
  primaryCta: { href: "/contact", label: "Book a Strategy Call" },
  secondaryCta: { href: "/pricing", label: "View pricing" },
} as const;
