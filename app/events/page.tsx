import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Meetups, workshops, and office hours from OSClub.",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="border-b border-card-border pb-4">
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Events
        </h1>
        <p className="mt-1.5 text-sm text-muted">
          Workshops and meetups. Sparse on purpose — add more as the calendar
          fills. Want to host one?{" "}
          <Link href="/join" className="text-accent hover:underline">
            Get involved
          </Link>
          .
        </p>
      </div>

      <section className="mt-6">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
          Upcoming
        </h2>
        <ul className="overflow-hidden rounded-md border border-card-border bg-card divide-y divide-card-border">
          {upcoming.map((ev) => (
            <li key={ev.id} className="px-4 py-3 hover:bg-card-hover">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold tracking-tight">
                  {ev.title}
                </h3>
                <span className="rounded-sm border border-card-border px-1.5 py-px text-[11px] capitalize text-muted">
                  {ev.type}
                </span>
              </div>
              <p className="mt-1 text-xs text-accent">{ev.when}</p>
              <p className="mt-1 text-sm text-muted">{ev.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
          Past
        </h2>
        <ul className="overflow-hidden rounded-md border border-card-border divide-y divide-card-border opacity-90">
          {past.map((ev) => (
            <li key={ev.id} className="px-4 py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold tracking-tight">
                  {ev.title}
                </h3>
                <span className="text-xs text-muted">{ev.date}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{ev.blurb}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
