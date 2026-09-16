import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded border border-card-border bg-card font-mono text-[9px] font-bold text-accent">
            OS
          </span>
          <p className="text-xs text-muted">
            <span className="font-semibold text-foreground">OSClub</span>
            {" · "}
            Open Source Club ·{" "}
            <a
              href="https://osclub.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              osclub.org
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
          <Link href="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link href="/people" className="hover:text-foreground">
            People
          </Link>
          <Link href="/events" className="hover:text-foreground">
            Events
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/join" className="hover:text-foreground">
            Join
          </Link>
        </div>
      </div>
    </footer>
  );
}
