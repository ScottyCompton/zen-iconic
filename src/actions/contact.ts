"use server";

import type { ContactSubmissionPayload } from "@/lib/contact/types";

export type ContactState = {
  ok: boolean;
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    website?: string;
    message?: string;
  };
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeOptionalWebsite(raw: string): string {
  const s = raw.trim();
  if (!s) return "";
  if (/^https?:\/\//i.test(s)) return s;
  return `https://${s}`;
}

function isValidOptionalWebsite(raw: string): boolean {
  const s = raw.trim();
  if (!s) return true;
  try {
    const url = new URL(normalizeOptionalWebsite(s));
    return url.hostname.includes(".");
  } catch {
    return false;
  }
}

/**
 * Send the validated payload to your stack. Example with Resend:
 *
 * import { Resend } from "resend";
 * const resend = new Resend(process.env.RESEND_API_KEY);
 * await resend.emails.send({
 *   from: "Zen/Iconic <onboarding@yourdomain.com>",
 *   to: process.env.CONTACT_INBOX!,
 *   replyTo: payload.email,
 *   subject: `Inquiry from ${payload.name}`,
 *   text: formatContactSubmissionEmail(payload), // @/lib/contact/formatSubmission
 * });
 */
async function deliverContactSubmission(
  payload: ContactSubmissionPayload,
): Promise<void> {
  void payload;
  // Implement with Resend, Postmark, Slack, etc.
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const websiteRaw = String(formData.get("website") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: NonNullable<ContactState["errors"]> = {};

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!emailPattern.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!isValidOptionalWebsite(websiteRaw)) {
    errors.website = "Enter a valid URL or leave this field blank.";
  }
  if (message.length < 10) {
    errors.message = "Please share a few sentences so we can respond usefully.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  const payload: ContactSubmissionPayload = {
    name,
    email,
    company,
    website: websiteRaw ? normalizeOptionalWebsite(websiteRaw) : "",
    message,
  };

  try {
    await deliverContactSubmission(payload);
  } catch {
    return {
      ok: false,
      message:
        "Something went wrong while sending. Please try again or email us directly.",
    };
  }

  return {
    ok: true,
    message:
      "Thank you. We have received your message and will respond within one business day.",
  };
}
