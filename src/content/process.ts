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
    "A five-step path from audit to ongoing improvement. Fixed phase outputs, bounded design rounds, and plain-language checkpoints—so you always know what is happening next.",
};

export const processSeo = {
  keywords: [
    "website process for service businesses",
    "web design timeline",
    "strategy call",
    "website launch process",
    "ongoing website support",
  ],
} as const;

/** Primary narrative for /how-it-works — audit → strategy → build → launch → improve. */
export const processPhases: ProcessPhase[] = [
  {
    id: "audit",
    title: "Audit",
    body: "We review your current site, analytics if you have them, competitors prospects compare you against, and how leads reach you today. No blame—just a clear picture of gaps and quick wins.",
    output:
      "A short findings summary: what to keep, what to fix, and what to build. You decide whether to move forward—no lock-in.",
  },
  {
    id: "strategy",
    title: "Strategy",
    body: "We agree on ideal clients, service priorities, proof to show, and the exact actions you want visitors to take. Structure and messaging are nailed down before we invest in visual polish.",
    output:
      "A written plan: sitemap, key pages, primary CTAs, and content responsibilities. That document is the scope guardrail for the build.",
  },
  {
    id: "build",
    title: "Build",
    body: "We implement in staged reviews—structure first, then design, then interaction. You see realistic pages early, so feedback is about substance, not surprise rework.",
    output:
      "A staging site you can click through. Revisions are organized into agreed rounds so the loop stays finite and predictable.",
  },
  {
    id: "launch",
    title: "Launch",
    body: "We handle DNS, hosting handoff, forms, tracking, and basic SEO checks. You get a simple go-live checklist and a short handoff so your team knows how to request changes.",
    output:
      "Production launch with monitoring, backups, and documentation—not a quiet Friday deploy and a hope it holds.",
  },
  {
    id: "improve",
    title: "Improve",
    body: "After launch we watch behavior and leads, then prioritize fixes and enhancements. Improvement is continuous but scheduled—backlog, not chaos.",
    output:
      "A standing rhythm: what we shipped, what we learned, what we tackle next. Optional retainer or scoped follow-on projects.",
  },
];

export const processSteps: Step[] = processPhases.map((p) => ({
  title: p.title,
  description: p.body,
}));

export const processNote: { title: string; body: string } = {
  title: "What we are optimizing for",
  body: "Predictable milestones, readable scope, and direct communication. You should never wonder which phase you are in or whether feedback will spiral without a ceiling.",
};

export const processBoundaries: {
  title: string;
  items: { title: string; text: string }[];
} = {
  title: "Revisions, tech, and scope",
  items: [
    {
      title: "Bounded design rounds",
      text: "Feedback is batched into agreed cycles during Build. That protects your calendar and our calendar—and keeps the project moving.",
    },
    {
      title: "Plain-language checkpoints",
      text: "We explain hosting, DNS, and analytics in terms of outcomes you care about. You do not need to become a developer to ship confidently.",
    },
    {
      title: "Scope tied to the strategy doc",
      text: "New pages or features mid-build go through a quick change request so timeline and fee stay honest for everyone.",
    },
  ],
};

export const processPageCta: ServicesCtaBlock = {
  title: "Book a strategy call",
  body: "Walk us through your services, markets, and what a strong lead looks like. If there is a fit, we will outline audit and strategy next steps—if not, we will say so clearly.",
  primaryCta: { href: "/contact", label: "Book a strategy call" },
  secondaryCta: { href: "/pricing", label: "Review investment" },
};

export const processStepsPreview: ProcessPreviewStep[] = [
  {
    title: "Audit",
    summary:
      "Current state, gaps, and quick wins—before we commit to a build.",
  },
  {
    title: "Strategy",
    summary: "Sitemap, CTAs, and proof locked in a written plan.",
  },
  {
    title: "Build",
    summary: "Staging reviews in rounds so feedback stays finite.",
  },
  {
    title: "Launch",
    summary: "Go-live, checks, handoff—no quiet Friday deploys.",
  },
  {
    title: "Improve",
    summary: "Measure, prioritize, ship again on a steady rhythm.",
  },
];
