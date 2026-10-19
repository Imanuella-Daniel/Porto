import { Link } from "react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { getFeaturedProjects, type Project } from "../data/projects";
import Reveal from "../components/Reveal";
import AtmosphericBg from "../components/AtmosphericBg";

function ProjectHoverSlider({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const shots = project.screenshots ?? [];

  const stopCycling = useCallback((reset = true) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (reset) {
      setActiveIndex(0);
    }
  }, []);

  const startCycling = useCallback(() => {
    if (shots.length <= 1 || intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % shots.length);
    }, 2200);
  }, [shots.length]);

  useEffect(() => {
    return () => stopCycling(false);
  }, [stopCycling]);

  return (
    <Link
      to={`/projects/${project.id}`}
      aria-label={`Lihat proyek ${project.title}`}
      className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d17]/80 no-underline outline-none transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#05070D]"
      onMouseEnter={startCycling}
      onMouseLeave={() => stopCycling()}
      onFocus={startCycling}
      onBlur={() => stopCycling()}
    >
      {shots.length > 0 ? (
        shots.map((shot, index) => (
          <img
            key={shot.src}
            src={shot.src}
            alt={index === 0 ? project.title : shot.label}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.04]"
            style={{
              opacity: index === activeIndex ? 1 : 0,
            }}
          />
        ))
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_65%)]">
          <span className="font-serif text-3xl italic text-white/40">
            {project.title}
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#05070D] via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.12),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 flex-col gap-3 p-6 opacity-0 transition-all duration-500 sm:p-7 group-hover:translate-y-0 group-hover:opacity-100">
        <div>
          <h3 className="font-sans text-xl font-medium tracking-tight text-white sm:text-2xl">
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070D] text-white">
      <AtmosphericBg />

      <section className="relative mx-auto flex max-w-7xl min-h-[calc(100svh-80px)] flex-col items-center justify-center px-5 py-20 text-center sm:px-8 sm:py-28 lg:px-12">
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
          <Reveal delay={0.1}>
            <h1 className="m-0 select-none text-[clamp(3.5rem,10.5vw,8.75rem)] font-medium leading-[0.88] tracking-[-0.075em] text-white">
              IMANUELLA
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text font-serif italic font-normal tracking-[-0.055em] text-transparent">
                DANIEL
              </span>
              <span className="text-blue-500">.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Software Developer &amp; Information System Specialist. Membangun
              pengalaman digital yang{" "}
              <span className="text-white">fungsional, terstruktur,</span> dan
              dirancang dengan presisi tujuan.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 font-mono text-xs text-slate-500">
              <span className="text-slate-300">Software Developer</span>
              <span className="text-blue-400">/</span>
              <span>Informatics Graduate</span>
              <span className="text-blue-400">/</span>
              <span>Yogyakarta, Indonesia</span>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/projects"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-blue-500 px-8 py-4 text-sm font-medium text-white shadow-[0_0_32px_rgba(59,130,246,0.20)] transition-all duration-300 hover:bg-blue-400 hover:shadow-[0_0_42px_rgba(59,130,246,0.35)] active:scale-[0.98] sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Lihat Proyek</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white sm:w-auto"
              >
                <span>Hubungi Saya</span>
                <span className="font-mono text-xs text-blue-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </Link>
            </div>

            <div className="mt-16 flex flex-col items-center gap-3 text-slate-500 sm:mt-20">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
                Scroll to explore
              </span>
              <div className="relative h-10 w-px overflow-hidden bg-white/10">
                <div className="absolute inset-x-0 top-0 h-1/2 animate-scroll-indicator bg-gradient-to-b from-blue-400 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="featured-projects"
        className="relative mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 sm:pb-32 lg:px-12 border-t border-white/10"
      >
        <Reveal delay={0.1}>
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
                Selected Work
              </p>

              <h2 className="m-0 text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                PROYEK
              </h2>
            </div>

            <Link
              to="/projects"
              className="group inline-flex w-fit shrink-0 items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:text-blue-300"
            >
              Semua Proyek
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:-rotate-45 group-hover:border-blue-400 group-hover:bg-blue-500/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </span>
            </Link>
          </div>
        </Reveal>

        {featured.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featured.map((project, index) => (
              <Reveal key={project.id} delay={Math.min(index * 0.12, 0.36)}>
                <ProjectHoverSlider project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/10 px-6 py-16 text-center">
            <Link
              to="/projects"
              className="mt-4 inline-flex text-sm text-blue-400 no-underline transition-colors hover:text-blue-300"
            >
              Jelajahi halaman proyek →
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
