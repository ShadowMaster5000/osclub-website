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
    .slice(0, 5);

  return (
    <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-6">
      {/* Compact org hub intro — not a marketing hero */}
      <section className="border-b border-card-border pb-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted">
          <span className="rounded-md border border-card-border bg-card px-1.5 py-px font-mono text-[10px] text-muted">
            org
          </span>
          <span className="font-medium text-foreground">Open Source Club</span>
          <span className="text-muted-2">·</span>
          <Link href="/projects" className="hover:text-link">
            {projects.length} projects
          </Link>
          <span className="text-muted-2">·</span>
          <Link href="/people" className="hover:text-link">
            {people.length} people
          </Link>
          <span className="text-muted-2">·</span>
          <Link href="/events" className="hover:text-link">
            {events.filter((e) => e.status === "upcoming").length} upcoming
          </Link>
        </div>
        <h1 className="mt-1.5 text-xl font-semibold tracking-tight text-foreground">
          Explore OSClub
        </h1>
        <p className="mt-1 max-w-2xl text-[13px] leading-snug text-muted">
          Browse club repositories, meet maintainers, join events.{" "}
          <Link href="/join" className="text-link hover:underline">
            How to join →
          </Link>
        </p>
      </section>

      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_240px]">
        <section>
          <div className="mb-2 flex items-baseline justify-between gap-2">
            <h2 className="text-[13px] font-semibold tracking-tight">
              Projects{" "}
              <span className="font-normal text-muted">· recently updated</span>
            </h2>
            <Link
              href="/projects"
              className="text-[11px] text-link hover:underline"
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
          <div className="overflow-hidden rounded-lg border border-card-border bg-card">
            <div className="flex items-center justify-between border-b border-card-border bg-tag-bg/60 px-3 py-1.5">
              <h2 className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                Upcoming
              </h2>
              <Link
                href="/events"
                className="text-[10px] text-muted hover:text-link"
              >
                All
              </Link>
            </div>
            <ul className="divide-y divide-card-border">
              {upcoming.map((ev) => (
                <li key={ev.id} className="px-3 py-2">
                  <Link
                    href="/events"
                    className="text-[12px] font-medium text-link hover:underline"
                  >
                    {ev.title}
                  </Link>
                  <p className="mt-0.5 text-[10px] text-muted">
                    {ev.when} · {ev.type}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-card-border bg-card">
            <div className="flex items-center justify-between border-b border-card-border bg-tag-bg/60 px-3 py-1.5">
              <h2 className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                People
              </h2>
              <Link
                href="/people"
                className="text-[10px] text-muted hover:text-link"
              >
                Directory
              </Link>
            </div>
            <ul className="divide-y divide-card-border">
              {people.slice(0, 4).map((p) => (
                <li
                  key={p.handle}
                  className="flex items-center gap-2 px-3 py-1.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-card-border bg-tag-bg font-mono text-[7px] text-muted">
                    {p.name.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[12px] font-medium leading-tight">
                      {p.name}
                    </p>
                    <p className="truncate text-[10px] text-muted">{p.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-card-border bg-card">
            <div className="border-b border-card-border bg-tag-bg/60 px-3 py-1.5">
              <h2 className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                Activity
              </h2>
            </div>
            <ul className="divide-y divide-card-border">
              {recent.map((p) => (
                <li key={p.slug} className="px-3 py-1.5">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-[12px] font-medium text-link hover:underline"
                  >
                    {p.name}
                  </Link>
                  <p className="mt-0.5 text-[10px] text-muted-2">
                    updated {p.updated}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-card-border bg-card px-3 py-2.5">
            <h2 className="text-[10px] font-semibold uppercase tracking-wide text-muted">
              Get involved
            </h2>
            <ol className="mt-1.5 list-decimal space-y-0.5 pl-3.5 text-[11px] text-muted">
              <li>Join the GitHub org / chat</li>
              <li>Pick a good-first-issue</li>
              <li>Open a PR or propose an idea</li>
            </ol>
            <Link
              href="/join"
              className="mt-2 inline-flex h-7 items-center rounded-md bg-accent px-2.5 text-[11px] font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Full join guide →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
