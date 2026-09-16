import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join",
  description: "How to get involved with OSClub.",
};

const steps = [
  {
    n: "01",
    title: "Say hello",
    body: "Introduce yourself in the community chat or mailing list (links coming soon).",
    href: "https://osclub.org",
    cta: "Visit osclub.org",
  },
  {
    n: "02",
    title: "Pick a project",
    body: "Browse the projects board and find a good first issue or pitch your own idea.",
    href: "/projects",
    cta: "See projects",
  },
  {
    n: "03",
    title: "Ship a contribution",
    body: "Docs, code, design, or triage — every helpful PR and review counts.",
    href: "#",
    cta: "Contribution guide (soon)",
  },
  {
    n: "04",
    title: "Stay connected",
    body: "Follow updates, join events, and help newcomers find their footing.",
    href: "https://osclub.org",
    cta: "Community hub",
  },
];

export default function JoinPage() {
  return (
    <div className="grid-bg">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          Get involved
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Join OSClub
        </h1>
        <p className="mt-4 text-lg text-muted">
          You don&apos;t need to be an expert. Curiosity and kindness are enough.
          Placeholder links below point to osclub.org until Discord / GitHub /
          events are wired up.
        </p>

        <ol className="mt-12 space-y-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-card-border bg-card/70 p-6 sm:flex sm:items-start sm:gap-6"
            >
              <span className="font-mono text-sm font-bold text-accent">
                {step.n}
              </span>
              <div className="mt-2 sm:mt-0">
                <h2 className="text-lg font-semibold">{step.title}</h2>
                <p className="mt-1 text-sm text-muted">{step.body}</p>
                <a
                  href={step.href}
                  className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
                  {...(step.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {step.cta} →
                </a>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-accent/25 bg-accent-soft p-6">
          <h2 className="font-semibold text-foreground">Domain</h2>
          <p className="mt-2 text-sm text-muted">
            Official site:{" "}
            <a
              href="https://osclub.org"
              className="font-medium text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://osclub.org
            </a>
            . This local app is the development scaffold before GitHub + Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}
