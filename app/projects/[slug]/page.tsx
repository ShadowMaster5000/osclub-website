import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { langDot, statusLabel } from "@/lib/ui";
import { ForkIcon, IssueIcon, StarIcon } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-6">
      {/* Repo-style header */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <Link href="/projects" className="hover:text-accent">
          Projects
        </Link>
        <span className="text-muted-2">/</span>
        <span className="font-semibold text-foreground">{project.name}</span>
        <span className="rounded border border-card-border px-1.5 py-px text-[11px] text-muted">
          {statusLabel[project.status]}
        </span>
        <span className="rounded border border-card-border px-1.5 py-px text-[11px] text-muted">
          Public
        </span>
      </div>

      <div className="mt-2 flex flex-wrap items-start justify-between gap-3 border-b border-card-border pb-3">
        <div className="min-w-0">
          <h1 className="font-mono text-xl font-semibold tracking-tight">
            <span className="text-muted">osclub/</span>
            <span className="text-accent">{project.name}</span>
          </h1>
          <p className="mt-1 max-w-2xl text-[13px] text-muted">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-accent/30 bg-accent-soft px-1.5 py-0.5 text-[11px] text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md border border-card-border bg-card px-2 text-xs text-muted">
            <StarIcon size={14} />
            Star{" "}
            <strong className="font-semibold text-foreground">
              {project.stars}
            </strong>
          </span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md border border-card-border bg-card px-2 text-xs text-muted">
            <ForkIcon size={14} />
            Fork{" "}
            <strong className="font-semibold text-foreground">
              {project.forks}
            </strong>
          </span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-md border border-card-border bg-card px-2 text-xs text-muted">
            <IssueIcon size={14} />
            Issues{" "}
            <strong className="font-semibold text-foreground">
              {project.issues}
            </strong>
          </span>
        </div>
      </div>

      {/* Tab strip like GH */}
      <div className="mt-0 flex gap-0 border-b border-card-border text-sm">
        <span className="relative -mb-px border-b-2 border-accent px-3 py-2 font-semibold text-foreground">
          Overview
        </span>
        <span className="px-3 py-2 text-muted">README</span>
        <span className="px-3 py-2 text-muted">
          Issues{" "}
          <span className="ml-1 rounded-full bg-card px-1.5 text-[11px] text-muted-2">
            {project.issues}
          </span>
        </span>
      </div>

      <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
        <section className="overflow-hidden rounded-md border border-card-border">
          <div className="flex items-center justify-between border-b border-card-border bg-card px-4 py-2">
            <h2 className="text-sm font-semibold">README.md</h2>
            <span className="font-mono text-[11px] text-muted">markdown</span>
          </div>
          <div className="space-y-3 px-4 py-4 text-[13px] leading-relaxed text-muted">
            <p className="text-foreground">{project.readme}</p>
            <div className="flex flex-wrap gap-2 border-t border-card-border pt-4">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 items-center rounded-md bg-accent px-3 text-sm font-semibold text-[#0d1117] hover:bg-accent-hover"
                >
                  View repository
                </a>
              ) : (
                <span className="inline-flex h-8 items-center rounded-md border border-card-border px-3 text-sm text-muted">
                  Repo URL coming soon
                </span>
              )}
              <Link
                href="/join"
                className="inline-flex h-8 items-center rounded-md border border-card-border bg-card px-3 text-sm font-medium hover:bg-card-hover"
              >
                How to contribute
              </Link>
            </div>
          </div>
        </section>

        <aside className="space-y-4 text-[13px]">
          <div>
            <h2 className="text-sm font-semibold">About</h2>
            <p className="mt-2 text-muted">{project.description}</p>
            <dl className="mt-3 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <dt className="text-muted">Language</dt>
                <dd className="inline-flex items-center gap-1.5 font-medium">
                  <span
                    className={`h-2 w-2 rounded-full ${langDot[project.language] ?? "bg-muted"}`}
                    aria-hidden
                  />
                  {project.language}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-muted">Updated</dt>
                <dd className="font-medium">{project.updated}</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-muted">Open issues</dt>
                <dd className="font-medium">{project.issues}</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-muted">Stars</dt>
                <dd className="font-medium">{project.stars}</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-muted">Forks</dt>
                <dd className="font-medium">{project.forks}</dd>
              </div>
            </dl>
          </div>
          <div className="border-t border-card-border pt-3">
            <h2 className="text-sm font-semibold">Links</h2>
            <ul className="mt-2 space-y-1.5">
              {project.repoUrl && (
                <li>
                  <a
                    href={project.repoUrl}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                </li>
              )}
              {project.docsUrl && (
                <li>
                  <a
                    href={project.docsUrl}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Docs
                  </a>
                </li>
              )}
              <li>
                <Link href="/join" className="text-accent hover:underline">
                  Contribute guide
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-accent hover:underline">
                  All projects
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
