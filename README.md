# OSClub Website

Local Next.js (App Router) hub for **OSClub** — Open Source Club.

- Domain: [https://osclub.org](https://osclub.org)
- Stack: Next.js App Router + TypeScript + Tailwind CSS v4
- Aesthetic: GitHub + Hugging Face product UI — dense project **list rows**, HF-style filter chips, 1px borders, GitHub-dark palette (`#0d1117` / `#161b22`), single blue accent (`#4493f8`). Not a marketing landing page.

## Run locally

```bash
cd osclub-website   # or /workspace/osclub-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build must pass
npm start       # serve the build
```

Press `/` on any page to focus the header search (filters projects).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Explore hub — compact intro, project list rows, activity sidebar |
| `/projects` | Full directory with language/tag/status chips + sort |
| `/projects/[slug]` | Project detail (README + About sidebar, repo-style header) |
| `/people` | Members / roles (seed placeholders) |
| `/events` | Upcoming & past events |
| `/about` | Short mission + how we run |
| `/join` | Concrete join steps |

## Seed data

Projects, people, and events live under `lib/`. Stars/forks/issues are placeholders until wired to GitHub APIs.

## Deploy (later)

Push to GitHub, connect **Vercel**, attach custom domain **osclub.org**. Do not commit secrets. Owner/parent pushes when ready.
