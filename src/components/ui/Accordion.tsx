"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItemData = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-xl bg-surface shadow-[0_1px_2px_rgba(16,24,40,0.06)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span
                className={cn(
                  "font-display font-semibold transition-colors",
                  isOpen ? "text-cyan-end" : "text-ink"
                )}
              >
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-cyan-end transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 text-body leading-relaxed">{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
