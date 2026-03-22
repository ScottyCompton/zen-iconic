export const contactPage = {
  title: "Contact",
  description:
    "Reach Zen/Iconic about a dated site, uneven lead flow, or a rebuild. We reply within one business day with a clear next step.",
} as const;

export const contactSeo = {
  keywords: [
    "contact web studio",
    "service business website help",
    "website redesign inquiry",
  ],
} as const;

export const contactCopy = {
  headline: "Tell us what is not working",
  body: "If the site feels behind the business, leads arrive in spikes you cannot trace, or prospects drop before they call—send a short note. We work with service operators who want a calmer, more legible digital front door.",
  directLabel: "Prefer email?",
} as const;

export const contactFormCopy = {
  footnote:
    "Submissions are validated on the server. Connect Resend, Postmark, or your CRM inside the contact action when you are ready.",
  placeholders: {
    name: "Alex Morgan",
    email: "you@company.com",
    company: "Company or trade name",
    website: "yoursite.com or leave blank",
    message:
      "What you do, where you operate, and what you want leads or reputation to look like in six months.",
  },
  labels: {
    name: "Name",
    email: "Email",
    company: "Company",
    companyOptional: "(optional)",
    website: "Current website",
    websiteOptional: "(optional)",
    message: "How can we help?",
  },
  submit: "Send message",
  submitting: "Sending…",
} as const;
