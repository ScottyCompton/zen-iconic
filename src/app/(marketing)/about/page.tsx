import type { Metadata } from "next";

import {
  aboutAudience,
  aboutDifferentiators,
  aboutHero,
  aboutMission,
  aboutPage,
  aboutPageCta,
  aboutSeo,
} from "@/content/about";
import { site } from "@/content/site";
import {
  AboutAudience,
  AboutDifferentiators,
  AboutHero,
  AboutMission,
  CTASection,
} from "@/components/sections";

const ogTitle = `${aboutPage.title} | ${site.name}`;

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.description,
  keywords: [...aboutSeo.keywords],
  alternates: {
    canonical: `${site.url}/about`,
  },
  openGraph: {
    title: ogTitle,
    description: aboutPage.description,
    url: `${site.url}/about`,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: aboutPage.description,
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHero
        eyebrow={aboutHero.eyebrow}
        headline={aboutHero.headline}
        subhead={aboutHero.subhead}
        primaryCta={aboutHero.primaryCta}
        secondaryCta={aboutHero.secondaryCta}
      />
      <AboutMission
        kicker={aboutMission.kicker}
        title={aboutMission.title}
        paragraphs={aboutMission.paragraphs}
      />
      <AboutDifferentiators
        kicker={aboutDifferentiators.kicker}
        title={aboutDifferentiators.title}
        lead={aboutDifferentiators.lead}
        items={aboutDifferentiators.items}
      />
      <AboutAudience
        kicker={aboutAudience.kicker}
        title={aboutAudience.title}
        lead={aboutAudience.lead}
        points={aboutAudience.points}
      />
      <CTASection
        id="about-cta"
        headingId="about-cta-heading"
        title={aboutPageCta.title}
        body={aboutPageCta.body}
        primaryCta={aboutPageCta.primaryCta}
        secondaryCta={aboutPageCta.secondaryCta}
      />
    </main>
  );
}
