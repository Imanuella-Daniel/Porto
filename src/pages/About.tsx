import { Link } from "react-router";
import Reveal from "../components/Reveal";
import AtmosphericBg from "../components/AtmosphericBg";
import { skillCategories } from "../data/skills";
import profilePhoto from "../assets/DSC07436.JPG";
import fullBodyPhoto from "../assets/Foto Seluruh Badan Depan_Imanuella Daniel.jpg";
import cvPdf from "../assets/CV_Imanuella Daniel.pdf";
import { useState, useEffect } from "react";

const logoMap: Record<string, string> = {
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
const photos = [
  {
    id: "formal",
    src: fullBodyPhoto,
    objectClass: "object-cover object-top scale-[1.12] origin-top",
    thumbClass: "object-cover object-top",
    cardBg: "bg-[#0d111e]",
    lightboxClass:
      "max-h-[88vh] max-w-full rounded-2xl border border-white/15 object-contain bg-white/5 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.7)]",
  },
  {
    id: "profile",
    src: profilePhoto,
    objectClass: "object-cover object-[center_20%]",
    thumbClass: "object-cover object-[center_20%]",
    cardBg: "bg-transparent",
    lightboxClass:
      "max-h-[85vh] max-w-full rounded-2xl border border-white/15 object-contain shadow-[0_20px_80px_rgba(0,0,0,0.7)]",
  },
];

export default function About() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  useEffect(() => {
    if (!isPhotoOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPhotoOpen(false);
      if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) =>
          prev > 0 ? prev - 1 : photos.length - 1,
        );
      }
      if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) =>
          prev < photos.length - 1 ? prev + 1 : 0,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPhotoOpen]);

  const currentPhoto = photos[activePhotoIndex];

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070D] text-white">
      <AtmosphericBg />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 pt-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal delay={0.16}>
            <aside className="lg:sticky lg:top-28 space-y-6">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-white/[0.02] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                {/* Main Photo Frame - Half-body focus & smooth dark mode blend */}
                <div
                  className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 ${currentPhoto.cardBg} shadow-inner`}
                >
                  <button
                    type="button"
                    onClick={() => setIsPhotoOpen(true)}
                    className="group relative h-full w-full cursor-zoom-in overflow-hidden"
                    aria-label="Perbesar foto profil"
                  >
                    <img
                      src={currentPhoto.src}
                      alt="Imanuella Daniel"
                      className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.04] ${currentPhoto.objectClass}`}
                    />
                    {/* Soft gradient overlay to blend bright background naturally with dark mode */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/40 via-transparent to-black/10 pointer-events-none" />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                  </button>
                </div>
              </div>

              {/* Lightbox Modal */}
              {isPhotoOpen && (
                <div
                  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-300"
                  onClick={() => setIsPhotoOpen(false)}
                >
                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setIsPhotoOpen(false)}
                    className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20 cursor-pointer"
                    aria-label="Tutup foto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m18 6-12 12M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePhotoIndex((prev) =>
                        prev > 0 ? prev - 1 : photos.length - 1,
                      );
                    }}
                    className="absolute left-4 sm:left-8 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white text-xl sm:text-2xl transition-all hover:bg-white/20 cursor-pointer"
                    aria-label="Foto sebelumnya"
                  >
                    ‹
                  </button>

                  {/* Main Image */}
                  <img
                    src={currentPhoto.src}
                    alt="Imanuella Daniel"
                    onClick={(e) => e.stopPropagation()}
                    className={`${currentPhoto.lightboxClass} animate-in zoom-in-95 duration-300`}
                  />

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePhotoIndex((prev) =>
                        prev < photos.length - 1 ? prev + 1 : 0,
                      );
                    }}
                    className="absolute right-4 sm:right-8 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white text-xl sm:text-2xl transition-all hover:bg-white/20 cursor-pointer"
                    aria-label="Foto selanjutnya"
                  >
                    ›
                  </button>
                </div>
              )}

              <div className="mt-6 mx-auto max-w-sm flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-blue-400/20 bg-blue-500/[0.10] px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-slate-200 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/[0.16] hover:text-white active:scale-[0.98]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-4 w-4 text-blue-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-9a2.25 2.25 0 0 0-2.25-2.25h-10A2.25 2.25 0 0 0 5 5.25v13.5A2.25 2.25 0 0 0 7.25 21h7.5m4.75-6.75v6.75m0 0 3-3m-3 3-3-3M8 7.5h7m-7 3h5"
                    />
                  </svg>
                  <span>Unduh CV</span>
                </a>

                <Link
                  to="/contact"
                  className="group inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/15 bg-white/[0.03] px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-slate-300 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white active:scale-[0.98]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.69 5.52a2.25 2.25 0 0 1-2.42 0L2.25 6.75"
                    />
                  </svg>
                  <span>Hubungi Saya</span>
                </Link>
              </div>

              <div className="mx-auto max-w-sm pt-2">
                <Link
                  to="/experience?tab=certifications"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-slate-400 transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.04] hover:text-white no-underline"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-blue-400">📜</span>
                    <span>12 Sertifikasi Profesional &amp; Prestasi</span>
                  </span>
                  <span className="font-mono text-[11px] text-blue-400 transition-transform group-hover:translate-x-0.5">
                    Lihat ↗
                  </span>
                </Link>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                  Halo, saya Imanuella Daniel.
                </h2>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-8">
                <p>
                  Saya merupakan lulusan S1 Informatika dari Universitas Atma
                  Jaya Yogyakarta dengan fokus pada{" "}
                  <strong className="font-semibold text-white">
                    pengembangan sistem perangkat lunak
                  </strong>
                  ,{" "}
                  <strong className="font-semibold text-white">
                    basis data relasional
                  </strong>
                  , dan{" "}
                  <strong className="font-semibold text-white">
                    integrasi sistem <span className="italic">enterprise</span>
                  </strong>{" "}
                  untuk otomasi proses bisnis.
                </p>

                <p>
                  Selama bekerja sebagai{" "}
                  <strong className="font-semibold text-white">
                    IT System Support Plantation di Great Giant Foods
                  </strong>
                  , saya merancang serta mengimplementasikan modul operasional
                  perkebunan yang{" "}
                  <strong className="font-semibold text-white">
                    terintegrasi SAP
                  </strong>{" "}
                  dan membangun aplikasi monitoring rapat internal bernama
                  <strong className="font-semibold text-white">
                    {" "}
                    MeeTrack
                  </strong>
                  . Dalam pengembangannya, saya menguasai{" "}
                  <strong className="font-semibold text-white">
                    React, TypeScript, dan Tailwind CSS
                  </strong>{" "}
                  untuk <span className="italic">front-end</span>;{" "}
                  <strong className="font-semibold text-white">
                    PHP (Laravel) dan Java
                  </strong>{" "}
                  untuk <span className="italic">back-end</span> serta RESTful
                  API;{" "}
                  <strong className="font-semibold text-white">Flutter</strong>{" "}
                  untuk <span className="italic">mobile</span>; serta{" "}
                  <strong className="font-semibold text-white">
                    MySQL, PostgreSQL, dan SQL Server
                  </strong>
                  .
                </p>

                <p>
                  Selain kemampuan teknis, peran saya sebagai{" "}
                  <strong className="font-semibold text-white">
                    Asisten Dosen OOP Java
                  </strong>{" "}
                  dan{" "}
                  <strong className="font-semibold text-white">
                    Student Staff Perpustakaan
                  </strong>{" "}
                  turut membentuk kemampuan komunikasi, ketelitian, serta
                  kedisiplinan kerja dalam tim.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <section className="mt-24 border-t border-white/10 pt-16">
          <Reveal delay={0.16}>
            <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-400 mb-2">
                  Kompetensi &amp; Perangkat
                </p>
                <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                  Keahlian
                </h2>
              </div>

              <span className="font-mono text-xs text-slate-500">
                {skillCategories.length} Kategori Keahlian
              </span>
            </div>
          </Reveal>

          <div className="space-y-8">
            {skillCategories.map((cat, catIdx) => {
              const doubled = [...cat.skills, ...cat.skills];
              const reverse = catIdx % 2 === 1;

              return (
                <Reveal key={cat.category} delay={0.08 + catIdx * 0.08}>
                  <div className="py-5">
                    <div className="mb-4 flex items-center justify-between px-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm text-blue-400">
                          {cat.icon}
                        </span>
                        <h3 className="font-sans text-base font-medium text-white m-0">
                          {cat.category}
                        </h3>
                      </div>
                      <span className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-0.5 font-mono text-[10px] text-blue-300">
                        {cat.skills.length} skills
                      </span>
                    </div>
                    <div
                      style={{
                        maskImage:
                          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                        WebkitMaskImage:
                          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                      }}
                    >
                      <div
                        className={
                          reverse
                            ? "animate-marquee-reverse"
                            : "animate-marquee"
                        }
                        style={{ gap: 12, paddingLeft: 12, paddingRight: 12 }}
                      >
                        {doubled.map((skill, idx) => (
                          <div
                            key={`${skill.name}-${idx}`}
                            className="group flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-[#070913] px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-500/10 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] cursor-default min-w-[150px]"
                          >
                            {logoMap[skill.name] ? (
                              <img
                                src={logoMap[skill.name]}
                                alt={skill.name}
                                className={`h-6 w-6 object-contain shrink-0 ${
                                  skill.name === "GitHub" ? "invert" : ""
                                }`}
                              />
                            ) : (
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-blue-400/30 bg-blue-500/15 font-mono text-[11px] font-semibold text-blue-300">
                                {skill.name.charAt(0)}
                              </div>
                            )}

                            <div className="min-w-0">
                              <span className="block truncate font-sans text-xs font-medium text-slate-200 group-hover:text-white">
                                {skill.name}
                              </span>
                              {skill.tag && (
                                <span className="block truncate font-mono text-[9px] text-slate-500">
                                  {skill.tag}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
