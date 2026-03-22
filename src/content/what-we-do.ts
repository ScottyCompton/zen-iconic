import type {
  ContentPage,
  Feature,
  HomePoint,
  Service,
  ServicesCtaBlock,
  ServicesFocusArea,
  Step,
} from "./types";

/** Canonical path for this page (nav, metadata, redirects). */
export const whatWeDoPath = "/what-we-do" as const;

export const whatWeDoPage: ContentPage = {
  title: "What we do",
  description:
    "Zen/Iconic helps local businesses get more customers by improving online presence and making the lead funnel more effective. We build and manage the digital foundation that supports lead generation—not social media, ads, or full-service marketing.",
};

export const whatWeDoHeroParagraphs: readonly string[] = [
  "We strengthen the digital side of your business so it is easier for customers to find you, trust you, and contact you. We do not manage social channels or run ad campaigns.",
];

export const whatWeDoSeo = {
  keywords: [
    "local business digital presence",
    "website infrastructure lead generation",
    "managed website small business",
    "local SMB online credibility",
    "lead funnel website support",
  ],
} as const;

/** Simple customer-acquisition stages the digital layer must support. */
export const whatWeDoFunnelIntro = {
  title: "How people go from finding you to contacting you",
  subtitle:
    "These stages describe the path from discovery to a real lead. Zen/Iconic strengthens the digital infrastructure that supports each step—we do not run your ad campaigns or manage your social feeds.",
} as const;

export const whatWeDoFunnelSteps: Step[] = [
  {
    title: "Customers find your business",
    description:
      "They search, see a map result, get a referral link, or tap an ad. Somewhere in that mix, they need a clear place to land that represents you accurately.",
  },
  {
    title: "Customers evaluate your business online",
    description:
      "They skim your services, service area, proof, and how you work. They are deciding whether you look legitimate and capable before they ever call.",
  },
  {
    title: "Customers decide whether to contact you",
    description:
      "They look for an obvious next step—call, text, book, or a short form. Friction, clutter, or doubt here costs real jobs.",
  },
  {
    title: "Customers become leads",
    description:
      "When the digital path works, those visits turn into calls, messages, and form submissions you can actually respond to.",
  },
];

export const whatWeDoWhereWeFit: ServicesFocusArea = {
  id: "where-we-fit",
  title: "Where we fit",
  promise:
    "Zen/Iconic is not a full marketing agency, a social media management company, an advertising agency, or a broad SEO retainer shop. We focus on the website and online presence layer that supports lead generation—the infrastructure that helps leads turn into customers.",
  outcomes: [
    "We improve the digital path between discovery and contact: what people see, read, and click before they reach you.",
    "We build and manage the digital foundation your business depends on—hosting, structure, pages, forms, and steady upkeep.",
    "Campaigns, feeds, and brand programs stay outside our scope unless you handle them elsewhere.",
  ],
};

export const whatWeDoImproveSection = {
  title: "What we improve",
  subtitle:
    "Four places where digital infrastructure supports your funnel. This is where we concentrate—not on running your whole marketing program.",
} as const;

export const whatWeDoImproveAreas: Feature[] = [
  {
    title: "Visibility",
    description:
      "Clear structure, service and location pages, and sensible titles and URLs so your business is easier to find and understand in search and maps.",
  },
  {
    title: "Credibility",
    description:
      "A modern, mobile-friendly experience with proof in the right places—so visitors feel confident you are a real, capable local business.",
  },
  {
    title: "Conversion",
    description:
      "Obvious calls to action, working contact and lead forms, and paths that match how people actually hire you.",
  },
  {
    title: "Ongoing digital upkeep",
    description:
      "Hosting, fixes, updates, and improvements over time so the funnel does not go stale after launch.",
  },
];

