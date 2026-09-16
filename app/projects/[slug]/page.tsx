import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

const langDot: Record<string, string> = {
  TypeScript: "bg-[#3178c6]",
  JavaScript: "bg-[#f1e05a]",
  Python: "bg-[#3572A5]",
  CSS: "bg-[#563d7c]",
  Markdown: "bg-[#083fa1]",
};

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
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <Link href="/projects" className="hover:text-accent">
          Projects
        </Link>
        <span className="text-muted-2">/</span>
        <span className="font-semibold text-foreground">{project.name}</span>
        <span className="rounded-full border border-card-border px-1.5 py-px text-[11px] capitalize text-muted">
          {project.status}
        </span>
        <span className="rounded-full border border-card-border px-1.5 py-px text-[11px] text-muted">
          Public
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-start justify-between gap-3 border-b border-card-border pb-4">
        <div>
          <h1 className="font-mono text-xl font-semibold tracking-tight sm:text-2xl">
            <span className="text-muted">osclub/</span>
            <span className="text-accent">{project.name}</span>
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm text-muted">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex h-8 items-center gap-1.5 rounded-md border border-card-border bg-card px-2.5 text-xs text-muted">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
            </svg>
            Star <strong className="text-foreground">{project.stars}</strong>
          </span>
          <span className="inline-flex h-8 items-center gap-1.5 rounded-md border border-card-border bg-card px-2.5 text-xs text-muted">
            Fork <strong className="text-foreground">{project.forks}</strong>
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
        <section className="overflow-hidden rounded-md border border-card-border">
          <div className="flex items-center justify-between border-b border-card-border bg-card px-4 py-2">
            <h2 className="text-sm font-semibold">README</h2>
            <span className="font-mono text-[11px] text-muted">md</span>
          </div>
          <div className="space-y-3 px-4 py-4 text-sm leading-relaxed text-muted">
            <p className="text-foreground">{project.readme}</p>
            <p>
              Tags:{" "}
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="mr-1.5 inline-block rounded-sm border border-card-border bg-background px-1.5 py-px font-mono text-[11px]"
                >
                  {t}
                </span>
              ))}
            </p>
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

        <aside className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold">About</h2>
            <p className="mt-2 text-sm text-muted">{project.description}</p>
            <dl className="mt-3 space-y-2 text-sm">
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
            </dl>
            <div className="mt-3 flex flex-wrap gap-1.5">
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
          <div className="border-t border-card-border pt-4">
            <h2 className="text-sm font-semibold">Links</h2>
            <ul className="mt-2 space-y-1.5 text-sm">
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
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
