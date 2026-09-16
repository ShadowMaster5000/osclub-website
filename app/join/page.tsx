import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join",
  description: "Concrete steps to get involved with OSClub.",
};

const steps = [
  {
    n: "1",
    title: "Join the org / chat",
    body: "Request access to the GitHub organization and community chat. Placeholder links point to osclub.org until invites are live.",
    href: "https://osclub.org",
    cta: "osclub.org hub",
    external: true,
  },
  {
    n: "2",
    title: "Read the code of conduct",
    body: "Expect kindness, clear feedback, and respect for newcomers. CoC draft lives with the club docs (link soon).",
    href: "/about",
    cta: "About OSClub",
    external: false,
  },
  {
    n: "3",
    title: "Pick a first issue",
    body: "Start with good-first-issues or docs-starter. Open an issue if you are stuck — that is expected.",
    href: "/projects/good-first-issues",
    cta: "good-first-issues",
    external: false,
  },
  {
    n: "4",
    title: "Ship a contribution",
    body: "Docs, code, design, or triage. Small PRs are fine. Ask for a review in the club channel.",
    href: "/projects",
    cta: "Browse projects",
    external: false,
  },
];

export default function JoinPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-5">
      <div className="border-b border-card-border pb-2.5">
        <h1 className="text-lg font-semibold tracking-tight">Join OSClub</h1>
        <p className="mt-0.5 text-[13px] leading-snug text-muted">
          You do not need to be an expert. Follow the steps below. Discord /
          GitHub invite URLs are placeholders until the org is wired up.
        </p>
      </div>

      <ol className="mt-3 divide-y divide-card-border overflow-hidden rounded-md border border-card-border bg-card">
        {steps.map((step) => (
          <li key={step.n} className="flex gap-2.5 px-3 py-2 sm:gap-3 sm:px-3.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-card-border bg-background font-mono text-[10px] font-bold text-accent">
              {step.n}
            </span>
            <div className="min-w-0">
              <h2 className="text-[13px] font-semibold">{step.title}</h2>
              <p className="mt-0.5 text-[12px] text-muted">{step.body}</p>
              {step.external ? (
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-[12px] text-accent hover:underline"
                >
                  {step.cta} →
                </a>
              ) : (
                <Link
                  href={step.href}
                  className="mt-1 inline-block text-[12px] text-accent hover:underline"
                >
                  {step.cta} →
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 rounded-md border border-card-border px-3 py-2 sm:px-3.5">
        <h2 className="text-[10px] font-semibold uppercase tracking-wide text-muted">
          Domain
        </h2>
        <p className="mt-1 text-[12px] text-muted">
          Production site:{" "}
          <a
            href="https://osclub.org"
            className="font-medium text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://osclub.org
          </a>
          . Deploy later via GitHub + Vercel.
        </p>
      </div>
    </div>
  );
}
