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
    <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
      <div className="border-b border-card-border pb-2.5">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
          <h1 className="text-lg font-semibold tracking-tight">Projects</h1>
          <span className="text-[13px] text-muted">
            {projects.length} repositories
          </span>
        </div>
        <p className="mt-0.5 max-w-2xl text-[13px] text-muted">
          Club open-source directory. Filter by language, tag, or status. Stars
          are placeholders until wired to GitHub.{" "}
          <Link href="/join" className="text-accent hover:underline">
            Want to add one?
          </Link>
        </p>
      </div>
      <div className="mt-3">
        <Suspense fallback={<p className="text-sm text-muted">Loading…</p>}>
          <ProjectDirectory showSidebar />
        </Suspense>
      </div>
    </div>
  );
}
