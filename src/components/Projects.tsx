"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocale } from "@/lib/locale-context";
import { projects, Project } from "@/content/site";
import Reveal from "./motion/Reveal";
import Gallery from "./Gallery";

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-line bg-paper-dim/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-soft hover:shadow-lg hover:shadow-ink/5 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-2xl text-ink">{project.client}</h3>
        {project.location && (
          <span className="font-mono text-xs text-muted">{project.location}</span>
        )}
      </div>

      <p className="mt-2 text-ink-soft">{project.summary}</p>

      {project.note && (
        <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-amber">
          {project.note}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-6 font-mono text-xs uppercase tracking-wide text-teal transition-colors hover:text-ink"
      >
        {open ? "− close" : "+ view case study"}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-4 border-t border-line pt-6 text-sm leading-relaxed text-ink-soft">
              <p>{project.problem}</p>
              <p>{project.solution}</p>
              <p className="flex flex-wrap gap-2 font-mono text-xs text-muted">
                {project.stack.join(" · ")}
              </p>
              <p className="font-medium text-ink">{project.result}</p>
              {project.images && project.images.length > 0 && (
                <Gallery images={project.images} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  const { locale } = useLocale();
  const t = projects[locale];

  return (
    <section id="projects" className="border-t border-line px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">{t.heading}</h2>
          <p className="mt-3 max-w-xl text-ink-soft">{t.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.items.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
