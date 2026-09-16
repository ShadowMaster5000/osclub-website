import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-semibold tracking-tight">OSClub</p>
          <p className="mt-1 text-sm text-muted">
            Open Source Club — building in the open.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link href="/join" className="hover:text-foreground">
            Join
          </Link>
          <a
            href="https://osclub.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            osclub.org
          </a>
        </div>
      </div>
      <div className="border-t border-card-border/60 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} OSClub. Local scaffold — not yet deployed.
      </div>
    </footer>
  );
}
