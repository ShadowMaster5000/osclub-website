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

export const statusLabel: Record<ProjectStatus, string> = {
  active: "Active",
  starter: "Starter",
  incubating: "Incubating",
  idea: "Idea",
};
