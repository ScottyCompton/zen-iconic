import Link from "next/link";

import { layoutFooter } from "@/content/layout";
import { navItems } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { borderHairline, labelUpper, surfaceBase } from "@/lib/marketing-styles";

import { Container } from "./Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn("mt-auto border-t", surfaceBase, borderHairline)}
    >
      <Container as="div" className="py-16 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-3">
            <p className="text-sm font-semibold tracking-tight text-zinc-50">
              {site.name}
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
              {site.tagline}
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              {site.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
            <div>
              <p className={labelUpper}>{layoutFooter.columns.navigate}</p>
              <ul className="mt-4 space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={labelUpper}>{layoutFooter.columns.connect}</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-100"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <Link
                    href={layoutFooter.inquiry.href}
                    className="text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-100"
                  >
                    {layoutFooter.inquiry.label}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className={labelUpper}>{layoutFooter.columns.colophon}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                {layoutFooter.colophonBody}
              </p>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mt-12 flex flex-col gap-2 border-t pt-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between",
            borderHairline,
          )}
        >
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{layoutFooter.closingLine}</p>
        </div>
      </Container>
    </footer>
  );
}
