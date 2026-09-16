import Link from "next/link";
import type { Project } from "@/lib/projects";
import { langDot, statusLabel } from "@/lib/ui";
import { ForkIcon, IssueIcon, RepoIcon, StarIcon } from "./icons";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="group px-3 py-2.5 transition-colors hover:bg-card-hover sm:px-4">
      <div className="flex items-start gap-2.5">
        <div className="mt-0.5 shrink-0">
          <RepoIcon size={15} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link
              href={`/projects/${project.slug}`}
              className="text-[15px] font-semibold leading-tight text-accent hover:underline"
            >
              <span className="text-muted">osclub/</span>
              {project.name}
            </Link>
            <span className="rounded border border-card-border px-1.5 py-px text-[11px] leading-4 text-muted">
              {statusLabel[project.status]}
            </span>
            <span className="ml-auto hidden items-center gap-3 text-xs text-muted sm:inline-flex">
              <span className="inline-flex items-center gap-1" title="Stars (placeholder)">
                <StarIcon />
                {project.stars}
              </span>
              <span className="inline-flex items-center gap-1" title="Forks (placeholder)">
                <ForkIcon />
                {project.forks}
              </span>
            </span>
          </div>

          <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-muted">
            {project.description}
          </p>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${langDot[project.language] ?? "bg-muted"}`}
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
            <span>Updated {project.updated}</span>
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-card-border bg-background px-1 py-px font-mono text-[10px] text-muted-2"
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
