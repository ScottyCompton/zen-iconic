"use server";

import { Resend } from "resend";

import { formatContactSubmissionEmail } from "@/lib/contact/formatSubmission";
import type { ContactSubmissionPayload } from "@/lib/contact/types";

const CONTACT_INBOX_DEFAULT = "zeniconic.business@gmail.com";

const RESEND_MISSING = "RESEND_API_KEY_MISSING";

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

function contactInbox(): string {
  const fromEnv = process.env.CONTACT_INBOX?.trim();
  return fromEnv && fromEnv.length > 0 ? fromEnv : CONTACT_INBOX_DEFAULT;
}

function contactFrom(): string {
  const fromEnv = process.env.CONTACT_FROM?.trim();
  return (
    fromEnv && fromEnv.length > 0
      ? fromEnv
      : "Zen/Iconic <onboarding@resend.dev>"
  );
}

async function deliverContactSubmission(
  payload: ContactSubmissionPayload,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error(RESEND_MISSING);
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: contactFrom(),
    to: [contactInbox()],
    replyTo: payload.email,
    subject: `Contact form: ${payload.name}`,
    text: formatContactSubmissionEmail(payload),
  });

  if (error) {
    throw new Error(error.message);
  }
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
  } catch (err) {
    if (err instanceof Error && err.message === RESEND_MISSING) {
      return {
        ok: false,
        message:
          "Email delivery is not configured yet. Add RESEND_API_KEY to the server environment (see .env.example), or write to zeniconic.business@gmail.com directly.",
      };
    }
    return {
      ok: false,
      message:
        "Something went wrong while sending. Please try again or email zeniconic.business@gmail.com directly.",
    };
  }

  return {
    ok: true,
    message:
      "Thank you. We have received your message and will respond within one business day.",
  };
}
