# OSClub Website

Local Next.js (App Router) hub for **OSClub** — Open Source Club.

- Domain: [https://osclub.org](https://osclub.org)
- Stack: Next.js App Router + TypeScript + Tailwind CSS
- Aesthetic: GitHub + Hugging Face product UI — dense project **list rows**, 1px borders, GitHub-dark palette (`#0d1117` / `#161b22`), single blue accent. Not a marketing landing page.

## Run locally

```bash
cd /workspace/osclub-website   # or clone path
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build must pass
npm start       # serve the build
```

## Routes

| Path | Purpose |
|------|---------|
| `/` | Explore hub — compact intro, project list, activity sidebar |
| `/projects` | Full project directory (filterable list rows) |
| `/projects/[slug]` | Project detail (README + About sidebar) |
| `/people` | Members / roles (seed placeholders) |
| `/events` | Upcoming & past events |
| `/about` | Short mission + how we run |
| `/join` | Concrete join steps |

## Seed data

Projects, people, and events live under `lib/`. Stars/forks/issues are placeholders until wired to GitHub.

## Deploy (later)

GitHub repo + **Vercel**. Custom domain: **osclub.org**. Parent/owner pushes when ready — do not push secrets.
