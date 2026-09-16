import type { Metadata } from "next";
import Link from "next/link";
import { people } from "@/lib/people";

export const metadata: Metadata = {
  title: "People",
  description: "Members and maintainers of OSClub.",
};

export default function PeoplePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="border-b border-card-border pb-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            People
          </h1>
          <span className="text-sm text-muted">{people.length} members</span>
        </div>
        <p className="mt-1.5 max-w-2xl text-sm text-muted">
          Seed directory for organizers, maintainers, and contributors. Replace
          placeholders as members join.{" "}
          <Link href="/join" className="text-accent hover:underline">
            Join OSClub
          </Link>
        </p>
      </div>

      <div className="mt-4 overflow-hidden rounded-md border border-card-border bg-card">
        <ul className="divide-y divide-card-border">
          {people.map((p) => (
            <li
              key={p.handle}
              className="flex items-start gap-3 px-4 py-3 hover:bg-card-hover"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-card-border bg-background font-mono text-[11px] text-muted">
                {p.name.slice(0, 2).toUpperCase()}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <p className="text-sm font-semibold tracking-tight">
                    {p.name}
                  </p>
                  <p className="font-mono text-xs text-muted">@{p.handle}</p>
                  <span className="rounded-sm border border-card-border px-1.5 py-px text-[11px] text-muted">
                    {p.role}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{p.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
