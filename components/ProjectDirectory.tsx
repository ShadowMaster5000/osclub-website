"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { projects, languages, allTags, type Project } from "@/lib/projects";
import ProjectRow from "./ProjectRow";

function matches(p: Project, q: string, lang: string, tag: string) {
  const query = q.trim().toLowerCase();
  const textOk =
    !query ||
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query) ||
    p.tags.some((t) => t.includes(query));
  const langOk = !lang || p.language === lang;
  const tagOk = !tag || p.tags.includes(tag);
  return textOk && langOk && tagOk;
}

export default function ProjectDirectory({
  compact = false,
}: {
  compact?: boolean;
}) {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [q, setQ] = useState(initialQ);
  const [lang, setLang] = useState("");
  const [tag, setTag] = useState("");

  const filtered = useMemo(
    () => projects.filter((p) => matches(p, q, lang, tag)),
    [q, lang, tag],
  );

  const list = compact ? filtered.slice(0, 6) : filtered;

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sr-only" htmlFor="project-filter">
          Filter projects
        </label>
        <input
          id="project-filter"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter by name, description, or tag…"
          className="h-8 w-full flex-1 rounded-md border border-card-border bg-background px-3 text-sm placeholder:text-muted-2 focus:border-accent focus:outline-none"
        />
        <div className="flex gap-2">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="h-8 rounded-md border border-card-border bg-background px-2 text-sm text-foreground focus:border-accent focus:outline-none"
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
            className="h-8 rounded-md border border-card-border bg-background px-2 text-sm text-foreground focus:border-accent focus:outline-none"
            aria-label="Tag"
          >
            <option value="">Tag</option>
            {allTags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-muted">
        <p>
          <span className="font-semibold text-foreground">{list.length}</span>{" "}
          project{list.length === 1 ? "" : "s"}
          {q || lang || tag ? " matching" : ""}
        </p>
        <p className="hidden sm:block">Sorted by recently updated</p>
      </div>

      {list.length === 0 ? (
        <div className="mt-3 rounded-md border border-dashed border-card-border px-6 py-10 text-center">
          <p className="text-sm font-medium text-foreground">No projects match</p>
          <p className="mt-2 text-sm text-muted">
            Clear filters, or{" "}
            <a href="/join" className="text-accent hover:underline">
              propose a new project
            </a>{" "}
            when you join the club.
          </p>
        </div>
      ) : (
        <div className="mt-2 divide-y divide-card-border overflow-hidden rounded-md border border-card-border bg-card">
          {list.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
