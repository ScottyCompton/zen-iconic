import type { Metadata } from "next";

import { contactCopy, contactPage, contactSeo } from "@/content/contact";
import { site } from "@/content/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout";
import { PageIntro } from "@/components/sections";
import { cn } from "@/lib/cn";
import {
  card,
  fieldLabel,
  headingSection,
  proseBody,
  sectionRule,
  sectionY,
  surfaceBase,
} from "@/lib/marketing-styles";

const ogTitle = `${contactPage.title} | ${site.name}`;

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.description,
  keywords: [...contactSeo.keywords],
  alternates: {
    canonical: `${site.url}/contact`,
  },
  openGraph: {
    title: ogTitle,
    description: contactPage.description,
    url: `${site.url}/contact`,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: contactPage.description,
  },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        title={contactPage.title}
        description={contactPage.description}
      />
      <section
        className={cn(sectionRule, surfaceBase, sectionY)}
        aria-labelledby="contact-heading"
      >
        <Container as="div">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2
                id="contact-heading"
                className={headingSection}
              >
                {contactCopy.headline}
              </h2>
              <p className={cn("mt-4", proseBody)}>{contactCopy.body}</p>
              <div className={cn(card, "mt-10 p-6")}>
                <p className={fieldLabel}>{contactCopy.directLabel}</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-block text-sm font-medium text-zinc-100 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
