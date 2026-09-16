"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { MenuIcon, SearchIcon } from "./icons";

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
  const searchParams = useSearchParams();
  const [q, setQ] = useState(searchParams.get("q") ?? "");
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (pathname.startsWith("/projects")) {
      setQ(searchParams.get("q") ?? "");
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      if (
        e.key === "/" &&
        tag !== "INPUT" &&
        tag !== "TEXTAREA" &&
        !(e.target as HTMLElement)?.isContentEditable
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/projects?q=${encodeURIComponent(query)}` : "/projects");
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background">
      <div className="mx-auto flex h-11 max-w-6xl items-center gap-2 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-sm border border-card-border bg-card font-mono text-[9px] font-bold text-accent">
            OS
          </span>
          <span className="text-[13px] font-semibold tracking-tight">
            OSClub
          </span>
        </Link>

        <form
          onSubmit={onSearch}
          className="ml-2 hidden min-w-0 flex-1 md:block"
        >
          <label className="sr-only" htmlFor="global-search">
            Search projects
          </label>
          <div className="relative max-w-sm">
            <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-muted-2">
              <SearchIcon size={13} />
            </span>
            <input
              ref={inputRef}
              id="global-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="h-6 w-full rounded-md border border-card-border bg-card py-0 pl-7 pr-7 text-xs text-foreground placeholder:text-muted-2 focus:border-accent focus:outline-none"
            />
            <kbd className="pointer-events-none absolute right-1.5 top-1/2 hidden -translate-y-1/2 rounded border border-card-border px-1 font-mono text-[9px] text-muted-2 sm:inline">
              /
            </kbd>
          </div>
        </form>

        <nav
          className="ml-auto hidden items-stretch gap-0 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex h-11 items-center px-2 text-[13px] transition-colors ${
                  active
                    ? "font-semibold text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-1.5 -bottom-px h-0.5 bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-md border border-card-border text-muted hover:text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-card-border bg-card px-4 py-2.5 lg:hidden">
          <form onSubmit={onSearch} className="mb-2 md:hidden">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="h-7 w-full rounded-md border border-card-border bg-background px-2.5 text-sm placeholder:text-muted-2 focus:border-accent focus:outline-none"
            />
          </form>
          <nav className="flex flex-col gap-0.5" aria-label="Mobile">
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
