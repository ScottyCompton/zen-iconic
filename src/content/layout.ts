/**
 * Chrome copy: header, footer, mobile nav — keep out of components.
 */

export type LayoutFooterSocialLink = {
  network: "linkedin" | "x" | "facebook" | "instagram" | "bluesky";
  href: string;
  ariaLabel: string;
};

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
    "Zen/Iconic helps local small and medium-sized businesses get more customers: stronger online presence, a website we build and manage, and simpler ways to call or book. Setup fee plus monthly subscription—ongoing support, not a one-off build.",
  inquiry: { href: "/contact", label: "Contact" },
  /** Stub profile URLs — replace with live handles when accounts exist. */
  social: [
    {
      network: "linkedin",
      href: "https://www.linkedin.com/company/zeniconic",
      ariaLabel: "ZenIconic on LinkedIn",
    },
    {
      network: "x",
      href: "https://x.com/ZenIconic",
      ariaLabel: "ZenIconic on X",
    },
    {
      network: "bluesky",
      href: "https://bsky.app/profile/zeniconic.bsky.social",
      ariaLabel: "ZenIconic on Bluesky",
    },
    {
      network: "facebook",
      href: "https://www.facebook.com/ZenIconic",
      ariaLabel: "ZenIconic on Facebook",
    },
    {
      network: "instagram",
      href: "https://www.instagram.com/zeniconic/",
      ariaLabel: "ZenIconic on Instagram",
    },
  ] satisfies readonly LayoutFooterSocialLink[],
  closingLine:
    "Your long-term partner for the digital side of the business—not a one-off website shop.",
} as const;
