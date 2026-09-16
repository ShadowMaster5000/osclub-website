import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/join", label: "Join" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft ring-1 ring-accent/30">
            <span className="font-mono text-sm font-bold text-accent">OS</span>
          </span>
          <span className="text-lg font-semibold tracking-tight">
            OSClub
            <span className="ml-1.5 hidden text-sm font-normal text-muted sm:inline">
              Open Source Club
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground sm:px-3"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://osclub.org"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-background transition hover:brightness-110 sm:inline-block"
          >
            osclub.org
          </a>
        </nav>
      </div>
    </header>
  );
}
