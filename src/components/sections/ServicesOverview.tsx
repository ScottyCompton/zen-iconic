import type { Service } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  card,
  cardSubtleHover,
  headingSection,
  proseBody,
  sectionRule,
  sectionY,
  surfaceBase,
} from "@/lib/marketing-styles";
import { MarketingButtonLink } from "@/components/ui/MarketingButtonLink";

import { Container } from "../layout/Container";

type ServicesOverviewProps = {
  id?: string;
  title: string;
  subtitle: string;
  cta: { href: string; label: string };
  services: Service[];
  className?: string;
};

export function ServicesOverview({
  id,
  title,
  subtitle,
  cta,
  services,
  className,
}: ServicesOverviewProps) {
  return (
    <section
      id={id}
      className={cn(sectionRule, surfaceBase, sectionY, className)}
      aria-labelledby="services-overview-heading"
    >
      <Container as="div">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="services-overview-heading" className={headingSection}>
              {title}
            </h2>
            <p className={cn("mt-3", proseBody)}>{subtitle}</p>
          </div>
          <MarketingButtonLink
            href={cta.href}
            variant="secondary"
            className="self-start lg:self-auto"
          >
            {cta.label}
          </MarketingButtonLink>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((service) => (
            <li key={service.title}>
              <article className={cn(card, cardSubtleHover, "flex h-full flex-col p-5 sm:p-6")}>
                <h3 className="text-sm font-semibold leading-snug text-zinc-50">
                  {service.title}
                </h3>
                <p className={cn("mt-3 flex-1", proseBody)}>{service.summary}</p>
                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-zinc-600">
                  {service.bullets[0]}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
