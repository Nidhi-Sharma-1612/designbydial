"use client";

import { useState } from "react";
import { PiggyBank, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useAnimatedNumber } from "@/lib/useAnimatedNumber";
import { pricingTiers } from "@/content/pricing";

const SHIFT_PERCENT = 0.3;

const currency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const growthTier = pricingTiers.find((t) => t.mostPopular);
const growthTierCost = Number(growthTier?.price.replace(/[^0-9]/g, "") ?? 0);

export function SavingsCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(15000);
  const [commissionRate, setCommissionRate] = useState(15);

  const annualCommissionCost = monthlyRevenue * (commissionRate / 100) * 12;
  const potentialSavings = Math.round(annualCommissionCost * SHIFT_PERCENT);
  const animatedSavings = useAnimatedNumber(potentialSavings);
  const animatedMonthly = Math.round(animatedSavings / 12);
  const monthlySavings = Math.round(potentialSavings / 12);
  const paybackMonths =
    growthTierCost > 0 && monthlySavings > 0
      ? Math.max(1, Math.ceil(growthTierCost / monthlySavings))
      : null;

  return (
    <Section tone="tint">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-end">
            Savings Calculator
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            See what OTA commissions are really costing you
          </h2>
          <p className="mt-4 text-body leading-relaxed">
            Drag the sliders to match your current OTA bookings, and we&apos;ll
            estimate what you could save every year by shifting just{" "}
            {SHIFT_PERCENT * 100}% of that revenue to a direct booking website.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <Card className="space-y-8">
            <Slider
              label="Monthly revenue from OTA bookings"
              value={monthlyRevenue}
              min={2000}
              max={50000}
              step={500}
              formatValue={currency}
              onChange={setMonthlyRevenue}
            />
            <Slider
              label="Average OTA commission rate"
              value={commissionRate}
              min={10}
              max={25}
              step={1}
              formatValue={(v) => `${v}%`}
              onChange={setCommissionRate}
            />

            <div className="rounded-xl bg-linear-to-br from-cyan-start/10 to-coral/10 p-6 text-center">
              <PiggyBank className="mx-auto h-7 w-7 text-coral" />
              <p className="mt-2 text-sm text-body">
                Estimated annual savings from shifting {SHIFT_PERCENT * 100}% direct
              </p>
              <p className="font-accent text-4xl font-bold text-coral md:text-5xl">
                {currency(animatedSavings)}
              </p>
              <p className="mt-1 text-sm text-body">
                ~{currency(animatedMonthly)}/month back in your pocket
              </p>

              {paybackMonths && (
                <div className="mx-auto mt-4 inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-ink shadow-[0_1px_2px_rgba(16,24,40,0.06)]">
                  <TrendingUp className="h-3.5 w-3.5 text-cyan-end" />
                  Pays for a Growth website in ~{paybackMonths}{" "}
                  {paybackMonths === 1 ? "month" : "months"}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Button href="/contact" size="lg" className="w-full">
                {potentialSavings > 0
                  ? `Show Me How to Save ${currency(potentialSavings)}/Year`
                  : "Show Me How to Get There"}
              </Button>
              <p className="text-center text-xs text-body/70">
                Estimate for illustration only, based on the inputs above.
                Actual results vary by market, property type, and guest mix.
              </p>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
