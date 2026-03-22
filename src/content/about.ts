import type { AboutBlurb, ContentPage, HomePoint, ServicesCtaBlock } from "./types";

export const aboutPage: ContentPage = {
  title: "About",
  description:
    "Zen/Iconic partners with local service businesses on visibility, credibility, and lead capture—through digital infrastructure and ongoing support, not one-off website projects.",
};

export const aboutSeo = {
  keywords: [
    "digital growth partner for service businesses",
    "ongoing digital presence support",
    "local service lead capture",
    "subscription digital infrastructure",
  ],
} as const;

export const aboutHero = {
  eyebrow: "Zen/Iconic",
  headline: "Calm execution. Clear stakes.",
  subhead:
    "We help operators turn how they show up online into a dependable commercial layer—structured for how buyers decide, maintained as the business changes.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/how-it-works", label: "How we work" },
} as const;

export const aboutMission = {
  kicker: "Mission & philosophy",
  title: "Design is how you reduce uncertainty",
  paragraphs: [
    "Most service purchases start with doubt: Can they show up? Will they stand behind the work? Are we comparing apples to apples? Strong digital presence does not shout over those questions—it answers them in order, with evidence, and without noise.",
    "Zen/Iconic exists because that standard is still rare. We are not selling pages. We are accountable for how people find you, trust you, and reach you—and for keeping that layer honest as your offer and markets shift.",
    "That takes intelligent design: hierarchy, restraint, and language that sounds like your firm. It also takes business clarity—who you serve, what you sell, what proof matters—so the surface matches how you actually operate.",
  ],
} as const;

export const aboutDifferentiators: {
  kicker: string;
  title: string;
  lead: string;
  items: AboutBlurb[];
} = {
  kicker: "Approach",
  title: "What makes this different",
  lead: "You get a clear process, direct access, and work tied to visibility and contact—not open-ended exploration billed by the hour.",
  items: [
    {
      title: "Structure before polish",
      body: "We align on story, information architecture, and conversion paths before surface design absorbs the budget. You approve the skeleton, then we refine what people see and read.",
    },
    {
      title: "Ongoing partnership, not a launch handoff",
      body: "Go-live is the start of maintenance and improvement. We interpret behavior, fix friction, add pages, and adjust messaging as your business changes.",
    },
    {
      title: "Language you can use internally",
      body: "Documentation and checkpoints are written so your ops or marketing lead can carry decisions forward—no priesthood of technical jargon.",
    },
  ],
};

export const aboutAudience: {
  kicker: string;
  title: string;
  lead: string;
  points: HomePoint[];
} = {
  kicker: "Fit",
  title: "Who this is for",
  lead: "Teams that sell expertise, craft, or field service—where trust is earned before the contract and how you show up online is doing real commercial work.",
  points: [
    {
      title: "Operators who care about margin and reputation",
      text: "You want presence that reflects rigor, not trends. You are willing to fund a modest foundation and a steady monthly program—not disappear after a one-time build.",
    },
    {
      title: "Leaders who want a partner, not a ticket queue",
      text: "You value direct communication, honest scope, and someone who will challenge a weak brief instead of executing it silently.",
    },
    {
      title: "Businesses ready to clarify the offer",
      text: "We do our best work when you can articulate—or collaborate to articulate—who the ideal client is and what a qualified lead looks like.",
    },
  ],
};

export const aboutPageCta: ServicesCtaBlock = {
  title: "If that sounds like your world, say hello",
  body: "Tell us what you do, where you operate, and what qualified demand looks like. We will respond with a clear next step—or a candid no if we are not the right fit.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/services", label: "What we deliver" },
};

/** Short philosophy strip on the homepage—links to /about. */
export const aboutPhilosophyHome = {
  title: "Philosophy",
  body: "We are not here to sell you a website. We build and manage the digital layer that helps people find you, trust you, and reach you—then keep improving it as your business changes.",
  cta: { href: "/about", label: "About the studio" },
} as const;
