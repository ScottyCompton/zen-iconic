import type { Metadata } from "next";

import {
  aboutPhilosophyHome,
  homeCta,
  homeHero,
  homeIndustriesSection,
  homePageTitle,
  homePricingPreviewSection,
  homeProcessSection,
  homeServicesOverviewSection,
  homeValueProps,
  homeValueStripSection,
  homeWhyItMatters,
  industries,
  industriesIntro,
  pricingTiers,
  processStepsPreview,
  services,
  site,
} from "@/content";
import {
  CTASection,
  Hero,
  IndustriesServed,
  PhilosophyBlock,
  PricingPreview,
  ProcessPreview,
  ServicesOverview,
  ValueStrip,
  WhyItMatters,
} from "@/components/sections";

export const metadata: Metadata = {
  title: homePageTitle,
  description: site.description,
};

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero
        eyebrow={homeHero.eyebrow}
        headline={homeHero.headline}
        subhead={homeHero.subhead}
        primaryCta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
      />
      <ValueStrip
        id="value"
        title={homeValueStripSection.title}
        subtitle={homeValueStripSection.subtitle}
        items={homeValueProps}
      />
      <ServicesOverview
        id="services"
        title={homeServicesOverviewSection.title}
        subtitle={homeServicesOverviewSection.subtitle}
        cta={homeServicesOverviewSection.cta}
        services={services}
      />
      <WhyItMatters
        id="why-it-matters"
        title={homeWhyItMatters.title}
        lead={homeWhyItMatters.lead}
        points={homeWhyItMatters.points}
      />
      <ProcessPreview
        id="process"
        title={homeProcessSection.title}
        subtitle={homeProcessSection.subtitle}
        cta={homeProcessSection.cta}
        steps={processStepsPreview}
      />
      <IndustriesServed
        id="industries"
        headline={industriesIntro.headline}
        supporting={industriesIntro.supporting}
        industries={industries}
        cta={homeIndustriesSection.cta}
      />
      <PricingPreview
        id="pricing-preview"
        title={homePricingPreviewSection.title}
        subtitle={homePricingPreviewSection.subtitle}
        footnote={homePricingPreviewSection.footnote}
        cta={homePricingPreviewSection.cta}
        tiers={pricingTiers}
      />
      <PhilosophyBlock
        id="philosophy"
        title={aboutPhilosophyHome.title}
        body={aboutPhilosophyHome.body}
        cta={aboutPhilosophyHome.cta}
      />
      <CTASection
        title={homeCta.title}
        body={homeCta.body}
        primaryCta={homeCta.primaryCta}
        secondaryCta={homeCta.secondaryCta}
      />
    </main>
  );
}
