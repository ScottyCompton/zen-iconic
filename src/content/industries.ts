import type { Industry } from "./types";

export const industriesIntro: { headline: string; supporting: string } = {
  headline: "Common ways local businesses show up online",
  supporting:
    "Every business is different, but most need the same baseline: a site that looks credible on a phone, loads quickly, and makes calling or booking obvious. The patterns below are examples—not an exhaustive list. If you serve customers locally and care about leads, we can usually map you to a sensible approach.",
};

export const industries: Industry[] = [
  {
    slug: "home-services",
    title: "Home & on-site services",
    context:
      "Urgent requests, busy seasons, and side-by-side comparisons on a phone. People scan for service area, credentials, and a fast way to call or book.",
    priorities: [
      "Clear coverage map or area list and dispatch-friendly contact",
      "Proof up front: reviews, guarantees, team photos where it helps",
      "Mobile speed for people searching on the go",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional & advisory",
    context:
      "Longer consideration. Prospects read for fit, process, and who does the work before they book a consult.",
    priorities: [
      "Clear authority—plain language, not buzzwords",
      "Intake that states who you help and what happens next",
      "Structure that supports referrals and search over time",
    ],
  },
  {
    slug: "health-wellness",
    title: "Health & wellness",
    context:
      "Visitors care about outcomes and privacy. They need a calm layout, honest scope, and an easy path to reach you.",
    priorities: [
      "Readable copy and a steady visual hierarchy",
      "Flows that cut back-and-forth for appointments or questions",
      "Policies and forms where people expect them—not buried",
    ],
  },
  {
    slug: "b2b-specialty",
    title: "B2B & commercial specialty",
    context:
      "Buyers check capabilities, safety, certifications, and how procurement will work with you—often on a tight timeline.",
    priorities: [
      "Depth that matches how bids and specs are written",
      "Proof: logos, project types, outcomes you can share",
      "Contact paths sized to the deal—from quick spec to larger contract",
    ],
  },
  {
    slug: "local-multi-location",
    title: "Multi-location operators",
    context:
      "One brand, many markets. Each location needs local signals without breaking the parent story.",
    priorities: [
      "Templates for location and service pages without duplicate mess",
      "Central brand voice, local proof and phone numbers",
      "Site structure that stays crawl-friendly as you grow",
    ],
  },
];
