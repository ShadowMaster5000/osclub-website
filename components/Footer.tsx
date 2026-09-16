import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <Logo size={18} withWordmark={false} />
          <p className="text-[11px] text-muted">
            <span className="font-semibold text-foreground">OSClub</span>
            {" · "}
            Open Source Club ·{" "}
            <a
              href="https://osclub.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline"
            >
              osclub.org
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-3.5 gap-y-1 text-[11px] text-muted">
          <Link href="/projects" className="transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link href="/people" className="transition-colors hover:text-foreground">
            People
          </Link>
          <Link href="/events" className="transition-colors hover:text-foreground">
            Events
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/join" className="transition-colors hover:text-foreground">
            Join
          </Link>
        </div>
      </div>
    </footer>
  );
}
