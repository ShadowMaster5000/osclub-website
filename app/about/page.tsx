import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "What OSClub is and why we exist.",
};

export default function AboutPage() {
  return (
    <div className="grid-bg">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          About
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          What is OSClub?
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          <p>
            <strong className="text-foreground">OSClub</strong> (Open Source Club)
            is a community organization dedicated to open-source software,
            collaborative learning, and building tools that anyone can use,
            study, and improve.
          </p>
          <p>
            We bring together developers, designers, writers, and curious
            newcomers who believe that software thrives when it&apos;s shared.
            Our home on the web is{" "}
            <a
              href="https://osclub.org"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              osclub.org
            </a>
            .
          </p>
          <p>
            This site is the local landing experience for the club — mission,
            projects, and ways to get involved. Content will grow as the
            community does.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-card-border bg-card/70 p-6">
            <h2 className="font-semibold text-foreground">Our mission</h2>
            <p className="mt-2 text-sm text-muted">
              Lower the barrier to open-source contribution and help more people
              ship meaningful work in public.
            </p>
          </div>
          <div className="rounded-2xl border border-card-border bg-card/70 p-6">
            <h2 className="font-semibold text-foreground">How we work</h2>
            <p className="mt-2 text-sm text-muted">
              Open discussions, shared repos, mentorship, and community events —
              async-friendly and beginner-welcoming.
            </p>
          </div>
        </div>

        <Link
          href="/join"
          className="mt-12 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background hover:brightness-110"
        >
          Get involved →
        </Link>
      </div>
    </div>
  );
}
