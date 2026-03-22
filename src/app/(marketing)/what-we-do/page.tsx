import type { Metadata } from "next";

import {
  site,
  whatWeDoFinalCta,
  whatWeDoFunnelIntro,
  whatWeDoFunnelSteps,
  whatWeDoHeroParagraphs,
  whatWeDoImproveAreas,
  whatWeDoImproveSection,
  whatWeDoInScope,
  whatWeDoMidCta,
  whatWeDoOutOfScope,
  whatWeDoPage,
  whatWeDoPath,
  whatWeDoSeo,
  whatWeDoWhereWeFit,
  whatWeDoWhyItMatters,
} from "@/content";
import {
  CTASection,
  FeatureGrid,
  PageIntro,
  ServiceFocusSection,
  StepsList,
  WhyItMatters,
} from "@/components/sections";

const canonicalUrl = `${site.url}${whatWeDoPath}`;
const ogTitle = `${whatWeDoPage.title} | ${site.name}`;

export const metadata: Metadata = {
  title: whatWeDoPage.title,
  description: whatWeDoPage.description,
  keywords: [...whatWeDoSeo.keywords],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: ogTitle,
    description: whatWeDoPage.description,
    url: canonicalUrl,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: whatWeDoPage.description,
  },
};

export default function WhatWeDoPage() {
  return (
    <main id="main-content">
      <PageIntro
        title={whatWeDoPage.title}
        description={whatWeDoPage.description}
        additionalParagraphs={whatWeDoHeroParagraphs}
      />
      <StepsList
        steps={whatWeDoFunnelSteps}
        sequenceLabel="Stage"
        ariaLabel="Customer path from discovery to lead"
        sectionTitle={whatWeDoFunnelIntro.title}
        sectionSubtitle={whatWeDoFunnelIntro.subtitle}
        sectionTitleId="funnel-heading"
      />
      <ServiceFocusSection
        area={whatWeDoWhereWeFit}
        index={0}
        outcomesHeading="In practice"
      />
      <FeatureGrid
        id="what-we-improve"
        title={whatWeDoImproveSection.title}
        subtitle={whatWeDoImproveSection.subtitle}
        features={whatWeDoImproveAreas}
      />
      <ServiceFocusSection
        area={whatWeDoInScope}
        index={1}
        outcomesHeading="Included"
      />
      <ServiceFocusSection
        area={whatWeDoOutOfScope}
        index={2}
        outcomesHeading="Not included"
      />
      <CTASection
        id="what-we-do-cta-mid"
        headingId="what-we-do-mid-cta-heading"
        title={whatWeDoMidCta.title}
        body={whatWeDoMidCta.body}
        primaryCta={whatWeDoMidCta.primaryCta}
        secondaryCta={whatWeDoMidCta.secondaryCta}
      />
      <WhyItMatters
        id="why-it-matters-what-we-do"
        title={whatWeDoWhyItMatters.title}
        lead={whatWeDoWhyItMatters.lead}
        points={whatWeDoWhyItMatters.points}
      />
      <CTASection
        id="what-we-do-cta-final"
        headingId="what-we-do-final-cta-heading"
        title={whatWeDoFinalCta.title}
        body={whatWeDoFinalCta.body}
        primaryCta={whatWeDoFinalCta.primaryCta}
        secondaryCta={whatWeDoFinalCta.secondaryCta}
      />
    </main>
  );
}
