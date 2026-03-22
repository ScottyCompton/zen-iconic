"use client";

import { useActionState } from "react";

import type { ContactState } from "@/actions/contact";
import { submitContact } from "@/actions/contact";
import { contactFormCopy } from "@/content/contact";
import { cn } from "@/lib/cn";
import {
  buttonPrimary,
  card,
  fieldLabel,
  inputField,
} from "@/lib/marketing-styles";

const initialState: ContactState = { ok: false };

const errorClass = "mt-1.5 text-xs text-red-400";

const p = contactFormCopy.placeholders;
const l = contactFormCopy.labels;

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.ok && state.message) {
    return (
      <div
        className={cn(
          card,
          "border-emerald-500/25 bg-emerald-500/[0.08] p-8 sm:p-10",
        )}
        role="status"
        aria-live="polite"
      >
        <p className="text-sm font-medium text-emerald-100">{state.message}</p>
      </div>
    );
  }

  return (
    <div className={cn(card, "p-6 sm:p-8 lg:p-10")}>
      {state.message && !state.ok ? (
        <p className="mb-6 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {state.message}
        </p>
      ) : null}
      <form action={formAction} className="space-y-6" noValidate>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={cn("block", fieldLabel)}>
              {l.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className={inputField}
              placeholder={p.name}
              required
              disabled={pending}
              aria-invalid={Boolean(state.errors?.name)}
              aria-describedby={state.errors?.name ? "name-error" : undefined}
            />
            {state.errors?.name && (
              <p id="name-error" className={errorClass}>
                {state.errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className={cn("block", fieldLabel)}>
              {l.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputField}
              placeholder={p.email}
              required
              disabled={pending}
              aria-invalid={Boolean(state.errors?.email)}
              aria-describedby={
                state.errors?.email ? "email-error" : undefined
              }
            />
            {state.errors?.email && (
              <p id="email-error" className={errorClass}>
                {state.errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className={cn("block", fieldLabel)}>
              {l.company}{" "}
              <span className="font-normal normal-case tracking-normal text-zinc-600">
                {l.companyOptional}
              </span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className={inputField}
              placeholder={p.company}
              disabled={pending}
            />
          </div>
          <div>
            <label htmlFor="website" className={cn("block", fieldLabel)}>
              {l.website}{" "}
              <span className="font-normal normal-case tracking-normal text-zinc-600">
                {l.websiteOptional}
              </span>
            </label>
            <input
              id="website"
              name="website"
              type="text"
              inputMode="url"
              autoComplete="url"
              className={inputField}
              placeholder={p.website}
              disabled={pending}
              aria-invalid={Boolean(state.errors?.website)}
              aria-describedby={
                state.errors?.website ? "website-error" : undefined
              }
            />
            {state.errors?.website && (
              <p id="website-error" className={errorClass}>
                {state.errors.website}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className={cn("block", fieldLabel)}>
            {l.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={cn(inputField, "min-h-[160px] resize-y")}
            placeholder={p.message}
            required
            disabled={pending}
            aria-invalid={Boolean(state.errors?.message)}
            aria-describedby={
              state.errors?.message ? "message-error" : undefined
            }
          />
          {state.errors?.message && (
            <p id="message-error" className={errorClass}>
              {state.errors.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={pending}
            className={buttonPrimary}
          >
            {pending ? contactFormCopy.submitting : contactFormCopy.submit}
          </button>
          <p className="max-w-sm text-xs leading-relaxed text-zinc-600">
            {contactFormCopy.footnote}
          </p>
        </div>
      </form>
    </div>
  );
}
