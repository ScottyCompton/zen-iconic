/**
 * Chrome copy: header, footer, mobile nav — keep out of components.
 */

export const layoutHeader = {
  cta: { href: "/contact", label: "Start a project" },
  mobileMenuTrigger: "Menu",
} as const;

export const layoutFooter = {
  columns: {
    navigate: "Navigate",
    connect: "Connect",
    colophon: "Colophon",
  },
  colophonBody:
    "Built with intention. Designed for service brands that value craft, clarity, and long-term growth.",
  inquiry: { href: "/contact", label: "Project inquiry" },
  closingLine:
    "Premium digital experiences for modern service businesses.",
} as const;
