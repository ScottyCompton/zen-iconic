import type {
  ContentPage,
  ProcessPhase,
  ProcessPreviewStep,
  ServicesCtaBlock,
  Step,
} from "./types";

export const processPage: ContentPage = {
  title: "How it works",
  description:
    "For locally operated businesses that want more leads and a stronger online presence: we start with how customers find you today, build and launch your digital foundation, then keep working month to month—hosting, updates, SEO pages, and support—so you get more visibility, calls, and inquiries. Clear steps, plain language, not a one-and-done website project.",
};

export const processSeo = {
  keywords: [
    "how zen iconic works",
    "local business website onboarding",
    "monthly website partner process",
    "managed online presence SMB",
  ],
} as const;

/** Primary narrative for /how-it-works — audit → strategy → build → launch → improve. */
export const processPhases: ProcessPhase[] = [
  {
    id: "audit",
    title: "Audit",
    body: "We look at your current site and listings, how leads find you, and who you are up against locally. No blame—just a clear picture of what is costing you calls and what to fix first.",
    output:
      "A short summary: keep, fix, build. You decide whether to move forward—no obligation.",
  },
  {
    id: "plan",
    title: "Plan",
    body: "We agree on your ideal customer, top services, proof to show, and what you want someone to do on the site—usually call, book, or submit a form. Structure and messaging come before we finalize every page detail.",
    output:
      "A written plan: main pages, priorities, and contact goals. That guides the build so scope stays clear.",
  },
  {
    id: "build",
    title: "Build",
    body: "We put up real pages in stages—outline first, then customer-facing copy and layout, then forms and tracking. You see working pages early so feedback is about getting more customers, not last-minute surprises.",
    output:
      "A staging site you can click through. Revisions run in agreed rounds so the project finishes on time.",
  },
  {
    id: "launch",
    title: "Launch",
    body: "We go live: domain and hosting, forms, basic tracking, and SEO checks. You get a simple checklist and know how to reach us for anything that comes up.",
    output:
      "Production site with backups and monitoring—plus handoff into your monthly support plan.",
  },
  {
    id: "improve",
    title: "Improve",
    body: "After launch we watch traffic and leads (as data allows), then ship fixes, new pages, and upgrades inside your monthly subscription. The goal stays the same: more findability, more trust, more contact.",
    output:
      "A steady rhythm—what we did, what we learned, what is next—with us as your ongoing partner, not a vendor who disappears.",
  },
];

export const processSteps: Step[] = processPhases.map((p) => ({
  title: p.title,
  description: p.body,
}));

export const processNote: { title: string; body: string } = {
  title: "What we care about",
  body: "You should always know where we are in the process. Scope and feedback stay bounded so your time is protected and we keep momentum toward launch—and then toward more customers month by month.",
};

export const processBoundaries: {
  title: string;
  items: { title: string; text: string }[];
} = {
  title: "Feedback, tech, and scope",
  items: [
    {
      title: "Rounded review cycles",
      text: "During Build we batch feedback in agreed cycles. That keeps the schedule sane for you and for us.",
    },
    {
      title: "Plain-language explanations",
      text: "Hosting, domain, and analytics are explained in terms of calls and leads—not developer jargon.",
    },
    {
      title: "Scope follows the plan",
      text: "Big new requests mid-build go through a quick change note so timeline and cost stay fair.",
    },
  ],
};

export const processPageCta: ServicesCtaBlock = {
  title: "Tell us how customers find you today",
  body: "Share what you offer, the markets you serve, and what a strong lead looks like. If we are a fit, we outline audit and plan next. If not, we will say so clearly.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/pricing", label: "View pricing" },
};

export const processStepsPreview: ProcessPreviewStep[] = [
  {
    title: "Audit",
    summary:
      "Where you stand, gaps, and quick wins—before we commit.",
  },
  {
    title: "Plan",
    summary: "Pages, messaging, and contact goals in writing.",
  },
  {
    title: "Build",
    summary: "Staging site and structured feedback rounds.",
  },
  {
    title: "Launch",
    summary: "Go live, checks, then your monthly program.",
  },
  {
    title: "Improve",
    summary: "Keep tuning for visibility, calls, and leads.",
  },
];
