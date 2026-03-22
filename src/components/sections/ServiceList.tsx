import type { Service } from "@/content/types";
import { cn } from "@/lib/cn";
import {
  proseBody,
  sectionRule,
  sectionYDense,
  surfaceBase,
} from "@/lib/marketing-styles";

import { Container } from "../layout/Container";

type ServiceListProps = {
  services: Service[];
  className?: string;
};

export function ServiceList({ services, className }: ServiceListProps) {
  return (
    <section
      className={cn(sectionRule, surfaceBase, sectionYDense, className)}
      aria-label="Services"
    >
      <Container as="div">
        <div className="flex flex-col gap-10">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid gap-6 border-t border-white/[0.06] pt-10 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-4">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                  {service.title}
                </h2>
                <p className={cn("mt-3", proseBody)}>{service.summary}</p>
              </div>
              <div className="lg:col-span-8">
                <ul className="space-y-3">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-300 sm:text-base"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/75"
                        aria-hidden
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
