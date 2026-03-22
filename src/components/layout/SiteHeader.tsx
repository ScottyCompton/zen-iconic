import Link from "next/link";

import { layoutHeader } from "@/content/layout";
import { navItems } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { borderHairline, linkPrimary, navLink } from "@/lib/marketing-styles";

import { Container } from "./Container";

export function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-zinc-950/85 backdrop-blur-md",
        borderHairline,
      )}
    >
      <Container
        as="div"
        className="flex h-14 items-center justify-between gap-4 sm:h-16 sm:gap-6"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm"
        >
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={layoutHeader.cta.href}
            className={cn(linkPrimary, "hidden px-5 sm:inline-flex sm:px-6")}
          >
            {layoutHeader.cta.label}
          </Link>

          <details className="relative md:hidden">
            <summary
              className={cn(
                "list-none cursor-pointer select-none rounded-full border border-white/10 bg-zinc-950/80 px-3.5 py-2.5 text-xs font-medium text-zinc-200 min-h-[2.75rem] min-w-[2.75rem] flex items-center justify-center",
                "marker:hidden [&::-webkit-details-marker]:hidden",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
              )}
            >
              {layoutHeader.mobileMenuTrigger}
            </summary>
            <div
              className={cn(
                "absolute right-0 z-50 mt-2 w-[min(100vw-2rem,18rem)] rounded-2xl border bg-zinc-950/98 p-2 shadow-xl shadow-black/40 backdrop-blur-md",
                borderHairline,
              )}
            >
              <ul className="flex flex-col gap-0.5 py-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex min-h-11 items-center rounded-xl px-3 text-sm text-zinc-300 transition-colors duration-200 hover:bg-white/[0.05] hover:text-zinc-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-1 border-t border-white/[0.06] pt-2">
                  <Link
                    href={layoutHeader.cta.href}
                    className={cn(
                      linkPrimary,
                      "w-full justify-center px-3",
                    )}
                  >
                    {layoutHeader.cta.label}
                  </Link>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
