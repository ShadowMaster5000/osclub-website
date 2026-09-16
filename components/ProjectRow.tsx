import Link from "next/link";
import type { Project } from "@/lib/projects";

const statusLabel: Record<Project["status"], string> = {
  active: "Active",
  starter: "Starter",
  incubating: "Incubating",
  idea: "Idea",
};

const langDot: Record<string, string> = {
  TypeScript: "bg-[#3178c6]",
  JavaScript: "bg-[#f1e05a]",
  Python: "bg-[#3572A5]",
  CSS: "bg-[#563d7c]",
  Markdown: "bg-[#083fa1]",
  Go: "bg-[#00ADD8]",
  Rust: "bg-[#dea584]",
};

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  );
}

function RepoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted" aria-hidden>
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v.5a.75.75 0 0 1-1.5 0v-.5a2.5 2.5 0 0 1 2.5-2.5h8ZM4.5 6.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm.75 2.25h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5Z" />
    </svg>
  );
}

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="group flex gap-3 px-4 py-3 transition-colors hover:bg-card-hover">
      <div className="mt-0.5 shrink-0">
        <RepoIcon />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <Link
            href={`/projects/${project.slug}`}
            className="font-semibold text-accent hover:underline"
          >
            osclub/<span className="font-semibold">{project.name}</span>
          </Link>
          <span className="rounded-full border border-card-border px-1.5 py-px text-[11px] leading-4 text-muted">
            {statusLabel[project.status]}
          </span>
          <span
            className="ml-auto inline-flex items-center gap-1 text-xs text-muted"
            title="Stars (placeholder)"
          >
            <StarIcon />
            {project.stars}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <span
              className={`h-2 w-2 rounded-full ${langDot[project.language] ?? "bg-muted"}`}
              aria-hidden
            />
            {project.language}
          </span>
          <span>Updated {project.updated}</span>
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-card-border bg-background px-1.5 py-px font-mono text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
