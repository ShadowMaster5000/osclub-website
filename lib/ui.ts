import type { ProjectStatus } from "./projects";

export const langDot: Record<string, string> = {
  TypeScript: "bg-[#3178c6]",
  JavaScript: "bg-[#f1e05a]",
  Python: "bg-[#3572A5]",
  CSS: "bg-[#563d7c]",
  Markdown: "bg-[#083fa1]",
  Go: "bg-[#00ADD8]",
  Rust: "bg-[#dea584]",
};

/** Tiny HF-style hue accents for language filter chips */
export const langChipHue: Record<string, string> = {
  TypeScript: "bg-[#3178c6]",
  JavaScript: "bg-[#c9b458]",
  Python: "bg-[#3572A5]",
  CSS: "bg-[#563d7c]",
  Markdown: "bg-[#083fa1]",
  Go: "bg-[#00ADD8]",
  Rust: "bg-[#dea584]",
};

export const statusLabel: Record<ProjectStatus, string> = {
  active: "Active",
  starter: "Starter",
  incubating: "Incubating",
  idea: "Idea",
};

/** Quiet status chip border/text hues — never full-row color */
export const statusChip: Record<
  ProjectStatus,
  { dot: string; text: string; border: string }
> = {
  active: {
    dot: "bg-success",
    text: "text-success",
    border: "border-success/25",
  },
  starter: {
    dot: "bg-link",
    text: "text-link",
    border: "border-link/25",
  },
  incubating: {
    dot: "bg-warning",
    text: "text-warning",
    border: "border-warning/30",
  },
  idea: {
    dot: "bg-muted-2",
    text: "text-muted",
    border: "border-card-border",
  },
};
