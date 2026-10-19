import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router";
import { getProject } from "../data/projects";
import ProjectImage from "../components/ProjectImage";
import Reveal from "../components/Reveal";
import AtmosphericBg from "../components/AtmosphericBg";

const techLogoMap: Record<string, string> = {
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  "C / C++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  Laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Alpine.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg",
  "Chart.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg",
  Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  Blender:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg",
  Canva:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  Railway:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg",
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = getProject(id || "");
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [visible, setVisible] = useState(true);
  const fadeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);

  const changeScreenshot = (index: number) => {
    if (!project) return;
    const total = project.screenshots.length;
    const next = ((index % total) + total) % total;
    if (next === activeScreenshot) return;
    if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    setVisible(false);
    fadeTimeout.current = setTimeout(() => {
      setActiveScreenshot(next);
      setVisible(true);
    }, 200);
  };

  const goNext = () => {
    if (!project) return;
    changeScreenshot(activeScreenshot + 1);
  };

  const goPrev = () => {
    if (!project) return;
    changeScreenshot(activeScreenshot - 1);
  };

  useEffect(() => {
    if (!project || project.screenshots.length <= 1) return;
    autoPlayRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveScreenshot((prev) => {
          const next = (prev + 1) % project.screenshots.length;
          setVisible(false);
          setTimeout(() => setVisible(true), 200);
          return next;
        });
      }
    }, 4000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    return () => {
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
  }, []);

  if (!project) {
    return (
      <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070D] text-white flex items-center justify-center px-6">
        <AtmosphericBg />
        <div className="max-w-md text-center py-20">
          <span className="font-mono text-3xl text-blue-400">⬡</span>
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-white">
            Proyek Tidak Ditemukan
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Halaman proyek yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-blue-300 transition-all hover:bg-blue-500/20"
          >
            ← Kembali ke Proyek
          </Link>
        </div>
      </main>
    );
  }

  const current = project.screenshots[activeScreenshot];

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070D] text-white">
      <AtmosphericBg />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16 lg:px-12">
        <Reveal delay={0.08}>
          <Link
            to="/projects"
            className="group mb-10 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-400 transition-colors hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] transition-all duration-300 group-hover:-translate-x-1 group-hover:border-blue-400 group-hover:bg-blue-500/10 group-hover:text-blue-300">
              ←
            </span>
            <span>Kembali ke Semua Proyek</span>
          </Link>
        </Reveal>

        <Reveal delay={0.12}>
          <section className="mb-10 sm:mb-12">
            <div className="mb-3 flex items-center gap-2.5 font-mono text-xs text-slate-400">
              <span className="font-sans font-medium uppercase tracking-[0.2em] text-blue-400">
                {project.category}
              </span>
              <span className="text-white/20">·</span>
              <span>{project.year}</span>
            </div>

            <h1 className="max-w-4xl text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
              {project.title}
              <span className="text-blue-500">.</span>
            </h1>

            <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                {project.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-2.5 font-mono text-xs text-slate-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Repository</span>
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue-500 px-5 py-2.5 font-mono text-xs font-medium text-white shadow-[0_0_24px_rgba(59,130,246,0.2)] transition-all duration-300 hover:bg-blue-400 hover:shadow-[0_0_32px_rgba(59,130,246,0.35)] active:scale-[0.98]"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative">Live Preview</span>
                    <span className="relative font-mono text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </div>

            <div className="mt-8 border-b border-white/[0.05]" />
          </section>
        </Reveal>

        <Reveal delay={0.16}>
          <section className="mx-auto max-w-5xl mb-16">
            <div
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#060810] shadow-[0_24px_60px_rgba(0,0,0,0.8)] sm:rounded-3xl"
              onMouseEnter={() => {
                isPaused.current = true;
              }}
              onMouseLeave={() => {
                isPaused.current = false;
              }}
            >
              <div
                className={`flex h-[280px] sm:h-[480px] md:h-[540px] items-center justify-center p-2 sm:p-4 transition-all duration-300 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.99]"
                }`}
              >
                <ProjectImage
                  src={current.src}
                  alt={`${project.title} — ${current.label}`}
                  fit="contain"
                />
              </div>

              {project.screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      goPrev();
                      isPaused.current = true;
                    }}
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white active:scale-90"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m15 18-6-6 6-6"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      goNext();
                      isPaused.current = true;
                    }}
                    aria-label="Foto berikutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white active:scale-90"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 18 6-6-6-6"
                      />
                    </svg>
                  </button>
                </>
              )}

              <div className="flex items-center justify-between border-t border-white/10 bg-black/40 px-5 py-3.5 backdrop-blur-md">
                <span className="font-mono text-xs text-slate-300">
                  {current.label}
                </span>
                <span className="font-mono text-[11px] text-slate-500">
                  0{activeScreenshot + 1} / 0{project.screenshots.length}
                </span>
              </div>
            </div>

            {project.screenshots.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {project.screenshots.map((s, i) => {
                  const isCurrent = i === activeScreenshot;
                  return (
                    <button
                      key={s.src}
                      type="button"
                      onClick={() => changeScreenshot(i)}
                      className={`group relative h-16 w-24 sm:h-20 sm:w-32 shrink-0 overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? "border-blue-400 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] ring-2 ring-blue-500/30"
                          : "border-white/10 opacity-60 hover:border-white/30 hover:opacity-100"
                      }`}
                    >
                      <ProjectImage
                        src={s.src}
                        alt={`${project.title} — ${s.label}`}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </section>
        </Reveal>

        <Reveal delay={0.2}>
          <section className="mx-auto max-w-5xl mb-16 border-t border-white/10 pt-10">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                Teknologi yang Digunakan
              </p>
              <span className="font-mono text-xs text-slate-500">
                {project.tech.length} stack modules
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {project.tech.map((t) => (
                <div
                  key={t}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black/40 border border-white/10 transition-colors group-hover:border-blue-400/30">
                    {techLogoMap[t] ? (
                      <img
                        src={techLogoMap[t]}
                        alt={t}
                        className="h-4 w-4 object-contain"
                      />
                    ) : (
                      <span className="font-mono text-[10px] text-blue-400 font-semibold">
                        {t.slice(0, 2)}
                      </span>
                    )}
                  </div>
                  <span className="font-sans text-xs font-medium text-slate-200 group-hover:text-white truncate">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.24}>
          <section className="mx-auto max-w-5xl grid grid-cols-1 gap-12 border-t border-white/10 pt-12 md:grid-cols-[1fr_1fr]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-blue-400">○</span>
                <h2 className="m-0 text-xl font-medium tracking-tight text-white">
                  Gambaran Proyek
                </h2>
              </div>
              <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                {project.description}
              </p>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-blue-400">✳</span>
                <h2 className="m-0 text-xl font-medium tracking-tight text-white">
                  Fitur Utama &amp; Arsitektur
                </h2>
              </div>
              <ul className="space-y-4 p-0 list-none m-0">
                {project.features.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] p-3.5 text-sm leading-relaxed text-slate-300 transition-colors hover:border-blue-400/30 hover:bg-white/[0.025]"
                  >
                    <span className="font-mono text-xs text-blue-400 shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
