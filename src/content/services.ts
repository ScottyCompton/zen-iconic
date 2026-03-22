import type {
  ContentPage,
  Service,
  ServicesCtaBlock,
  ServicesFocusArea,
} from "./types";

export const servicesPage: ContentPage = {
  title: "Services",
  description:
    "Zen/Iconic helps local service businesses grow demand through digital presence, lead capture, and ongoing support—the public-facing layer is infrastructure, not the product.",
};

/** SEO helpers — keep phrases natural; avoid stuffing. */
export const servicesSeo = {
  keywords: [
    "local service business digital presence",
    "lead capture and online visibility",
    "ongoing digital infrastructure support",
    "SEO pages for contractors",
    "managed hosting and updates",
  ],
} as const;

/** Five outcome areas — primary narrative for /services. */
export const servicesFocusAreas: ServicesFocusArea[] = [
  {
    id: "website-systems",
    title: "Digital presence",
    promise:
      "One credible, fast surface where search, referrals, and ads land—readable on a phone in a truck and serious on a desktop in an office.",
    outcomes: [
      "Structure that matches how buyers scan: who you help, what you do, proof, then contact.",
      "Pages and components you can extend when you add services, crews, or regions—without starting over.",
      "Performance and accessibility treated as standard, not an add-on line item.",
    ],
  },
  {
    id: "lead-capture",
    title: "Lead capture",
    promise:
      "More conversations with the right prospects—fewer dead ends, fewer forms abandoned halfway through.",
    outcomes: [
      "Calls-to-action matched to intent: emergency service vs. planned project vs. partnership.",
      "Forms and routing that land in the inbox or CRM your team already checks.",
      "Trust placed where doubt usually appears: licenses, coverage area, timelines, guarantees.",
    ],
  },
  {
    id: "hosting-support",
    title: "Hosting & support",
    promise:
      "Your digital layer stays live, fast, and patched—so a broken form or slow page is not how you find out something failed.",
    outcomes: [
      "Managed hosting appropriate to the stack we ship—no mystery servers on your personal card.",
      "Security updates and monitoring handled as part of the relationship, not ad-hoc panic fixes.",
      "A direct line when something breaks: reproduce, diagnose, ship a fix, document what changed.",
    ],
  },
  {
    id: "seo-foundations",
    title: "SEO foundations",
    promise:
      "Show up when people search the way your market actually phrases the problem—not just for vanity rankings.",
    outcomes: [
      "Clean indexation: sensible URLs, titles, and internal links that reflect your services and locations.",
      "Content structure that supports the phrases buyers use, without gimmicky keyword pages.",
      "Analytics and event wiring so you can see which pages and sources produce real inquiries.",
    ],
  },
  {
    id: "ongoing-growth",
    title: "Ongoing growth",
    promise:
      "Your business will change; presence and capture should keep pace—measured iteration inside a monthly program instead of a redesign every few years.",
    outcomes: [
      "A prioritized backlog from behavior and feedback: fix friction, add pages, refine messaging.",
      "New offers, locations, or campaigns get templates—not one-off hacks that do not scale.",
      "Regular checkpoints on traffic, leads, and what to improve next quarter.",
    ],
  },
];

export const servicesMidCta: ServicesCtaBlock = {
  title: "If this matches how you operate, we should talk",
  body: "Send your current presence, your service area, and what a qualified lead looks like. We will reply with an honest fit conversation and, if it makes sense, a written scope—not a generic capabilities deck.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/pricing", label: "See tiers" },
};

export const servicesFinalCta: ServicesCtaBlock = {
  title: "Ready for digital infrastructure you do not have to babysit",
  body: "We work with service brands that care about reputation and margin. If that is you, start with a short note—we will keep the next step clear.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/how-it-works", label: "How we work" },
};

/** Compact cards used on the homepage services overview. */
export const services: Service[] = [
  {
    title: "Clarity & narrative",
    summary:
      "Sharpen how you describe the work, who it is for, and what proof matters—so prospects understand why you before they ever call.",
    bullets: [
      "Offer structure and on-page story",
      "Proof and credential placement",
      "Language that reads like your firm, not a template",
    ],
  },
  {
    title: "Presence & discovery",
    summary:
      "The public layer people land on from search and referrals—fast, credible, and structured for how local buyers decide.",
    bullets: [
      "Clear information architecture and mobile-first reading",
      "Components that extend when you add services or regions",
      "Performance and accessibility as defaults",
    ],
  },
  {
    title: "Lead capture",
    summary:
      "Contact paths and forms aligned to how people hire you: emergencies, estimates, consults, callbacks.",
    bullets: [
      "CTAs by intent, not one generic button",
      "Routing to inbox or CRM your team uses",
      "Trust placed where skepticism usually appears",
    ],
  },
  {
    title: "Ongoing partnership",
    summary:
      "Inside the monthly program: updates, SEO pages, improvements, and support—prioritized by what affects visibility and contact.",
    bullets: [
      "Backlog tied to leads and traffic—not random redesigns",
      "Room to adapt when offers or markets shift",
      "Rhythm for what to ship next, with plain-language reporting",
    ],
  },
];
