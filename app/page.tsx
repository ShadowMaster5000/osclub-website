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
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-6">
      {/* Compact hub intro — GitHub Explore density, not a marketing hero */}
      <section className="flex flex-col gap-3 border-b border-card-border pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
            <span className="rounded-sm border border-card-border bg-card px-1.5 py-0.5 font-mono text-[10px]">
              org
            </span>
            <span className="font-medium text-foreground">Open Source Club</span>
            <span className="text-muted-2">·</span>
            <Link href="/projects" className="hover:text-accent">
              {projects.length} projects
            </Link>
            <span className="text-muted-2">·</span>
            <Link href="/people" className="hover:text-accent">
              {people.length} people
            </Link>
          </div>
          <h1 className="mt-1.5 text-xl font-semibold tracking-tight">
            Explore OSClub
          </h1>
          <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-muted">
            Browse club repositories, meet maintainers, and join events. Practical
            open-source community —{" "}
            <Link href="/join" className="text-accent hover:underline">
              get involved
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
            Join
          </Link>
        </div>
      </section>

      <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
        <section>
          <div className="mb-2.5 flex items-baseline justify-between gap-2">
            <h2 className="text-sm font-semibold tracking-tight">
              Projects{" "}
              <span className="font-normal text-muted">· directory</span>
            </h2>
            <Link
              href="/projects"
              className="text-xs text-accent hover:underline"
            >
              View all →
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

        <aside className="space-y-3">
          <div className="overflow-hidden rounded-md border border-card-border">
            <div className="flex items-center justify-between border-b border-card-border bg-card px-3 py-1.5">
              <h2 className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                Upcoming
              </h2>
              <Link href="/events" className="text-[11px] text-muted hover:text-accent">
                All
              </Link>
            </div>
            <ul className="divide-y divide-card-border">
              {upcoming.map((ev) => (
                <li key={ev.id} className="px-3 py-2">
                  <Link
                    href="/events"
                    className="text-[13px] font-medium text-accent hover:underline"
                  >
                    {ev.title}
                  </Link>
                  <p className="mt-0.5 text-[11px] text-muted">
                    {ev.when} · {ev.type}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-md border border-card-border">
            <div className="flex items-center justify-between border-b border-card-border bg-card px-3 py-1.5">
              <h2 className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                People
              </h2>
              <Link href="/people" className="text-[11px] text-muted hover:text-accent">
                Directory
              </Link>
            </div>
            <ul className="divide-y divide-card-border">
              {people.slice(0, 4).map((p) => (
                <li key={p.handle} className="flex items-center gap-2 px-3 py-1.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-card-border bg-background font-mono text-[8px] text-muted">
                    {p.name.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-medium leading-tight">
                      {p.name}
                    </p>
                    <p className="truncate text-[11px] text-muted">{p.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-md border border-card-border">
            <div className="border-b border-card-border bg-card px-3 py-1.5">
              <h2 className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                Recently updated
              </h2>
            </div>
            <ul className="divide-y divide-card-border">
              {recent.map((p) => (
                <li key={p.slug} className="px-3 py-1.5">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-[13px] font-medium text-accent hover:underline"
                  >
                    {p.name}
                  </Link>
                  <p className="mt-0.5 text-[11px] text-muted-2">{p.updated}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-card-border bg-card px-3 py-2.5">
            <h2 className="text-[11px] font-semibold uppercase tracking-wide text-muted">
              Get involved
            </h2>
            <ol className="mt-1.5 list-decimal space-y-0.5 pl-4 text-[12px] text-muted">
              <li>Join the GitHub org / chat</li>
              <li>Pick a good-first-issue</li>
              <li>Open a PR or propose an idea</li>
            </ol>
            <Link
              href="/join"
              className="mt-2 inline-block text-[12px] text-accent hover:underline"
            >
              Full join guide →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
