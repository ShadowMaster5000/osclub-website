import Link from "next/link";

const highlights = [
  {
    title: "Ship in the open",
    body: "We build and maintain open-source projects together — transparent process, welcoming PRs.",
  },
  {
    title: "Learn by doing",
    body: "Mentorship, workshops, and real code. Newcomers and veterans both belong here.",
  },
  {
    title: "Community first",
    body: "A club for people who care about free software, collaboration, and lasting impact.",
  },
];

export default function Home() {
  return (
    <div className="grid-bg">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/60 px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Open Source Club · osclub.org
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Build the commons.{" "}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            Ship together.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          OSClub is a community of builders, maintainers, and learners who create
          open-source software, share knowledge, and grow the ecosystem — one
          contribution at a time.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:brightness-110"
          >
            Get involved
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-card-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent/40 hover:bg-card"
          >
            Explore projects
          </Link>
          <a
            href="https://osclub.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-muted transition hover:text-foreground"
          >
            Visit osclub.org →
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-card-border bg-card/70 p-6 transition hover:border-accent/30"
            >
              <h2 className="text-base font-semibold text-accent">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="border-y border-card-border bg-card/30">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to contribute?
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              Whether you write code, docs, design, or just want to hang out —
              there&apos;s a place for you in OSClub.
            </p>
          </div>
          <Link
            href="/join"
            className="shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-background"
          >
            Join the club
          </Link>
        </div>
      </section>
    </div>
  );
}
