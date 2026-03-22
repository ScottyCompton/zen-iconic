import type { AboutBlurb, ContentPage, HomePoint, ServicesCtaBlock } from "./types";

export const aboutPage: ContentPage = {
  title: "About",
  description:
    "Zen/Iconic partners with local small and medium-sized businesses to turn online presence into more customers. We provide ongoing digital presence and growth support—build, hosting, updates, and SEO pages—not one-off website projects. Setup fee plus monthly subscription as your long-term digital partner.",
};

export const aboutSeo = {
  keywords: [
    "partner for local SMB marketing",
    "managed website and leads",
    "ongoing online presence support",
    "more customers local business",
  ],
} as const;

export const aboutHero = {
  eyebrow: "Locally operated businesses",
  headline: "We help you get more customers online—and keep improving",
  subhead:
    "Zen/Iconic is not a design agency selling one-off sites. We work with a wide range of local small and medium-sized businesses—service-based companies, professional services, and others that depend on being found online: stronger presence, a managed website, and simpler paths to call or book, month after month.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/how-it-works", label: "How it works" },
} as const;

export const aboutMission = {
  kicker: "Why we exist",
  title: "Your customers should find you, trust you, and reach you without friction",
  paragraphs: [
    "Before someone chooses a local business, they search, skim, and compare. If you are hard to find, thin on proof, or annoying to contact on a phone, they pick someone else. We focus on fixing that—not on winning design awards.",
    "We build and run the public side of your business online: the site, key pages, forms, hosting, and ongoing updates. The point is more calls, form leads, and booked work—not a brochure that sits still for years.",
    "That takes honest messaging about what you do, where you work, and what makes you credible—aligned with how you actually run the business. We stay involved so it stays true as you grow.",
  ],
} as const;

export const aboutDifferentiators: {
  kicker: string;
  title: string;
  lead: string;
  items: AboutBlurb[];
} = {
  kicker: "Approach",
  title: "How we are different",
  lead: "Straightforward process, direct access, and work measured by whether more of the right people contact you.",
  items: [
    {
      title: "Plan the customer journey first",
      body: "We agree on who you want to reach, what they need to see, and how they should contact you before we lock every page. You approve the structure, then we refine content and layout together.",
    },
    {
      title: "Launch starts the real work",
      body: "Going live is not the finish line. We fix friction, add pages, and adjust messaging as part of your monthly plan—because your business and competition do not stand still.",
    },
    {
      title: "Plain notes, no gatekeeping",
      body: "Summaries and checkpoints are written so you can share them with your team. You should not need a technical person on payroll to understand what we are doing or why.",
    },
  ],
};

export const aboutAudience: {
  kicker: string;
  title: string;
  lead: string;
  points: HomePoint[];
} = {
  kicker: "Who we serve",
  title: "Built for local businesses that want more from the web",
  lead: "Small and medium-sized, locally operated businesses—often service-based or professional services—that live on reputation and referrals, and lose opportunities when the digital side feels behind.",
  points: [
    {
      title: "Owners who want more customers, not more complexity",
      text: "You are willing to invest in setup and a monthly program because you know visibility and leads require ongoing attention.",
    },
    {
      title: "People who want a partner, not a ticket system",
      text: "You value direct communication and honest advice—even when it means simplifying a page or tightening an offer so more people call.",
    },
    {
      title: "Teams who can describe good work",
      text: "We do our best when you can articulate—or work with us to define—your service area, ideal job, and what counts as a lead worth your time.",
    },
  ],
};

export const aboutPageCta: ServicesCtaBlock = {
  title: "Next step: a short conversation",
  body: "Tell us what you offer, where you operate, and how leads find you now. We will reply with what happens next—usually a brief call—or a clear pass if we are not the right fit.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/services", label: "What we do" },
};

/** Short strip on the homepage—links to /about. */
export const aboutPhilosophyHome = {
  title: "Who we are",
  body: "Zen/Iconic helps local businesses get more customers by improving their online presence, building and managing their website, and making it easier for people to find and contact them—on an ongoing, subscription-based plan so you are not on your own after launch.",
  cta: { href: "/about", label: "About us" },
} as const;
