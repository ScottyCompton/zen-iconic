import type { Industry } from "./types";

export const industriesIntro: { headline: string; supporting: string } = {
  headline: "Built around how service buyers choose",
  supporting:
    "Verticals differ in proof, urgency, and compliance. The through-line is the same: make the decision easy for someone who is comparing you on a screen.",
};

export const industries: Industry[] = [
  {
    slug: "home-services",
    title: "Home services & trades",
    context:
      "Emergency calls, seasonal demand, and local competition. Buyers scan for licenses, areas served, and speed to contact.",
    priorities: [
      "Service-area clarity and dispatch-friendly CTAs",
      "Reviews, guarantees, and crew credibility up front",
      "Mobile speed for search-on-the-go traffic",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional & advisory",
    context:
      "Longer consideration, higher trust bar. Prospects read bios, case cues, and process before they book a conversation.",
    priorities: [
      "Authority without jargon",
      "Clear intake: who you help, what it costs to start, what happens next",
      "Content structure that supports referrals and search",
    ],
  },
  {
    slug: "health-wellness",
    title: "Health & wellness",
    context:
      "Sensitivity around outcomes and privacy. Visitors need calm design, transparent scope, and easy ways to reach a human.",
    priorities: [
      "Accessible language and calm visual hierarchy",
      "Appointment or inquiry flows that reduce back-and-forth",
      "Compliance-aware forms and policy placement",
    ],
  },
  {
    slug: "b2b-specialty",
    title: "B2B specialty contractors",
    context:
      "Technical buyers validate fit fast: capabilities, certifications, safety record, and how you engage procurement.",
    priorities: [
      "Capability pages that map to how RFPs are written",
      "Proof stacks: logos, metrics, project classes",
      "Download or contact paths matched to deal size",
    ],
  },
  {
    slug: "local-multi-location",
    title: "Multi-location operators",
    context:
      "Brand consistency with local relevance. Each market needs its own signals without fragmenting the parent story.",
    priorities: [
      "Template system for location and service variants",
      "Centralized brand, localized proof and contact",
      "Structured data and crawl clarity at scale",
    ],
  },
];
