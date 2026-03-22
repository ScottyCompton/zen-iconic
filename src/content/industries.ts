import type { Industry } from "./types";

export const industriesIntro: { headline: string; supporting: string } = {
  headline: "Local proof, local urgency",
  supporting:
    "Trades, clinics, and field services all face different compliance and buying habits. The constant is simple: people need to find you, believe you, and reach you without friction.",
};

export const industries: Industry[] = [
  {
    slug: "home-services",
    title: "Home services & trades",
    context:
      "Emergency calls, seasonal demand, and tight local comparison. Searchers scan for coverage, licenses, and a fast path to contact.",
    priorities: [
      "Service-area clarity and dispatch-friendly contact",
      "Proof up front: reviews, guarantees, crew credibility",
      "Mobile speed for on-the-go searches",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional & advisory",
    context:
      "Longer consideration and higher trust. Prospects read for fit, process, and who actually does the work before they book time.",
    priorities: [
      "Plain-language authority—no jargon as a substitute for substance",
      "Intake that states who you help and what happens next",
      "Structure that supports referrals and search over time",
    ],
  },
  {
    slug: "health-wellness",
    title: "Health & wellness",
    context:
      "Sensitivity around outcomes and privacy. Visitors need calm layout, transparent scope, and a human path to reach you.",
    priorities: [
      "Accessible language and a steady visual hierarchy",
      "Flows that reduce back-and-forth for appointments or inquiries",
      "Policies and forms placed where they belong—not hidden",
    ],
  },
  {
    slug: "b2b-specialty",
    title: "B2B specialty contractors",
    context:
      "Technical buyers validate fit quickly: capabilities, safety, certifications, and how procurement will engage you.",
    priorities: [
      "Capability depth that matches how RFPs are written",
      "Proof stacks: logos, project classes, outcomes where you can share them",
      "Contact paths sized to deal type—from spec to enterprise",
    ],
  },
  {
    slug: "local-multi-location",
    title: "Multi-location operators",
    context:
      "Brand consistency with local relevance. Each market needs its own signals without splintering the parent story.",
    priorities: [
      "Templates for location and service variants without duplicate chaos",
      "Central brand, local proof and contact",
      "Crawl-friendly structure as footprint grows",
    ],
  },
];
