import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "What OSClub is and how it runs.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-5">
      <div className="border-b border-card-border pb-2.5">
        <h1 className="text-lg font-semibold tracking-tight">About OSClub</h1>
        <p className="mt-0.5 text-[13px] text-muted">
          Open Source Club · osclub.org
        </p>
      </div>

      <div className="mt-3 space-y-2.5 text-[13px] leading-relaxed text-muted">
        <p>
          <strong className="text-foreground">OSClub</strong> is a community for
          people who build, maintain, and learn open-source software together.
          Real repos, clear onboarding, welcoming reviews.
        </p>
        <p>
          Not a product company — a place to ship useful tools in public, mentor
          first-time contributors, and host small workshops. Home:{" "}
          <a
            href="https://osclub.org"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://osclub.org
          </a>
          .
        </p>
      </div>

      <div className="mt-4 divide-y divide-card-border overflow-hidden rounded-md border border-card-border">
        <div className="px-3 py-2 sm:px-3.5">
          <h2 className="text-[13px] font-semibold text-foreground">Mission</h2>
          <p className="mt-0.5 text-[12px] text-muted">
            Lower the barrier to open-source contribution and help people ship
            meaningful work in public.
          </p>
        </div>
        <div className="px-3 py-2 sm:px-3.5">
          <h2 className="text-[13px] font-semibold text-foreground">How we run</h2>
          <p className="mt-0.5 text-[12px] text-muted">
            Async-first discussions, shared repos, mentorship, and occasional
            events. Beginners welcome.
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-1.5">
        <Link
          href="/join"
          className="inline-flex h-7 items-center rounded-md bg-accent px-2.5 text-[13px] font-semibold text-[#0d1117] hover:bg-accent-hover"
        >
          Join the club
        </Link>
        <Link
          href="/projects"
          className="inline-flex h-7 items-center rounded-md border border-card-border px-2.5 text-[13px] font-medium hover:bg-card"
        >
          See projects
        </Link>
      </div>
    </div>
  );
}
