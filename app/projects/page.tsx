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
    <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-6">
      <div className="border-b border-card-border pb-3">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
          <h1 className="text-xl font-semibold tracking-tight">Projects</h1>
          <span className="text-[13px] text-muted">
            {projects.length} repositories
          </span>
        </div>
        <p className="mt-1 max-w-2xl text-[13px] text-muted">
          Club open-source directory. Filter by language, tag, or status. Stars
          are placeholders until wired to GitHub.{" "}
          <Link href="/join" className="text-link hover:underline">
            Want to add one?
          </Link>
        </p>
      </div>
      <div className="mt-4">
        <Suspense fallback={<p className="text-sm text-muted">Loading…</p>}>
          <ProjectDirectory showSidebar />
        </Suspense>
      </div>
    </div>
  );
}
