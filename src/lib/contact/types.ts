/**
 * Normalized payload after server-side validation.
 * Use this shape when wiring Resend, webhooks, or a CRM.
 */
export type ContactSubmissionPayload = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
};
