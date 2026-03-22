import type { Metadata } from "next";

import {
  processBoundaries,
  processNote,
  processPage,
  processPageCta,
  processPhases,
  processSeo,
} from "@/content/process";
import { site } from "@/content/site";
import { Container } from "@/components/layout";
import {
  CTASection,
  PageIntro,
  ProcessPhases,
} from "@/components/sections";
import { cn } from "@/lib/cn";
import {
  card,
  headingSection,
  kicker,
  proseBody,
  sectionRule,
  sectionYDense,
  surfaceBase,
  surfaceWash,
} from "@/lib/marketing-styles";

const ogTitle = `${processPage.title} | ${site.name}`;

export const metadata: Metadata = {
  title: processPage.title,
  description: processPage.description,
  keywords: [...processSeo.keywords],
  alternates: {
    canonical: `${site.url}/how-it-works`,
  },
  openGraph: {
    title: ogTitle,
    description: processPage.description,
    url: `${site.url}/how-it-works`,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: processPage.description,
  },
};

export default function HowItWorksPage() {
  return (
    <main id="main-content">
      <PageIntro
        title={processPage.title}
        description={processPage.description}
      />
      <ProcessPhases phases={processPhases} />
      <section
        className={cn(sectionRule, surfaceWash, sectionYDense)}
        aria-labelledby="boundaries-heading"
      >
        <Container as="div">
          <h2
            id="boundaries-heading"
            className={cn("max-w-2xl", headingSection)}
          >
            {processBoundaries.title}
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {processBoundaries.items.map((item) => (
              <li key={item.title} className={cn(card, "bg-zinc-950/35 p-5 sm:p-6")}>
                <h3 className="text-sm font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className={cn("mt-2", proseBody)}>{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section
        className={cn(sectionRule, surfaceBase, sectionYDense)}
        aria-labelledby="expect-heading"
      >
        <Container as="div">
          <h2 id="expect-heading" className={kicker}>
            {processNote.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-zinc-200 sm:text-lg">
            {processNote.body}
          </p>
        </Container>
      </section>
      <CTASection
        id="how-it-works-cta"
        headingId="how-it-works-cta-heading"
        title={processPageCta.title}
        body={processPageCta.body}
        primaryCta={processPageCta.primaryCta}
        secondaryCta={processPageCta.secondaryCta}
      />
    </main>
  );
}
