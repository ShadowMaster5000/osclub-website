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
    <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6 sm:py-6">
      <div className="border-b border-card-border pb-3">
        <h1 className="text-xl font-semibold tracking-tight">Events</h1>
        <p className="mt-1 text-[13px] text-muted">
          Workshops and meetups. Sparse on purpose. Want to host one?{" "}
          <Link href="/join" className="text-link hover:underline">
            Get involved
          </Link>
          .
        </p>
      </div>

      <section className="mt-5">
        <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-muted">
          Upcoming · {upcoming.length}
        </h2>
        <ul className="divide-y divide-card-border overflow-hidden rounded-lg border border-card-border bg-card">
          {upcoming.map((ev) => (
            <li
              key={ev.id}
              className="row-hover px-3.5 py-2.5 hover:bg-card-hover"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[13px] font-semibold tracking-tight">
                  {ev.title}
                </h3>
                <span className="rounded-md border border-card-border px-1.5 py-px text-[10px] capitalize text-muted">
                  {ev.type}
                </span>
              </div>
              <p className="mt-0.5 text-[11px] font-medium text-accent">
                {ev.when}
              </p>
              <p className="mt-0.5 text-[12px] text-muted">{ev.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-muted">
          Past · {past.length}
        </h2>
        <ul className="divide-y divide-card-border overflow-hidden rounded-lg border border-card-border bg-card opacity-90">
          {past.map((ev) => (
            <li key={ev.id} className="px-3.5 py-2.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[13px] font-semibold tracking-tight">
                  {ev.title}
                </h3>
                <span className="text-[11px] text-muted">{ev.date}</span>
              </div>
              <p className="mt-0.5 text-[12px] text-muted">{ev.blurb}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
