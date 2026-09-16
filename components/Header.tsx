"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { MenuIcon, SearchIcon } from "./icons";
import Logo from "./Logo";

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
    <header className="sticky top-0 z-50 border-b border-card-border bg-card/95 backdrop-blur-[6px]">
      <div className="mx-auto flex h-12 max-w-6xl items-center gap-2.5 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-none"
          aria-label="OSClub home"
        >
          <Logo size={22} />
        </Link>

        <form
          onSubmit={onSearch}
          className="ml-1 hidden min-w-0 flex-1 md:block"
        >
          <label className="sr-only" htmlFor="global-search">
            Search projects
          </label>
          <div className="relative max-w-md">
            <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-2">
              <SearchIcon size={13} />
            </span>
            <input
              ref={inputRef}
              id="global-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="h-8 w-full rounded-full border border-transparent bg-tag-bg py-0 pl-8 pr-9 text-[13px] text-foreground placeholder:text-muted-2 transition-colors hover:bg-[#ebe8e2] focus:border-card-border focus:bg-card focus:outline-none focus:ring-2 focus:ring-accent/25"
            />
            <kbd className="pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 rounded border border-card-border bg-card px-1 font-mono text-[9px] text-muted-2 sm:inline">
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
                className={`relative flex h-12 items-center px-2.5 text-[13px] transition-colors duration-150 ${
                  active
                    ? "font-semibold text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-md border border-card-border bg-card text-muted transition-colors hover:text-foreground lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-card-border bg-card px-4 py-3 lg:hidden">
          <form onSubmit={onSearch} className="mb-2.5 md:hidden">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="h-8 w-full rounded-full border border-transparent bg-tag-bg px-3 text-[13px] placeholder:text-muted-2 focus:border-card-border focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent/25"
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
                  className={`rounded-md px-2.5 py-1.5 text-[13px] ${
                    active
                      ? "bg-accent-soft font-medium text-accent"
                      : "text-muted hover:bg-tag-bg hover:text-foreground"
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
