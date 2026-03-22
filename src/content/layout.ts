/**
 * Chrome copy: header, footer, mobile nav — keep out of components.
 */

export const layoutHeader = {
  cta: { href: "/contact", label: "Talk with us" },
  mobileMenuTrigger: "Menu",
} as const;

export const layoutFooter = {
  columns: {
    navigate: "Navigate",
    connect: "Connect",
    colophon: "Colophon",
  },
  colophonBody:
    "Ongoing digital presence and lead support for local service operators—clear, calm, and built to last.",
  inquiry: { href: "/contact", label: "Contact" },
  closingLine:
    "Infrastructure for visibility, credibility, and contact—not a one-time site handoff.",
} as const;
