import type {
  ContentPage,
  Service,
  ServicesCtaBlock,
  ServicesFocusArea,
} from "./types";

export const servicesPage: ContentPage = {
  title: "Services",
  description:
    "Zen/Iconic helps local small and medium-sized businesses—especially service-based and professional services firms—get more customers by strengthening online presence, building and managing the website, and making contact simple. This is ongoing digital presence and growth support—not a one-time website handoff. A setup fee gets your foundation live; the monthly subscription covers hosting, updates, SEO pages, improvements, and support.",
};

/** SEO helpers — keep phrases natural; avoid stuffing. */
export const servicesSeo = {
  keywords: [
    "local SMB more leads online",
    "managed website small business",
    "online presence monthly support",
    "help customers find local business",
    "website and SEO for local business",
  ],
} as const;

/** Five outcome areas — primary narrative for /services. */
export const servicesFocusAreas: ServicesFocusArea[] = [
  {
    id: "website-systems",
    title: "Website & how you show up online",
    promise:
      "One place where Google, maps, referrals, and ads should send people—fast on a phone, easy to read, obvious how to reach you.",
    outcomes: [
      "Pages organized the way customers think: who you serve, what you do, proof, then call or form.",
      "Room to add services or areas without starting over.",
      "Speed and mobile usability treated as standard—because that is how people choose a local business on a phone.",
    ],
  },
  {
    id: "lead-capture",
    title: "More calls and form leads",
    promise:
      "Fewer visitors leave without contacting you—paths that match urgent needs, estimates, consults, or callbacks.",
    outcomes: [
      "Clear next steps for each kind of job, not one buried contact link.",
      "Forms and notifications going where your office already looks.",
      "Trust details—licenses, area, guarantees—where skepticism usually hits.",
    ],
  },
  {
    id: "hosting-support",
    title: "Hosting & day-to-day support",
    promise:
      "Your site stays live and working. Problems get fixed without you becoming the help desk.",
    outcomes: [
      "Hosting suited to what we build—no surprise bills on a personal card you forgot about.",
      "Updates and monitoring as part of the relationship.",
      "When something breaks, we troubleshoot, fix it, and tell you what happened.",
    ],
  },
  {
    id: "seo-foundations",
    title: "Being found in local search",
    promise:
      "Structure and content aimed at how your customers actually search—not vanity metrics.",
    outcomes: [
      "Sensible URLs, titles, and links across services and locations.",
      "Pages aligned with real search phrases, without spammy tricks.",
      "Simple reporting on what drives visits and inquiries.",
    ],
  },
  {
    id: "ongoing-growth",
    title: "Ongoing improvements (monthly)",
    promise:
      "Your offers and market change; we keep tuning the digital side so it keeps bringing customers—not a redesign every five years.",
    outcomes: [
      "A shared list of fixes and upgrades driven by leads, traffic, and your priorities.",
      "New services, areas, or promotions get proper pages—not one-off hacks.",
      "Regular check-ins on what to improve next.",
    ],
  },
];

export const servicesMidCta: ServicesCtaBlock = {
  title: "Want more customers from how you show up online?",
  body: "Send your current site (if you have one), your service area, and what a good lead looks like. We will reply with a straight conversation and, if it fits, clear scope—not a generic deck.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/pricing", label: "See setup + monthly plans" },
};

export const servicesFinalCta: ServicesCtaBlock = {
  title: "We partner long-term on your digital side",
  body: "Setup fee plus monthly subscription: we keep your online presence and website working for calls and customers. Send a short note—we will tell you the next step.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/how-it-works", label: "How it works" },
};

/** Compact cards used on the homepage services overview. */
export const services: Service[] = [
  {
    title: "Clear offer & proof",
    summary:
      "Say plainly who you help, what you do, and why to trust you—so the right people call and fewer tire-kickers waste your time.",
    bullets: [
      "Services and areas spelled out on the right pages",
      "Reviews, licenses, and credentials where they help close trust",
      "Language that sounds like your business, not generic filler",
    ],
  },
  {
    title: "Where customers land",
    summary:
      "The site people see from search and referrals—quick to load, easy on a phone, structured for how local customers choose a provider.",
    bullets: [
      "Simple navigation and scannable pages",
      "Structure that grows when you add work or territory",
      "Performance that does not cost you mobile leads",
    ],
  },
  {
    title: "Calls and leads",
    summary:
      "Phone, text, and forms set up for how people actually reach you—urgent requests, quotes, consults, or follow-up.",
    bullets: [
      "Obvious contact paths by intent",
      "Routing to email or tools your team checks",
      "Trust signals where people hesitate",
    ],
  },
  {
    title: "Monthly partnership",
    summary:
      "Under the subscription: hosting, updates, SEO pages, fixes, and steady improvements tied to leads and visibility.",
    bullets: [
      "Priorities driven by customers and results, not random redesigns",
      "Flex when your business or market shifts",
      "Plain updates on what we shipped and what is next",
    ],
  },
];
