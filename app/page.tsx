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
    <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
      {/* Compact org hub intro — not a marketing hero */}
      <section className="border-b border-card-border pb-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted">
          <span className="rounded-sm border border-card-border bg-card px-1 py-px font-mono text-[10px]">
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
          <span className="text-muted-2">·</span>
          <Link href="/events" className="hover:text-accent">
            {events.filter((e) => e.status === "upcoming").length} upcoming
          </Link>
        </div>
        <h1 className="mt-1 text-lg font-semibold tracking-tight">
          Explore OSClub
        </h1>
        <p className="mt-0.5 max-w-2xl text-[13px] leading-snug text-muted">
          Browse club repositories, meet maintainers, join events.{" "}
          <Link href="/join" className="text-accent hover:underline">
            How to join →
          </Link>
        </p>
      </section>

      <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
        <section>
          <div className="mb-1.5 flex items-baseline justify-between gap-2">
            <h2 className="text-[13px] font-semibold tracking-tight">
              Projects{" "}
              <span className="font-normal text-muted">· recently updated</span>
            </h2>
            <Link
              href="/projects"
              className="text-[11px] text-accent hover:underline"
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

        <aside className="space-y-2.5">
          <div className="overflow-hidden rounded-md border border-card-border">
            <div className="flex items-center justify-between border-b border-card-border bg-card px-2.5 py-1">
              <h2 className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                Upcoming
              </h2>
              <Link
                href="/events"
                className="text-[10px] text-muted hover:text-accent"
              >
                All
              </Link>
            </div>
            <ul className="divide-y divide-card-border">
              {upcoming.map((ev) => (
                <li key={ev.id} className="px-2.5 py-1.5">
                  <Link
                    href="/events"
                    className="text-[12px] font-medium text-accent hover:underline"
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

          <div className="overflow-hidden rounded-md border border-card-border">
            <div className="flex items-center justify-between border-b border-card-border bg-card px-2.5 py-1">
              <h2 className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                People
              </h2>
              <Link
                href="/people"
                className="text-[10px] text-muted hover:text-accent"
              >
                Directory
              </Link>
            </div>
            <ul className="divide-y divide-card-border">
              {people.slice(0, 4).map((p) => (
                <li
                  key={p.handle}
                  className="flex items-center gap-2 px-2.5 py-1"
                >
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-card-border bg-background font-mono text-[7px] text-muted">
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

          <div className="overflow-hidden rounded-md border border-card-border">
            <div className="border-b border-card-border bg-card px-2.5 py-1">
              <h2 className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                Activity
              </h2>
            </div>
            <ul className="divide-y divide-card-border">
              {recent.map((p) => (
                <li key={p.slug} className="px-2.5 py-1">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-[12px] font-medium text-accent hover:underline"
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

          <div className="rounded-md border border-card-border bg-card px-2.5 py-2">
            <h2 className="text-[10px] font-semibold uppercase tracking-wide text-muted">
              Get involved
            </h2>
            <ol className="mt-1 list-decimal space-y-0.5 pl-3.5 text-[11px] text-muted">
              <li>Join the GitHub org / chat</li>
              <li>Pick a good-first-issue</li>
              <li>Open a PR or propose an idea</li>
            </ol>
            <Link
              href="/join"
              className="mt-1.5 inline-block text-[11px] text-accent hover:underline"
            >
              Full join guide →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
