"use client";

export function Slider({
  label,
  value,
  min,
  max,
  step,
  formatValue,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  formatValue: (value: number) => string;
  onChange: (value: number) => void;
}) {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-ink">{label}</label>
        <span className="font-accent text-sm font-bold text-cyan-end">
          {formatValue(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-[#2563eb]"
        style={{
          background: `linear-gradient(to right, var(--color-cyan-end) ${percent}%, var(--color-border) ${percent}%)`,
        }}
        aria-label={label}
      />
    </div>
  );
}
