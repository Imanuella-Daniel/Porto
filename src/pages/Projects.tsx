import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import AtmosphericBg from "../components/AtmosphericBg";

const filters = [
  "Semua",
  "Web Development",
  "Mobile Development",
  "Information System",
];

export default function Projects() {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua"
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(active.toLowerCase()),
        );

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070D] text-white">
      <AtmosphericBg />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16 lg:px-12">
        <Reveal delay={0.1}>
          <section className="mb-8 sm:mb-10">
            <h1 className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
              Proyek
              <span className="text-blue-500">.</span>
            </h1>

            <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Kumpulan proyek yang saya kembangkan.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.05] pt-6">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((f) => {
                const isSelected = active === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActive(f)}
                    className={`group relative overflow-hidden rounded-full border px-4 py-2.5 text-xs transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "border-blue-400/70 bg-blue-500/15 text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.12)]"
                        : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-blue-400/40 hover:text-slate-200"
                    }`}
                  >
                    {isSelected && (
                      <span className="mr-2 text-blue-400">✳</span>
                    )}
                    {f}
                  </button>
                );
              })}
            </div>

            <span className="font-mono text-xs text-slate-500">
              Menampilkan {filtered.length} dari {projects.length} proyek
            </span>
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <Reveal
                key={project.id}
                delay={Math.min(0.08 * index, 0.4)}
                className="h-full"
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.2}>
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 py-16 text-center">
              <span className="font-mono text-2xl text-blue-400 mb-3">⬡</span>
              <p className="text-sm text-slate-400">
                Belum ada proyek dalam kategori ini.
              </p>
              <button
                type="button"
                onClick={() => setActive("Semua")}
                className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-blue-400 hover:text-blue-300 cursor-pointer"
              >
                Reset Filter ↗
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </main>
  );
}
