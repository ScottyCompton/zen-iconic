export const contactPage = {
  title: "Contact",
  description:
    "Start a conversation with Zen/Iconic about more calls and leads, your online presence, or our Launch, Growth, and Momentum plans (setup plus monthly). We reply within one business day with a clear next step.",
} as const;

export const contactSeo = {
  keywords: [
    "contact zen iconic local business",
    "help with website and leads",
    "managed online presence partner",
  ],
} as const;

export const contactCopy = {
  headline: "Tell us about your business",
  body: "If you want more calls and customers from how you show up online—or your site feels outdated or hard to use—we should talk. We work with local businesses on ongoing digital presence: setup fee plus monthly subscription, not a one-time project and silence.",
  directLabel: "Prefer email?",
} as const;

export const contactFormCopy = {
  footnote:
    "Submissions are validated on the server. Connect Resend, Postmark, or your CRM inside the contact action when you are ready.",
  placeholders: {
    name: "Alex Morgan",
    email: "you@company.com",
    company: "Company or business name",
    website: "yoursite.com or leave blank",
    message:
      "What you do, where you work, how customers find you today, and what more leads would mean for you.",
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
