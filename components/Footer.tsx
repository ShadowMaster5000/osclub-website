import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-sm border border-card-border bg-card font-mono text-[8px] font-bold text-accent">
            OS
          </span>
          <p className="text-[11px] text-muted">
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
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted">
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
