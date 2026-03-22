import type {
  ContentPage,
  Service,
  ServicesCtaBlock,
  ServicesFocusArea,
} from "./types";

export const servicesPage: ContentPage = {
  title: "Services",
  description:
    "Zen/Iconic helps service businesses turn their website into a dependable source of qualified leads: a fast, credible presence, clear paths to contact, and support that continues after launch.",
};

/** SEO helpers — keep phrases natural; avoid stuffing. */
export const servicesSeo = {
  keywords: [
    "service business website",
    "lead generation for contractors",
    "local service marketing",
    "website hosting and support",
    "conversion-focused website",
    "ongoing website growth",
  ],
} as const;

/** Five outcome areas — primary narrative for /services. */
export const servicesFocusAreas: ServicesFocusArea[] = [
  {
    id: "website-systems",
    title: "Website systems",
    promise:
      "A single, credible front door that loads fast on a phone in a truck and still holds up on a desktop in an office.",
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
      "The site stays live, fast, and patched—so a broken page is not how you find out something failed.",
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
      "Your business will change; the site should keep pace—measured iteration instead of a redesign every few years.",
    outcomes: [
      "A prioritized backlog from behavior and feedback: fix friction, add pages, refine messaging.",
      "New offers, locations, or campaigns get templates—not one-off hacks that do not scale.",
      "Regular checkpoints on traffic, leads, and what to improve next quarter.",
    ],
  },
];

export const servicesMidCta: ServicesCtaBlock = {
  title: "If this matches how you operate, we should talk",
  body: "Send your site, your service area, and what a qualified lead looks like. We will reply with an honest fit call and, if it makes sense, a written scope—not a generic capabilities deck.",
  primaryCta: { href: "/contact", label: "Request a call" },
  secondaryCta: { href: "/pricing", label: "See investment tiers" },
};

export const servicesFinalCta: ServicesCtaBlock = {
  title: "Ready for a site that carries its weight",
  body: "We work with service brands that care about reputation and margin. If that is you, start with a short inquiry—we will keep the next step clear.",
  primaryCta: { href: "/contact", label: "Start an inquiry" },
  secondaryCta: { href: "/how-it-works", label: "How we work" },
};

/** Compact cards used on the homepage services overview. */
export const services: Service[] = [
  {
    title: "Positioning & narrative",
    summary:
      "Sharpen how you describe the work, who it is for, and what sets you apart—before anything ships.",
    bullets: [
      "Offer structure and on-page story",
      "Proof and credential placement",
      "Voice that reads like your firm, not a template",
    ],
  },
  {
    title: "Website systems",
    summary:
      "A fast, credible site that reflects how you operate and can grow when you add services or regions.",
    bullets: [
      "Clear IA and mobile-first experience",
      "Components you can extend—not a frozen theme",
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
      "Trust blocks where skepticism shows up",
    ],
  },
  {
    title: "Growth & iteration",
    summary:
      "After launch, measured improvements: new pages, tighter copy, and fixes driven by real leads and traffic.",
    bullets: [
      "Prioritized changes—not random redesigns",
      "Support when offers or markets shift",
      "Quarterly review of what to improve next",
    ],
  },
];
