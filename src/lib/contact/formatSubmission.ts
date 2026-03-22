import type { ContactSubmissionPayload } from "./types";

/** Plain-text body for Resend / notification emails. */
export function formatContactSubmissionEmail(
  payload: ContactSubmissionPayload,
): string {
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "—"}`,
    `Website: ${payload.website || "—"}`,
    "",
    payload.message,
  ];
  return lines.join("\n");
}
