import Link from "next/link";
import { Suspense } from "react";
import ProjectDirectory from "@/components/ProjectDirectory";
import { events } from "@/lib/events";
import { people } from "@/lib/people";
import { projects } from "@/lib/projects";

export default function Home() {
  const upcoming = events.filter((e) => e.status === "upcoming").slice(0, 3);
  const recent = [...projects]
    .sort((a, b) => b.updated.localeCompare(a.updated))
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      {/* Compact hub intro — not a marketing hero */}
      <section className="flex flex-col gap-3 border-b border-card-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="rounded-sm border border-card-border bg-card px-1.5 py-0.5 font-mono">
              org
            </span>
            <span>Open Source Club</span>
            <span className="text-muted-2">·</span>
            <span>{projects.length} projects</span>
          </div>
          <h1 className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl">
            Explore OSClub
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
            Community org for building open-source software, mentoring
            newcomers, and shipping useful tools. Browse projects below or{" "}
            <Link href="/join" className="text-accent hover:underline">
              join
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Link
            href="/projects"
            className="inline-flex h-8 items-center rounded-md border border-card-border bg-card px-3 text-sm font-medium text-foreground hover:bg-card-hover"
          >
            Browse projects
          </Link>
          <Link
            href="/join"
            className="inline-flex h-8 items-center rounded-md bg-accent px-3 text-sm font-semibold text-[#0d1117] hover:bg-accent-hover"
          >
            Join OSClub
          </Link>
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
        <section>
          <div className="mb-3 flex items-baseline justify-between gap-2">
            <h2 className="text-sm font-semibold tracking-tight">
              Projects{" "}
              <span className="font-normal text-muted">
                / recently updated
              </span>
            </h2>
            <Link
              href="/projects"
              className="text-xs text-accent hover:underline"
            >
              View all
            </Link>
          </div>
          <Suspense
            fallback={
              <p className="text-sm text-muted">Loading projects…</p>
            }
          >
            <ProjectDirectory compact />
          </Suspense>
        </section>

        <aside className="space-y-4">
          <div className="overflow-hidden rounded-md border border-card-border">
            <div className="border-b border-card-border bg-card px-3 py-2">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">
                Upcoming
              </h2>
            </div>
            <ul className="divide-y divide-card-border">
              {upcoming.map((ev) => (
                <li key={ev.id} className="px-3 py-2.5">
                  <Link
                    href="/events"
                    className="text-sm font-medium text-accent hover:underline"
                  >
                    {ev.title}
                  </Link>
                  <p className="mt-0.5 text-xs text-muted">
                    {ev.when} · {ev.type}
                  </p>
                </li>
              ))}
            </ul>
            <div className="border-t border-card-border px-3 py-2">
              <Link
                href="/events"
                className="text-xs text-muted hover:text-accent"
              >
                All events →
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-card-border">
            <div className="border-b border-card-border bg-card px-3 py-2">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">
                People
              </h2>
            </div>
            <ul className="divide-y divide-card-border">
              {people.slice(0, 4).map((p) => (
                <li key={p.handle} className="flex items-center gap-2.5 px-3 py-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-card-border bg-background font-mono text-[9px] text-muted">
                    {p.name.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium leading-tight">
                      {p.name}
                    </p>
                    <p className="truncate text-xs text-muted">{p.role}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-card-border px-3 py-2">
              <Link
                href="/people"
                className="text-xs text-muted hover:text-accent"
              >
                Directory →
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-card-border">
            <div className="border-b border-card-border bg-card px-3 py-2">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">
                Activity
              </h2>
            </div>
            <ul className="divide-y divide-card-border">
              {recent.map((p) => (
                <li key={p.slug} className="px-3 py-2">
                  <p className="text-xs text-muted">
                    Updated{" "}
                    <Link
                      href={`/projects/${p.slug}`}
                      className="font-medium text-accent hover:underline"
                    >
                      {p.name}
                    </Link>
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-2">{p.updated}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-card-border bg-card p-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">
              Get involved
            </h2>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-xs text-muted">
              <li>Join the GitHub org / chat</li>
              <li>Pick a good-first-issue project</li>
              <li>Open a PR or propose an idea</li>
            </ol>
            <Link
              href="/join"
              className="mt-2 inline-block text-xs text-accent hover:underline"
            >
              Full join guide →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
