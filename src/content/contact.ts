export const contactPage = {
  title: "Contact",
  description:
    "Reach Zen/Iconic about visibility, lead flow, or ongoing digital support for your service business. We reply within one business day with a clear next step.",
} as const;

export const contactSeo = {
  keywords: [
    "contact digital growth partner",
    "local service business marketing help",
    "ongoing digital presence support",
  ],
} as const;

export const contactCopy = {
  headline: "Tell us what you are trying to improve",
  body: "If presence feels behind the business, leads arrive in spikes you cannot trace, or prospects drop before they call—send a short note. We work with operators who want a calmer, more legible path from discovery to contact.",
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
