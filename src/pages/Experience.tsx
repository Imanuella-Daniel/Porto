import { useState } from "react";
import {
  workExperience,
  organizationExperience,
  certifications,
  type TimelineItem,
} from "../data/experience";
import Reveal from "../components/Reveal";
import AtmosphericBg from "../components/AtmosphericBg";

type TabFilter = "all" | "work" | "organization" | "certifications";

const tabs: { id: TabFilter; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "work", label: "Pengalaman Kerja" },
  { id: "organization", label: "Organisasi" },
  { id: "certifications", label: "Sertifikasi" },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabFilter>("all");

  const allTimelineItems: (TimelineItem & { key: string })[] = [
    ...workExperience.map((item, i) => ({ ...item, key: `work-${i}` })),
    ...organizationExperience.map((item, i) => ({ ...item, key: `org-${i}` })),
  ];

  const displayedTimeline =
    activeTab === "all"
      ? allTimelineItems
      : activeTab === "certifications"
        ? []
        : allTimelineItems.filter((item) => item.type === activeTab);

  const showCertifications =
    activeTab === "all" || activeTab === "certifications";

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070D] text-white">
      <AtmosphericBg />
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <Reveal delay={0.1}>
          <section className="mb-8 sm:mb-10">
            <h1 className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
              Pengalaman
              <span className="text-blue-500">.</span>
            </h1>
            <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Rekam jejak kerja, organisasi, dan sertifikasi saya.
            </p>
          </section>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mb-14 flex flex-wrap items-center gap-2 border-t border-white/10 pt-8">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative overflow-hidden rounded-full border px-4 py-2.5 text-xs transition-all duration-300 cursor-pointer ${
                    active
                      ? "border-blue-400/70 bg-blue-500/15 text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.12)]"
                      : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-blue-400/40 hover:text-slate-200"
                  }`}
                >
                  {active && <span className="mr-2 text-blue-400">✳</span>}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {displayedTimeline.length > 0 && (
          <div className="relative mb-20">
            <div
              aria-hidden="true"
              className="absolute left-[15px] sm:left-[23px] top-6 bottom-10 w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent"
            />

            <div className="space-y-8 sm:space-y-10 pl-8 sm:pl-16">
              {displayedTimeline.map((item, index) => (
                <Reveal key={item.key} delay={Math.min(0.08 * index, 0.4)}>
                  <div className="relative group">
                    <div className="absolute -left-[27px] sm:-left-[53px] top-7 flex h-6 w-6 items-center justify-center">
                      <span className="h-3 w-3 rounded-full border-2 border-blue-400 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-transform duration-300 group-hover:scale-125" />
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.035] hover:shadow-[0_0_36px_rgba(59,130,246,0.1)]">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4 mb-5">
                        <div className="flex items-center gap-3">
                          <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-blue-300">
                            {item.type === "work"
                              ? "Pengalaman Kerja"
                              : "Organisasi"}
                          </span>
                          {item.location && (
                            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                              {item.location}
                            </span>
                          )}
                        </div>

                        <span className="font-mono text-xs text-slate-400">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-1 font-serif italic text-base text-blue-300/90 sm:text-lg">
                        {item.institution}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
                        {item.description}
                      </p>

                      {item.details.length > 0 && (
                        <ul className="mt-5 space-y-2.5 p-0 list-none">
                          {item.details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-3 text-xs leading-relaxed text-slate-300 sm:text-sm"
                            >
                              <span className="text-blue-400 mt-1 shrink-0">
                                ✳
                              </span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.tech && item.tech.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.08] pt-4">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {showCertifications && (
          <Reveal delay={0.24}>
            <section className="border-t border-white/10 pt-16">
              <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <h2 className="m-0 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                    Sertifikasi Profesional
                    <span className="text-blue-500">.</span>
                  </h2>
                </div>
                <span className="font-mono text-xs text-slate-500">
                  01 — 0{certifications.length}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.035] hover:shadow-[0_0_32px_rgba(59,130,246,0.12)]"
                  >
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-serif italic text-sm text-blue-300">
                        {cert.issuer}
                      </span>
                      <span className="font-mono text-xs text-slate-500">
                        {cert.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium tracking-tight text-white group-hover:text-blue-200 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-slate-400 font-mono">
                      Fokus: {cert.skills}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}
      </div>
    </main>
  );
}
