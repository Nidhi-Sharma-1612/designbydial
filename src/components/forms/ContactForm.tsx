"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactFormValues } from "@/lib/contactSchema";
import { channelManagers } from "@/content/stats";

const CHANNEL_MANAGER_OPTIONS = [...channelManagers, "Other", "Not yet"] as const;

const inputClasses =
  "w-full rounded-lg border border-ink/15 bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-body/60 focus:border-cyan-end focus:outline-none focus:ring-2 focus:ring-cyan-end/20";

export function ContactForm({ variant = "full" }: { variant?: "compact" | "full" }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { channelManager: "Not yet" },
  });

  const channelManager = useWatch({ control, name: "channelManager" });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl bg-surface p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-coral" />
        <p className="mt-4 font-display font-semibold text-ink">Thanks — we got it!</p>
        <p className="mt-1 text-sm text-body">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            {...register("name")}
            placeholder="Your name"
            className={inputClasses}
            aria-label="Name"
          />
          {errors.name && <p className="mt-1 text-xs text-coral">{errors.name.message}</p>}
        </div>
        <div>
          <input
            {...register("email")}
            placeholder="Email address"
            className={inputClasses}
            aria-label="Email"
          />
          {errors.email && <p className="mt-1 text-xs text-coral">{errors.email.message}</p>}
        </div>
      </div>

      {variant === "full" && (
        <input
          {...register("phone")}
          placeholder="Phone (optional)"
          className={inputClasses}
          aria-label="Phone"
        />
      )}

      <select {...register("channelManager")} className={inputClasses} aria-label="Channel Manager">
        <option value="Not yet">Do you use a Channel Manager?</option>
        {CHANNEL_MANAGER_OPTIONS.filter((cm) => cm !== "Not yet").map((cm) => (
          <option key={cm} value={cm}>
            {cm}
          </option>
        ))}
      </select>

      {channelManager === "Other" && (
        <div>
          <input
            {...register("channelManagerOther")}
            placeholder="Which Channel Manager do you use?"
            className={inputClasses}
            aria-label="Other Channel Manager"
          />
          {errors.channelManagerOther && (
            <p className="mt-1 text-xs text-coral">{errors.channelManagerOther.message}</p>
          )}
        </div>
      )}

      {variant === "full" && (
        <textarea
          {...register("message")}
          placeholder="Tell us about your properties (optional)"
          rows={4}
          className={inputClasses}
          aria-label="Message"
        />
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Request a Free Consultation
      </Button>

      {status === "error" && (
        <p className="text-center text-sm text-coral">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
