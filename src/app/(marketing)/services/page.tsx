import type { Metadata } from "next";

import {
  servicesFinalCta,
  servicesFocusAreas,
  servicesMidCta,
  servicesPage,
  servicesSeo,
  site,
} from "@/content";
import {
  CTASection,
  PageIntro,
  ServiceFocusSection,
} from "@/components/sections";

const ogTitle = `${servicesPage.title} | ${site.name}`;

export const metadata: Metadata = {
  title: servicesPage.title,
  description: servicesPage.description,
  keywords: [...servicesSeo.keywords],
  alternates: {
    canonical: `${site.url}/services`,
  },
  openGraph: {
    title: ogTitle,
    description: servicesPage.description,
    url: `${site.url}/services`,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: servicesPage.description,
  },
};

export default function ServicesPage() {
  const first = servicesFocusAreas.slice(0, 3);
  const rest = servicesFocusAreas.slice(3);

  return (
    <main id="main-content">
      <PageIntro
        title={servicesPage.title}
        description={servicesPage.description}
      />
      {first.map((area, i) => (
        <ServiceFocusSection key={area.id} area={area} index={i} />
      ))}
      <CTASection
        id="services-cta-mid"
        headingId="services-mid-cta-heading"
        title={servicesMidCta.title}
        body={servicesMidCta.body}
        primaryCta={servicesMidCta.primaryCta}
        secondaryCta={servicesMidCta.secondaryCta}
      />
      {rest.map((area, i) => (
        <ServiceFocusSection
          key={area.id}
          area={area}
          index={i + first.length}
        />
      ))}
      <CTASection
        id="services-cta-final"
        headingId="services-final-cta-heading"
        title={servicesFinalCta.title}
        body={servicesFinalCta.body}
        primaryCta={servicesFinalCta.primaryCta}
        secondaryCta={servicesFinalCta.secondaryCta}
      />
    </main>
  );
}

