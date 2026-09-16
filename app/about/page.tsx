import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "What OSClub is and how it runs.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6 sm:py-6">
      <div className="border-b border-card-border pb-3">
        <h1 className="text-xl font-semibold tracking-tight">About OSClub</h1>
        <p className="mt-1 text-[13px] text-muted">
          Open Source Club · osclub.org
        </p>
      </div>

      <div className="mt-4 space-y-3 text-[13px] leading-relaxed text-muted">
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
            className="text-link hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://osclub.org
          </a>
          .
        </p>
      </div>

      <div className="mt-5 divide-y divide-card-border overflow-hidden rounded-lg border border-card-border bg-card">
        <div className="px-3.5 py-3">
          <h2 className="text-[13px] font-semibold text-foreground">Mission</h2>
          <p className="mt-0.5 text-[12px] text-muted">
            Lower the barrier to open-source contribution and help people ship
            meaningful work in public.
          </p>
        </div>
        <div className="px-3.5 py-3">
          <h2 className="text-[13px] font-semibold text-foreground">How we run</h2>
          <p className="mt-0.5 text-[12px] text-muted">
            Async-first discussions, shared repos, mentorship, and occasional
            events. Beginners welcome.
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <Link
          href="/join"
          className="inline-flex h-8 items-center rounded-md bg-accent px-3 text-[13px] font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Join the club
        </Link>
        <Link
          href="/projects"
          className="inline-flex h-8 items-center rounded-md border border-card-border bg-card px-3 text-[13px] font-medium transition-colors hover:bg-card-hover"
        >
          See projects
        </Link>
      </div>
    </div>
  );
}