export const whatWeDoInScope: ServicesFocusArea = {
  id: "what-we-handle",
  title: "What we handle",
  promise:
    "These are the parts of the digital layer we own with you—so more of the right visitors turn into leads.",
  outcomes: [
    "A modern business website aligned with how local customers choose a provider.",
    "Hosting and a fast, mobile-friendly experience.",
    "Service pages, location or area pages, and room to add more as you grow.",
    "Lead and contact forms, clear calls to action, and sensible routing to email or tools your team already checks.",
    "Page structure and on-site foundations that support search visibility—not a separate ad-hoc SEO empire.",
    "Ongoing updates, fixes, and improvements under our partnership model.",
    "Focused landing pages when they support a specific offer or campaign you are running.",
    "Analytics and tracking foundations so you can see what is driving visits and inquiries.",
  ],
};

export const whatWeDoOutOfScope: ServicesFocusArea = {
  id: "what-we-do-not-handle",
  title: "What we do not handle",
  promise:
    "Boundaries keep expectations clear. We stay in our lane so you know exactly what you are getting.",
  outcomes: [
    "Social media management or day-to-day posting.",
    "Ad creative, banner ads, or display production.",
    "Paid advertising campaign management (PPC, paid social, etc.).",
    "Broad branding exercises, full identity programs, or general marketing strategy retainers.",
    "Full-service SEO retainers outside website and infrastructure work—we improve the digital base; we do not replace every marketing function.",
  ],
};

export const whatWeDoWhyItMatters: {
  title: string;
  lead: string;
  points: HomePoint[];
} = {
  title: "Why this matters",
  lead: "Most local businesses do not lose leads because they lack ambition—they lose them because the digital side is dated, slow, or confusing at the moment someone is ready to choose.",
  points: [
    {
      title: "Weak digital presence costs real calls and leads",
      text: "When the site is hard to use on a phone, hides how to reach you, or feels out of date, people move on to the next name on the list. That is lost revenue you never see in a spreadsheet.",
    },
    {
      title: "A stronger foundation turns more visits into customers",
      text: "When finding you, trusting you, and contacting you are easy, more of the same traffic becomes conversations you can win. That is the point of the work we do.",
    },
  ],
};

export const whatWeDoMidCta: ServicesCtaBlock = {
  title: "Want a clearer digital path for your business?",
  body: "Tell us what you do, where you operate, and what a good lead looks like. We will respond with a direct conversation about fit and scope—not a generic pitch deck.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/pricing", label: "See setup and monthly plans" },
};

export const whatWeDoFinalCta: ServicesCtaBlock = {
  title: "Ready to strengthen your lead funnel?",
  body: "We partner on the digital infrastructure: website, hosting, structure, and ongoing improvements. Send a short note and we will outline the next step.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/how-it-works", label: "How it works" },
};

/**
 * Homepage overview cards — aligned with the same funnel story as /what-we-do,
 * shortened for the marketing home page.
 */
export const services: Service[] = [
  {
    title: "Find you",
    summary:
      "Structure and pages that help the right customers discover your business online and understand what you offer.",
    bullets: [
      "Service and area pages that match how people search",
      "Clean navigation and fast load on phones",
      "On-site foundations that support visibility—not a separate SEO agency pitch",
    ],
  },
  {
    title: "Trust you",
    summary:
      "A credible, up-to-date presence so visitors believe you are the right local business to call.",
    bullets: [
      "Clear proof, credentials, and service detail where skepticism shows up",
      "Consistent, professional experience on mobile",
      "Messaging that sounds like your business, not filler",
    ],
  },
  {
    title: "Contact you",
    summary:
      "Simple paths to call, text, book, or submit a lead—so interested visitors do not bounce at the last step.",
    bullets: [
      "Obvious calls to action for urgent and planned jobs",
      "Forms and notifications routed where your team already works",
      "Landing pages when a specific offer needs its own path",
    ],
  },
  {
    title: "Keep it working",
    summary:
      "Hosting, fixes, and steady improvements so the digital side of lead generation does not go stale.",
    bullets: [
      "Managed hosting suited to what we build",
      "Updates when your services, areas, or offers change",
      "Analytics foundations so you can see what drives inquiries",
    ],
  },
];
