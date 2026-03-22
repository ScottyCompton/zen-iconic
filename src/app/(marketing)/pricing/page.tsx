import type { Metadata } from "next";

import {
  pricingFaqs,
  pricingFaqSection,
  pricingFootnote,
  pricingIntroParagraphs,
  pricingMetaDescription,
  pricingPage,
  pricingPageCta,
  pricingSeo,
  pricingTiers,
} from "@/content/pricing";
import { site } from "@/content/site";
import {
  CTASection,
  PageIntro,
  PricingFaq,
  PricingTable,
} from "@/components/sections";

const ogTitle = `${pricingPage.title} | ${site.name}`;

export const metadata: Metadata = {
  title: pricingPage.title,
  description: pricingMetaDescription,
  keywords: [...pricingSeo.keywords],
  alternates: {
    canonical: `${site.url}/pricing`,
  },
  openGraph: {
    title: ogTitle,
    description: pricingMetaDescription,
    url: `${site.url}/pricing`,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: pricingPage.description,
  },
};

export default function PricingPage() {
  return (
    <main id="main-content">
      <PageIntro
        title={pricingPage.title}
        description={pricingPage.description}
        additionalParagraphs={pricingIntroParagraphs}
      />
      <PricingTable tiers={pricingTiers} footnote={pricingFootnote} />
      <PricingFaq title={pricingFaqSection.title} items={pricingFaqs} />
      <CTASection
        id="pricing-cta"
        headingId="pricing-cta-heading"
        title={pricingPageCta.title}
        body={pricingPageCta.body}
        primaryCta={pricingPageCta.primaryCta}
        secondaryCta={pricingPageCta.secondaryCta}
      />
    </main>
  );
}
