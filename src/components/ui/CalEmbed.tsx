"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CalendarClock } from "lucide-react";

const CAL_LINK = process.env.NEXT_PUBLIC_CALCOM_LINK;

export function CalEmbed() {
  useEffect(() => {
    if (!CAL_LINK) return;
    (async function run() {
      const cal = await getCalApi();
      cal("ui", { theme: "light", styles: { branding: { brandColor: "#f2703c" } } });
    })();
  }, []);

  if (!CAL_LINK) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface p-8 text-center">
        <CalendarClock className="h-8 w-8 text-cyan-end" />
        <p className="mt-4 font-display font-semibold text-ink">
          Scheduling link not connected yet
        </p>
        <p className="mt-2 max-w-xs text-sm text-body">
          Set <code className="text-xs">NEXT_PUBLIC_CALCOM_LINK</code> to your
          Cal.com event link to enable instant booking here.
        </p>
      </div>
    );
  }

  return (
    <Cal
      calLink={CAL_LINK}
      style={{ width: "100%", height: "100%", minHeight: "420px", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
