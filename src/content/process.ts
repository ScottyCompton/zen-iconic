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
    "From audit through launch and into an ongoing improvement rhythm: fixed phase outputs, bounded design rounds, and plain-language checkpoints—so you always know what is happening next.",
};

export const processSeo = {
  keywords: [
    "digital growth process for service businesses",
    "audit to launch timeline",
    "ongoing digital presence support",
    "subscription partnership workflow",
  ],
} as const;

/** Primary narrative for /how-it-works — audit → strategy → build → launch → improve. */
export const processPhases: ProcessPhase[] = [
  {
    id: "audit",
    title: "Audit",
    body: "We review your current digital presence, analytics if you have them, competitors prospects compare you against, and how leads reach you today. No blame—just a clear picture of gaps and quick wins.",
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
    body: "We handle DNS, hosting handoff, forms, tracking, and baseline SEO checks. You get a simple go-live checklist and clarity on how ongoing requests flow inside your tier.",
    output:
      "Production launch with monitoring, backups, and documentation—not a quiet Friday deploy and a hope it holds.",
  },
  {
    id: "improve",
    title: "Improve",
    body: "After launch we watch behavior and leads, then prioritize fixes, SEO pages, and enhancements inside your monthly program. Improvement is continuous but scheduled—backlog, not chaos.",
    output:
      "A standing rhythm: what we shipped, what we learned, what we tackle next—subscription partnership, not a disappearing vendor.",
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
  title: "Walk through your market and lead flow",
  body: "Tell us your services, markets, and what a strong lead looks like. If there is a fit, we will outline audit and strategy next steps—if not, we will say so clearly.",
  primaryCta: { href: "/contact", label: "Talk with us" },
  secondaryCta: { href: "/pricing", label: "Review tiers" },
};

export const processStepsPreview: ProcessPreviewStep[] = [
  {
    title: "Audit",
    summary:
      "Presence, gaps, and quick wins—before we commit to scope.",
  },
  {
    title: "Strategy",
    summary: "Structure, CTAs, and proof locked in a written plan.",
  },
  {
    title: "Build",
    summary: "Staging reviews in rounds so feedback stays finite.",
  },
  {
    title: "Launch",
    summary: "Go-live, checks, documentation—then into the monthly program.",
  },
  {
    title: "Improve",
    summary: "Measure, prioritize, ship again on a steady rhythm.",
  },
];
