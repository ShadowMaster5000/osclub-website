import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import ProjectDirectory from "@/components/ProjectDirectory";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse open-source projects from OSClub.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="border-b border-card-border pb-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Projects
          </h1>
          <span className="text-sm text-muted">
            {projects.length} repositories
          </span>
        </div>
        <p className="mt-1.5 max-w-2xl text-sm text-muted">
          Club open-source work as a dense directory — language, tags, and
          placeholder stars. Wire real GitHub stats later. Want to add one?{" "}
          <Link href="/join" className="text-accent hover:underline">
            Join and propose it
          </Link>
          .
        </p>
      </div>
      <div className="mt-4">
        <Suspense fallback={<p className="text-sm text-muted">Loading…</p>}>
          <ProjectDirectory />
        </Suspense>
      </div>
    </div>
  );
}
