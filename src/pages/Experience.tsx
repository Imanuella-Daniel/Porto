import { useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import {
  workExperience,
  organizationExperience,
  certifications,
  type TimelineItem,
  type Certification,
} from "../data/experience";
import Reveal from "../components/Reveal";
import AtmosphericBg from "../components/AtmosphericBg";
import CertificateModal from "../components/CertificateModal";

type TabFilter = "all" | "work" | "organization" | "certifications";

const tabs: { id: TabFilter; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "work", label: "Pengalaman Kerja" },
  { id: "organization", label: "Organisasi" },
  { id: "certifications", label: "Sertifikasi" },
];

const categoryFilters = [
  { id: "all", label: "Semua" },
  { id: "Web & Backend", label: "Web & Backend" },
  { id: "Pemrograman", label: "Pemrograman" },
  { id: "Data & Basis Data", label: "Data & SQL" },
  { id: "DevOps & Cloud", label: "DevOps & Cloud" },
  { id: "Bahasa Inggris", label: "Bahasa Inggris" },
  { id: "Prestasi & Akademik", label: "Prestasi & Akademik" },
];

export default function Experience() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlTab = searchParams.get("tab") as TabFilter | null;

  const [activeTab, setActiveTab] = useState<TabFilter>(
    urlTab && ["all", "work", "organization", "certifications"].includes(urlTab)
      ? urlTab
      : "all"
  );

  const [certCategory, setCertCategory] = useState<string>("all");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleTabChange = (tabId: TabFilter) => {
    setActiveTab(tabId);
    if (tabId === "all") {
      searchParams.delete("tab");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ tab: tabId }, { replace: true });
    }
  };

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

  // Sertifikasi Profesional HANYA tampil jika klik tab sertifikasi
  const showCertifications = activeTab === "certifications";

  const filteredCertifications = useMemo(() => {
    if (certCategory === "all") return certifications;
    return certifications.filter((cert) => cert.category === certCategory);
  }, [certCategory]);

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070D] text-white">
      <AtmosphericBg />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        {/* Page Header (hanya muncul jika BUKAN tab Sertifikasi) */}
        {activeTab !== "certifications" && (
          <Reveal delay={0.1}>
            <section className="mb-8 sm:mb-10">
              <h1 className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
                Pengalaman
                <span className="text-blue-500">.</span>
              </h1>
              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                Rekam jejak pengalaman kerja dan peran organisasi saya.
              </p>
            </section>
          </Reveal>
        )}

        {/* Main Tabs (tanpa angka/jumlah) */}
        <Reveal delay={0.16}>
          <div
            className={`flex flex-wrap items-center gap-2 ${
              activeTab !== "certifications"
                ? "mb-14 border-t border-white/10 pt-8"
                : "mb-10 pt-1 sm:pt-2"
            }`}
          >
            {tabs.map((tab) => {
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`group relative overflow-hidden rounded-full border px-4 py-2.5 text-xs transition-all duration-300 cursor-pointer ${
                    active
                      ? "border-blue-400/70 bg-blue-500/15 text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.12)]"
                      : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-blue-400/40 hover:text-slate-200"
                  }`}
                >
                  {active && <span className="mr-2 text-blue-400">✳</span>}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Work & Organization Timeline */}
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

        {/* Certifications Section (Hanya tampil jika activeTab === "certifications") */}
        {showCertifications && (
          <Reveal delay={0.2}>
            <section>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
                    Lisensi &amp; Sertifikat Resmi
                  </span>
                </div>
                <h1 className="m-0 text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
                  Sertifikasi Profesional
                  <span className="text-blue-500">.</span>
                </h1>
                <p className="mt-2.5 text-sm text-slate-400 max-w-2xl sm:text-base">
                  Kumpulan 12 sertifikat kompetensi terverifikasi dari Dicoding Indonesia, AWS, Google Developers, British Council, dan Universitas Atma Jaya Yogyakarta.
                </p>
              </div>

              {/* Sub-filters Category Pills (tanpa angka/jumlah) */}
              <div className="mb-10 flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
                {categoryFilters.map((cat) => {
                  const active = certCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCertCategory(cat.id)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-mono transition-all duration-200 cursor-pointer ${
                        active
                          ? "bg-blue-500/20 text-blue-200 border border-blue-400/60 shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                          : "bg-white/[0.03] text-slate-400 border border-white/10 hover:text-slate-200 hover:border-white/20"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Certificates Cards Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {filteredCertifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.038] hover:shadow-[0_0_36px_rgba(59,130,246,0.12)]"
                  >
                    <div>
                      {/* Header Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-blue-300">
                            {cert.issuer}
                          </span>
                          {cert.partner && (
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-slate-300">
                              {cert.partner}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          {cert.hours && (
                            <span className="font-mono text-[11px] text-emerald-400">
                              ⏱ {cert.hours}
                            </span>
                          )}
                          {cert.score && (
                            <span className="font-mono text-[11px] text-amber-400">
                              🎯 {cert.score}
                            </span>
                          )}
                          <span className="font-mono text-xs text-slate-400">
                            {cert.year}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-medium tracking-tight text-white group-hover:text-blue-200 transition-colors">
                        {cert.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-xs leading-relaxed text-slate-400">
                        {cert.description}
                      </p>

                      {/* Skills Badges */}
                      {cert.skillsList && cert.skillsList.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {cert.skillsList.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer Actions */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedCert(cert)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-blue-400/40 bg-blue-500/15 px-3.5 py-1.5 text-xs font-medium text-blue-200 transition-all hover:bg-blue-500/25 hover:border-blue-400/60 cursor-pointer shadow-[0_0_16px_rgba(59,130,246,0.15)]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-3.5 h-3.5"
                          >
                            <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                            <path
                              fillRule="evenodd"
                              d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Lihat Sertifikat</span>
                        </button>

                        <a
                          href={cert.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-slate-400 hover:border-white/20 hover:text-slate-200 no-underline transition-all"
                          title="Buka berkas di tab baru"
                        >
                          <span className="text-[11px] font-mono">Buka Tab</span>
                          <span className="font-mono text-[10px]">↗</span>
                        </a>
                      </div>

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1 no-underline"
                          title="Verifikasi kredensial sertifikat online"
                        >
                          <span>Verifikasi</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}
      </div>

      {/* Interactive Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </main>
  );
}
