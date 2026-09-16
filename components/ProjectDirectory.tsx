"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  projects,
  languages,
  allTags,
  type Project,
  type ProjectStatus,
} from "@/lib/projects";
import { statusLabel } from "@/lib/ui";
import ProjectRow from "./ProjectRow";
import { SearchIcon } from "./icons";

type SortKey = "updated" | "stars" | "name";

const statuses: ProjectStatus[] = ["active", "starter", "incubating", "idea"];

function matches(
  p: Project,
  q: string,
  lang: string,
  tag: string,
  status: string,
) {
  const query = q.trim().toLowerCase();
  const textOk =
    !query ||
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query) ||
    p.tags.some((t) => t.includes(query));
  const langOk = !lang || p.language === lang;
  const tagOk = !tag || p.tags.includes(tag);
  const statusOk = !status || p.status === status;
  return textOk && langOk && tagOk && statusOk;
}

function sortProjects(list: Project[], sort: SortKey) {
  const copy = [...list];
  if (sort === "stars") return copy.sort((a, b) => b.stars - a.stars);
  if (sort === "name") return copy.sort((a, b) => a.name.localeCompare(b.name));
  return copy.sort((a, b) => b.updated.localeCompare(a.updated));
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex h-5 items-center rounded-sm border px-1.5 text-[11px] transition-colors ${
        active
          ? "border-accent/40 bg-accent-soft font-medium text-accent"
          : "border-card-border bg-background text-muted hover:border-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export default function ProjectDirectory({
  compact = false,
  showSidebar = false,
}: {
  compact?: boolean;
  showSidebar?: boolean;
}) {
  const searchParams = useSearchParams();
  const urlQ = searchParams.get("q") ?? "";
  const [q, setQ] = useState(urlQ);
  const [lang, setLang] = useState("");
  const [tag, setTag] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState<SortKey>("updated");

  useEffect(() => {
    setQ(urlQ);
  }, [urlQ]);

  const filtered = useMemo(
    () =>
      sortProjects(
        projects.filter((p) => matches(p, q, lang, tag, status)),
        sort,
      ),
    [q, lang, tag, status, sort],
  );

  const list = compact ? filtered.slice(0, 6) : filtered;
  const hasFilters = Boolean(q || lang || tag || status);

  /* Compact hub: list only — filters live on /projects */
  if (compact) {
    const recent = sortProjects(projects, "updated").slice(0, 6);
    return (
      <div>
        <div className="divide-y divide-card-border overflow-hidden rounded-md border border-card-border bg-card">
          {recent.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
        <p className="mt-2 text-[12px] text-muted">
          Showing {recent.length} of {projects.length}.{" "}
          <Link href="/projects" className="text-accent hover:underline">
            Open full directory with filters →
          </Link>
        </p>
      </div>
    );
  }

  const filters = (
    <div className="space-y-3">
      <div>
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-muted">
          Status
        </p>
        <div className="flex flex-wrap gap-1">
          {statuses.map((s) => (
            <Chip
              key={s}
              active={status === s}
              onClick={() => setStatus(status === s ? "" : s)}
            >
              {statusLabel[s]}
            </Chip>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-muted">
          Language
        </p>
        <div className="flex flex-wrap gap-1">
          {languages.map((l) => (
            <Chip
              key={l}
              active={lang === l}
              onClick={() => setLang(lang === l ? "" : l)}
            >
              {l}
            </Chip>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-muted">
          Tags
        </p>
        <div className="flex flex-wrap gap-1">
          {allTags.map((t) => (
            <Chip
              key={t}
              active={tag === t}
              onClick={() => setTag(tag === t ? "" : t)}
            >
              {t}
            </Chip>
          ))}
        </div>
      </div>
      {hasFilters && (
        <button
          type="button"
          onClick={() => {
            setQ("");
            setLang("");
            setTag("");
            setStatus("");
          }}
          className="text-[11px] text-accent hover:underline"
        >
          Clear filters
        </button>
      )}
    </div>
  );

  const toolbar = (
    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
      <label className="sr-only" htmlFor="project-filter">
        Filter projects
      </label>
      <div className="relative min-w-0 flex-1">
        <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-muted-2">
          <SearchIcon size={12} />
        </span>
        <input
          id="project-filter"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter by name, description, or tag…"
          className="h-7 w-full rounded-md border border-card-border bg-background py-0 pl-7 pr-2 text-[13px] placeholder:text-muted-2 focus:border-accent focus:outline-none"
        />
      </div>
      <div className="flex flex-wrap gap-1.5">
        {!showSidebar && (
          <>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="h-7 rounded-md border border-card-border bg-background px-1.5 text-[13px] text-foreground focus:border-accent focus:outline-none"
              aria-label="Language"
            >
              <option value="">Language</option>
              {languages.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="h-7 rounded-md border border-card-border bg-background px-1.5 text-[13px] text-foreground focus:border-accent focus:outline-none"
              aria-label="Tag"
            >
              <option value="">Tag</option>
              {allTags.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </>
        )}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="h-7 rounded-md border border-card-border bg-background px-1.5 text-[13px] text-foreground focus:border-accent focus:outline-none"
          aria-label="Sort"
        >
          <option value="updated">Sort: Updated</option>
          <option value="stars">Sort: Stars</option>
          <option value="name">Sort: Name</option>
        </select>
      </div>
    </div>
  );

  const results = (
    <>
      <div className="mt-2 flex items-center justify-between text-[11px] text-muted">
        <p>
          <span className="font-semibold text-foreground">{list.length}</span>{" "}
          project{list.length === 1 ? "" : "s"}
          {hasFilters ? " matching" : ""}
        </p>
        <p className="hidden sm:block">
          {sort === "updated"
            ? "Recently updated"
            : sort === "stars"
              ? "Most starred"
              : "A–Z"}
        </p>
      </div>

      {list.length === 0 ? (
        <div className="mt-2 rounded-md border border-dashed border-card-border px-4 py-8 text-center">
          <p className="text-sm font-medium text-foreground">No projects match</p>
          <p className="mt-1.5 text-[13px] text-muted">
            Clear filters, or{" "}
            <a href="/join" className="text-accent hover:underline">
              propose a new project
            </a>{" "}
            when you join the club.
          </p>
        </div>
      ) : (
        <div className="mt-1.5 divide-y divide-card-border overflow-hidden rounded-md border border-card-border bg-card">
          {list.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
      )}
    </>
  );

  if (showSidebar) {
    return (
      <div className="grid gap-5 lg:grid-cols-[180px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-14 rounded-md border border-card-border bg-card p-2.5">
            {filters}
          </div>
        </aside>
        <div>
          <div className="mb-2 rounded-md border border-card-border bg-card p-2.5 lg:hidden">
            {filters}
          </div>
          {toolbar}
          {results}
        </div>
      </div>
    );
  }

  return (
    <div>
      {toolbar}
      {results}
    </div>
  );
}
