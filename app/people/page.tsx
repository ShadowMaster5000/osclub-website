import type { Metadata } from "next";
import Link from "next/link";
import { people } from "@/lib/people";

export const metadata: Metadata = {
  title: "People",
  description: "Members and maintainers of OSClub.",
};

export default function PeoplePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-5">
      <div className="border-b border-card-border pb-2.5">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
          <h1 className="text-lg font-semibold tracking-tight">People</h1>
          <span className="text-[13px] text-muted">{people.length} members</span>
        </div>
        <p className="mt-0.5 max-w-2xl text-[13px] text-muted">
          Organizers, maintainers, and contributors. Placeholder seats until
          members claim them.{" "}
          <Link href="/join" className="text-accent hover:underline">
            Join OSClub
          </Link>
        </p>
      </div>

      <div className="mt-3 overflow-hidden rounded-md border border-card-border bg-card">
        <ul className="divide-y divide-card-border">
          {people.map((p) => (
            <li
              key={p.handle}
              className="flex items-start gap-2.5 px-3 py-2 hover:bg-card-hover sm:px-3.5"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-card-border bg-background font-mono text-[10px] text-muted">
                {p.name.slice(0, 2).toUpperCase()}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <p className="text-[13px] font-semibold tracking-tight">
                    {p.name}
                  </p>
                  <p className="font-mono text-[11px] text-muted">@{p.handle}</p>
                  <span className="rounded-sm border border-card-border px-1 py-px text-[10px] text-muted">
                    {p.role}
                  </span>
                </div>
                <p className="mt-0.5 text-[12px] text-muted">{p.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
