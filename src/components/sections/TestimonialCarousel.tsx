"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getFeaturedTestimonials } from "@/content/testimonials";
import { getInitials, colorForName } from "@/lib/initials";

const SWIPE_THRESHOLD = 50;

export function TestimonialCarousel() {
  const testimonials = getFeaturedTestimonials();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const active = testimonials[index];

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length, paused]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) prev();
    else if (delta < -SWIPE_THRESHOLD) next();
    touchStartX.current = null;
  }

  return (
    <Section>
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Client Stories</h2>
        <p className="mt-2 text-body">Trusted by property managers who demand excellence.</p>
      </Reveal>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="mx-auto max-w-2xl"
      >
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="mx-auto mt-10 max-w-2xl rounded-2xl bg-surface p-8 shadow-[0_1px_2px_rgba(16,24,40,0.06)] md:p-10"
        >
          <div key={index} className="reveal is-visible">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-start/10">
                <Quote className="h-5 w-5 text-cyan-end" />
              </div>
              <div className="flex gap-1 text-coral">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>

            <p className="mt-6 font-display text-lg leading-relaxed text-ink md:text-xl">
              {active.quote}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${colorForName(
                    active.companyName
                  )}`}
                >
                  {getInitials(active.companyName)}
                </span>
                <div>
                  <p className="font-semibold text-ink">{active.authorName}</p>
                  <p className="text-sm text-body">
                    {active.authorRole}, {active.companyName}
                  </p>
                </div>
              </div>

              {active.highlightStat && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-3 py-1 font-accent text-xs font-bold text-coral-hover">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {active.highlightStat}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full border border-ink/15 p-2 transition-colors hover:border-cyan-end hover:text-cyan-end"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center">
            {testimonials.map((t, i) => (
              <button
                key={t.companyName}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-5 bg-cyan-end" : "w-1.5 bg-ink/15"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full border border-ink/15 p-2 transition-colors hover:border-cyan-end hover:text-cyan-end"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Button href="/portfolio" variant="outline-ink" size="md">
          Read All Client Stories
        </Button>
      </div>
    </Section>
  );
}
