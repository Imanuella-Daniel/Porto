import { useEffect, useState } from "react";
import type { Certification } from "../data/experience";

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!cert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const handleCopyId = () => {
    if (!cert.credentialId) return;
    navigator.clipboard.writeText(cert.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col w-full max-w-5xl max-h-[92vh] rounded-2xl sm:rounded-3xl border border-white/15 bg-[#070a14] shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden"
      >
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 px-5 sm:px-7 py-4 bg-white/[0.02]">
          <div className="min-w-0 pr-2">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-blue-300">
                {cert.issuer}
                {cert.partner ? ` · ${cert.partner}` : ""}
              </span>
              <span className="font-mono text-[11px] text-slate-400">
                {cert.date}
              </span>
              {cert.hours && (
                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                  ⏱ {cert.hours}
                </span>
              )}
              {cert.score && (
                <span className="rounded-full border border-amber-400/20 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] text-amber-300">
                  🎯 {cert.score}
                </span>
              )}
            </div>

            <h3
              id="cert-modal-title"
              className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-white truncate"
              title={cert.title}
            >
              {cert.title}
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-blue-400/30 bg-blue-500/15 px-3 py-1.5 text-xs font-medium text-blue-200 transition-all hover:bg-blue-500/25 hover:border-blue-400/50 no-underline"
                title="Buka halaman verifikasi sertifikat resmi"
              >
                <span>Verifikasi</span>
                <span className="font-mono text-[11px]">↗</span>
              </a>
            )}

            <a
              href={cert.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition-all hover:border-white/30 hover:bg-white/[0.08] hover:text-white no-underline"
              title="Buka dokumen di tab browser baru"
            >
              <span>Tab Baru</span>
              <span className="font-mono text-[11px]">↗</span>
            </a>

            <a
              href={cert.fileUrl}
              download
              className="hidden md:inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition-all hover:border-white/30 hover:bg-white/[0.08] hover:text-white no-underline"
              title="Unduh file sertifikat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
              </svg>
              <span>Unduh</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-slate-300 transition-all hover:bg-white/10 hover:text-white cursor-pointer ml-1"
              aria-label="Tutup pratinjau"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Viewer Body */}
        <div className="relative flex-1 overflow-auto bg-[#03050a] p-3 sm:p-5 flex items-center justify-center min-h-[50vh] sm:min-h-[62vh]">
          {cert.fileType === "image" ? (
            <div className="relative flex items-center justify-center w-full h-full max-h-[72vh]">
              <img
                src={cert.fileUrl}
                alt={cert.title}
                className="max-h-[70vh] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
              />
            </div>
          ) : (
            <div className="w-full h-full min-h-[55vh] sm:min-h-[68vh] flex flex-col">
              <iframe
                src={`${cert.fileUrl}#toolbar=1`}
                title={cert.title}
                className="w-full h-full min-h-[55vh] sm:min-h-[68vh] rounded-xl border border-white/10 bg-[#070a14]"
              />
              <p className="mt-2 text-center text-[11px] text-slate-400">
                Jika berkas PDF tidak tampil otomatis pada perangkat Anda, silakan klik{" "}
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Buka di Tab Baru
                </a>{" "}
                atau{" "}
                <a
                  href={cert.fileUrl}
                  download
                  className="text-blue-400 hover:underline"
                >
                  Unduh Dokumen
                </a>
                .
              </p>
            </div>
          )}
        </div>

        {/* Footer Info Area */}
        <div className="border-t border-white/10 px-5 sm:px-7 py-3.5 bg-white/[0.015] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <p className="text-slate-300 leading-relaxed max-w-2xl text-[12px] sm:text-[13px]">
              {cert.description}
            </p>
            {cert.skillsList && cert.skillsList.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
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

          <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0 border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0">
            {cert.credentialId && (
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[11px] text-slate-400">
                  ID: <span className="text-blue-300">{cert.credentialId}</span>
                </span>
                <button
                  type="button"
                  onClick={handleCopyId}
                  className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-slate-400 hover:text-white hover:border-white/20 cursor-pointer transition-all"
                  title="Salin Kredensial ID"
                >
                  {copied ? "Tersalin ✓" : "Salin"}
                </button>
              </div>
            )}
            {cert.validUntil && (
              <span className="font-mono text-[10px] text-slate-400">
                Berlaku hingga: {cert.validUntil}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

