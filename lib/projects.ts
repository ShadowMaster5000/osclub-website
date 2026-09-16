export type ProjectStatus = "active" | "starter" | "incubating" | "idea";

export type Project = {
  slug: string;
  name: string;
  description: string;
  language: string;
  tags: string[];
  status: ProjectStatus;
  stars: number;
  forks: number;
  issues: number;
  updated: string;
  repoUrl?: string;
  docsUrl?: string;
  readme: string;
};

export const projects: Project[] = [
  {
    slug: "club-platform",
    name: "club-platform",
    description:
      "Member hub for events, contribution tracking, and club announcements. Next.js App Router + Postgres.",
    language: "TypeScript",
    tags: ["nextjs", "community", "web"],
    status: "incubating",
    stars: 12,
    forks: 3,
    issues: 7,
    updated: "2026-09-10",
    repoUrl: "https://github.com/osclub/club-platform",
    readme:
      "Scaffold for the OSClub member hub. Tracks events, contribution streaks, and announcements. Prefer small PRs against open issues labeled `good first issue`.",
  },
  {
    slug: "docs-starter",
    name: "docs-starter",
    description:
      "Opinionated MDX docs template for open-source repos and club guides.",
    language: "TypeScript",
    tags: ["mdx", "docs", "template"],
    status: "starter",
    stars: 28,
    forks: 11,
    issues: 4,
    updated: "2026-09-08",
    repoUrl: "https://github.com/osclub/docs-starter",
    docsUrl: "https://osclub.org",
    readme:
      "Clone, swap the brand tokens, and ship docs. Includes MDX, sidebar nav, and a search stub. Ideal first contribution: fix typos or add a page.",
  },
  {
    slug: "contributor-toolkit",
    name: "contributor-toolkit",
    description:
      "CLI checklists and scripts that unblock first-time contributors.",
    language: "JavaScript",
    tags: ["cli", "dx", "onboarding"],
    status: "active",
    stars: 41,
    forks: 14,
    issues: 9,
    updated: "2026-09-14",
    repoUrl: "https://github.com/osclub/contributor-toolkit",
    readme:
      "`npx @osclub/contributor-toolkit doctor` checks git, Node, and fork remotes. Extend with new checklist steps via JSON plugins.",
  },
  {
    slug: "event-bot",
    name: "event-bot",
    description:
      "Lightweight bot for meetup reminders and open-issue digests.",
    language: "Python",
    tags: ["bot", "events", "automation"],
    status: "incubating",
    stars: 9,
    forks: 2,
    issues: 5,
    updated: "2026-08-30",
    repoUrl: "https://github.com/osclub/event-bot",
    readme:
      "Posts weekly digests to chat. Config via env vars. Needs a Discord/Slack webhook when the club chat is live.",
  },
  {
    slug: "design-tokens",
    name: "design-tokens",
    description:
      "Shared color, type, and spacing tokens for OSClub web properties.",
    language: "CSS",
    tags: ["design", "tokens", "css"],
    status: "starter",
    stars: 15,
    forks: 4,
    issues: 2,
    updated: "2026-09-02",
    repoUrl: "https://github.com/osclub/design-tokens",
    readme:
      "CSS variables matching the GitHub-dark hub palette. Import once; keep accents to a single blue.",
  },
  {
    slug: "good-first-issues",
    name: "good-first-issues",
    description:
      "Curated board of beginner-friendly issues across club repos.",
    language: "Markdown",
    tags: ["onboarding", "issues", "meta"],
    status: "active",
    stars: 33,
    forks: 8,
    issues: 12,
    updated: "2026-09-15",
    repoUrl: "https://github.com/osclub/good-first-issues",
    readme:
      "Living index of `good first issue` labels across OSClub repos. Maintainers: open a PR when you add labeled issues.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const languages = Array.from(
  new Set(projects.map((p) => p.language)),
).sort();

export const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags)),
).sort();
