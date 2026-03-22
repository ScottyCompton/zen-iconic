import type { AboutBlurb, ContentPage, HomePoint, ServicesCtaBlock } from "./types";

export const aboutPage: ContentPage = {
  title: "About",
  description:
    "Zen/Iconic is a digital studio for service businesses that want calm, intentional web presence—clear story, credible design, and practical support as you grow.",
};

export const aboutSeo = {
  keywords: [
    "digital studio for service businesses",
    "intentional web design",
    "conversion-focused website",
    "ongoing website partnership",
  ],
} as const;

export const aboutHero = {
  eyebrow: "Zen/Iconic",
  headline: "Calm execution. Clear stakes.",
  subhead:
    "We help service operators turn their digital presence into a reliable asset—structured for how buyers decide, built to evolve with the business.",
  primaryCta: { href: "/contact", label: "Start a conversation" },
  secondaryCta: { href: "/how-it-works", label: "How we work" },
} as const;

export const aboutMission = {
  kicker: "Mission & philosophy",
  title: "Design is how you reduce uncertainty",
  paragraphs: [
    "Most service purchases start with doubt: Can they show up? Will they stand behind the work? Are we comparing apples to apples? A strong site does not shout over those questions—it answers them in order, with evidence, and without noise.",
    "Zen/Iconic exists because that standard is still rare. We are not here to decorate pages. We are here to make decision-making easier for your prospects and lead flow more legible for your team.",
    "That requires intentional design: hierarchy, restraint, and copy that sounds like your firm. It also requires business clarity—who you serve, what you sell, what proof matters—so the site reflects reality, not aspiration alone.",
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
  lead: "You get a productized process, direct access, and scope tied to outcomes—not endless exploration billed by the hour.",
  items: [
    {
      title: "Structure before polish",
      body: "We align on story, sitemap, and conversion paths before visual design absorbs the budget. You approve the skeleton, then we refine the surface.",
    },
    {
      title: "Growth support, not handoff theater",
      body: "Launch is not the finish line. We help you interpret behavior, fix friction, and extend the system when offers or markets shift.",
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
  lead: "Teams that sell expertise, craft, or field service—where trust is earned before the contract and the website is doing real commercial work.",
  points: [
    {
      title: "Operators who care about margin and reputation",
      text: "You want a site that reflects rigor, not trends. You are willing to invest once thoughtfully and improve on a rhythm—not chase redesigns every eighteen months.",
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
  body: "Tell us what you do, where you operate, and what you need the site to accomplish. We will respond with a clear next step—or a candid no if we are not the right fit.",
  primaryCta: { href: "/contact", label: "Get in touch" },
  secondaryCta: { href: "/services", label: "What we deliver" },
};

/** Short philosophy strip on the homepage—links to /about. */
export const aboutPhilosophyHome = {
  title: "Philosophy",
  body: "We work with operators who treat reputation as an asset. The site should answer real buyer questions—in order, with evidence—then get out of the way of contact.",
  cta: { href: "/about", label: "About the studio" },
} as const;
