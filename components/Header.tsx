"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const nav = [
  { href: "/", label: "Explore" },
  { href: "/projects", label: "Projects" },
  { href: "/people", label: "People" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [q, setQ] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/projects?q=${encodeURIComponent(query)}` : "/projects");
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background">
      <div className="mx-auto flex h-12 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded border border-card-border bg-card font-mono text-[10px] font-bold text-accent">
            OS
          </span>
          <span className="text-sm font-semibold tracking-tight">OSClub</span>
        </Link>

        <form onSubmit={onSearch} className="ml-1 hidden min-w-0 flex-1 md:block">
          <label className="sr-only" htmlFor="global-search">
            Search projects
          </label>
          <div className="relative max-w-sm">
            <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-muted-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z" />
              </svg>
            </span>
            <input
              id="global-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="h-7 w-full rounded-md border border-card-border bg-card py-0.5 pl-7 pr-8 text-xs text-foreground placeholder:text-muted-2 focus:border-accent focus:outline-none"
            />
            <kbd className="pointer-events-none absolute right-1.5 top-1/2 hidden -translate-y-1/2 rounded border border-card-border px-1 font-mono text-[10px] text-muted-2 sm:inline">
              /
            </kbd>
          </div>
        </form>

        <nav className="ml-auto hidden items-stretch gap-0 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex h-12 items-center px-2.5 text-sm transition-colors ${
                  active
                    ? "font-semibold text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-t bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/join"
          className="ml-1 hidden h-7 items-center rounded-md bg-accent px-2.5 text-xs font-semibold text-[#0d1117] hover:bg-accent-hover sm:inline-flex"
        >
          Join
        </Link>

        <button
          type="button"
          className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-md border border-card-border text-muted hover:text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
            {menuOpen ? (
              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
            ) : (
              <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-card-border bg-card px-4 py-3 lg:hidden">
          <form onSubmit={onSearch} className="mb-3 md:hidden">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="h-8 w-full rounded-md border border-card-border bg-background px-3 text-sm placeholder:text-muted-2 focus:border-accent focus:outline-none"
            />
          </form>
          <nav className="flex flex-col gap-0.5">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-2 py-1.5 text-sm ${
                    active
                      ? "bg-accent-soft font-medium text-accent"
                      : "text-muted hover:bg-background hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
