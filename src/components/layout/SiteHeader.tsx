"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { layoutHeader } from "@/content/layout";
import { navItems } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import {
  borderHairline,
  focusRing,
  linkPrimary,
  navLink,
  surfaceHeader,
  surfacePopover,
} from "@/lib/marketing-styles";

import { Container } from "./Container";

function pathMatchesNavItem(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b",
        surfaceHeader,
        borderHairline,
      )}
    >
      <Container
        as="div"
        className="flex h-14 items-center justify-between gap-4 sm:h-16 sm:gap-6"
      >
        <Link
          href="/"
          className={cn(
            "rounded-sm text-sm font-semibold tracking-tight text-zinc-50",
            focusRing,
          )}
        >
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active = pathMatchesNavItem(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  navLink,
                  active &&
                    "text-zinc-50 shadow-[inset_0_-2px_0_0_rgba(163,230,53,0.5)] hover:text-zinc-50",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
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
                "flex min-h-[2.75rem] min-w-[2.75rem] cursor-pointer list-none select-none items-center justify-center rounded-full border border-lime-400/20 bg-[#1c342c]/82 px-3.5 py-2.5 text-xs font-medium text-zinc-200",
                "marker:hidden [&::-webkit-details-marker]:hidden",
                focusRing,
              )}
            >
              {layoutHeader.mobileMenuTrigger}
            </summary>
            <div
              className={cn(
                "absolute right-0 z-50 mt-2 w-[min(100vw-2rem,18rem)] rounded-2xl border p-2 shadow-xl shadow-black/35",
                surfacePopover,
                borderHairline,
              )}
            >
              <ul className="flex flex-col gap-0.5 py-1">
                {navItems.map((item) => {
                  const active = pathMatchesNavItem(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex min-h-11 items-center rounded-xl px-3 text-sm transition-colors duration-200 hover:bg-white/[0.05] hover:text-zinc-50",
                          active
                            ? "bg-lime-400/8 text-zinc-50"
                            : "text-zinc-300",
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
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
