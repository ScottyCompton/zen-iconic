export type NavItem = {
  href: string;
  label: string;
};

export type Site = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Service = {
  title: string;
  summary: string;
  bullets: string[];
};

/** Home pricing strip — simplified setup + monthly snapshot. */
export type PricingPreviewCard = {
  title: string;
  priceLine: string;
  description: string;
};

export type PricingSetupBand = {
  label: string;
  pageRange: string;
  price: string;
};

export type PricingAddOnRow = {
  label: string;
  price: string;
};

export type PricingFaqItem = {
  question: string;
  answer: string;
};

export type Industry = {
  slug: string;
  title: string;
  context: string;
  priorities: string[];
};

export type ContentPage = {
  title: string;
  description: string;
};

export type ProcessPreviewStep = {
  title: string;
  summary: string;
};

export type HomePoint = {
  title: string;
  text: string;
};

/** Outcome-led area for long-form marketing pages (plain language, no jargon). */
export type ServicesFocusArea = {
  id: string;
  title: string;
  promise: string;
  outcomes: string[];
};

export type ServicesCtaBlock = {
  title: string;
  body: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
};

/** Full /how-it-works phase: productized step + explicit phase output. */
export type ProcessPhase = {
  id: string;
  title: string;
  body: string;
  /** What ships before the next phase—reduces scope creep anxiety. */
  output: string;
};

export type AboutBlurb = {
  title: string;
  body: string;
};
