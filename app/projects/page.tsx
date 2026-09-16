import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open-source projects from OSClub.",
};

const projects = [
  {
    name: "Club Platform",
    tag: "Coming soon",
    blurb: "Community hub for members, events, and contribution tracking.",
    stack: "Next.js · TypeScript",
  },
  {
    name: "Docs Starter",
    tag: "Placeholder",
    blurb: "A clean docs template for open-source repos and club guides.",
    stack: "MDX · Tailwind",
  },
  {
    name: "Contributor Toolkit",
    tag: "Ideation",
    blurb: "Scripts and checklists to help first-time contributors get unblocked.",
    stack: "CLI · Node",
  },
  {
    name: "Event Bot",
    tag: "Placeholder",
    blurb: "Lightweight bot for meetup reminders and open issue digests.",
    stack: "Python · APIs",
  },
  {
    name: "Design System",
    tag: "Soon",
    blurb: "Shared tokens and components for OSClub web properties.",
    stack: "CSS · React",
  },
  {
    name: "Your Project Here",
    tag: "Propose",
    blurb: "Have an idea? Pitch it to the club and build it in the open.",
    stack: "Anything OSS",
  },
];

export default function ProjectsPage() {
  return (
    <div className="grid-bg">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Projects
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Open-source we&apos;re building
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Placeholder grid for club projects. Repos and live links will land
          here as work ships. Want to start something?{" "}
          <Link href="/join" className="text-accent hover:underline">
            Join and propose it
          </Link>
          .
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col rounded-2xl border border-card-border bg-card/70 p-6 transition hover:border-accent/35 hover:bg-card"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold tracking-tight group-hover:text-accent">
                  {p.name}
                </h2>
                <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                  {p.tag}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.blurb}
              </p>
              <p className="mt-4 font-mono text-xs text-muted/80">{p.stack}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
