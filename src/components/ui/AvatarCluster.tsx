const INITIALS = [
  { text: "SM", bg: "bg-cyan-end" },
  { text: "KR", bg: "bg-coral" },
  { text: "PP", bg: "bg-ink" },
  { text: "CS", bg: "bg-coral-hover" },
];

export function AvatarCluster() {
  return (
    <div className="flex -space-x-2.5">
      {INITIALS.map((avatar) => (
        <span
          key={avatar.text}
          className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg text-[10px] font-bold text-white ${avatar.bg}`}
        >
          {avatar.text}
        </span>
      ))}
    </div>
  );
}
