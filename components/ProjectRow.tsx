import Link from "next/link";
import type { Project } from "@/lib/projects";
import { langDot, statusLabel } from "@/lib/ui";
import { ForkIcon, IssueIcon, RepoIcon, StarIcon } from "./icons";

/** Dense GitHub-style repository row — not a marketing card. */
export default function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="group px-3 py-1.5 transition-colors hover:bg-card-hover sm:px-3.5">
      <div className="flex items-start gap-2">
        <div className="mt-0.5 shrink-0 text-muted">
          <RepoIcon size={14} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <Link
              href={`/projects/${project.slug}`}
              className="text-[13px] font-semibold leading-tight text-accent hover:underline"
            >
              <span className="font-normal text-muted">osclub/</span>
              {project.name}
            </Link>
            <span className="rounded-sm border border-card-border px-1 py-px text-[10px] leading-3 text-muted">
              {statusLabel[project.status]}
            </span>
            <span className="ml-auto hidden items-center gap-2.5 text-[11px] text-muted sm:inline-flex">
              <span
                className="inline-flex items-center gap-1"
                title="Stars (placeholder until GitHub API)"
              >
                <StarIcon />
                {project.stars}
              </span>
              <span
                className="inline-flex items-center gap-1"
                title="Forks (placeholder)"
              >
                <ForkIcon />
                {project.forks}
              </span>
            </span>
          </div>

          <p className="mt-0.5 line-clamp-1 text-[12px] leading-snug text-muted">
            {project.description}
          </p>

          <div className="mt-0.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[11px] text-muted">
            <span className="inline-flex items-center gap-1">
              <span
                className={`h-1.5 w-1.5 rounded-full ${langDot[project.language] ?? "bg-muted"}`}
                aria-hidden
              />
              {project.language}
            </span>
            <span className="inline-flex items-center gap-1 sm:hidden">
              <StarIcon />
              {project.stars}
            </span>
            <span className="inline-flex items-center gap-1">
              <IssueIcon />
              {project.issues}
            </span>
            <span className="text-muted-2">Updated {project.updated}</span>
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-card-border px-1 py-px font-mono text-[10px] text-muted-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
