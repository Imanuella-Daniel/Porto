import { useState, type FormEvent } from "react";
import Reveal from "../components/Reveal";
import AtmosphericBg from "../components/AtmosphericBg";

const contactLinks = [
  {
    label: "Email",
    detail: "Let's talk",
    href: "mailto:imanuelladaniel@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
        <path d="m3 7 8 6a1.8 1.8 0 0 0 2 0l8-6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    detail: "Let's connect",
    href: "https://linkedin.com/in/imanuella-daniel",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.1A4.2 4.2 0 0 1 16.9 8c4 0 4.8 2.5 4.8 5.8V21h-3.8v-6.4c0-1.5 0-3.5-2.2-3.5s-2.6 1.7-2.6 3.4V21H9.4V9Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    detail: "Explore my work",
    href: "https://github.com/Imanuella-Daniel",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.68.08-.68 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.72.38-1.2.7-1.48-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.43-2.22 1.13-3-.11-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.15 3.05-1.15.6 1.54.22 2.68.11 2.96.71.78 1.13 1.78 1.13 3 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.03.75 2.08v3.65c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    detail: "Quick chat",
    href: "https://wa.me/6285254606988",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.3A8.4 8.4 0 1 1 21 11.5Z" />
        <path d="M9 9.5c.7 2 1.8 3.1 3.8 4l1.2-1.2 2 .9-.2 1.8c-3.7.9-8.8-4.2-7.9-7.9l1.8-.2.9 2L9 9.5Z" />
      </svg>
    ),
  },
];

const projectTypes = ["Web Design", "Development", "UI/UX Design", "Other"];

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const inputClass =
  "w-full rounded-none border-0 border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-[#3B82F6] focus:shadow-[0_1px_0_0_#3B82F6]";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [projectType, setProjectType] = useState("Web Design");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/imanuelladaniel@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            projectType,
            _subject: `Portfolio Inquiry — ${projectType}`,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Pengiriman pesan gagal. Silakan coba kembali.");
      }

      setSent(true);
    } catch {
      setError(
        "Pesan belum berhasil dikirim. Periksa koneksi internet dan coba lagi.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070D] text-white">
      <AtmosphericBg />

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="grid grid-cols-1 gap-14 pt-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:pt-12">
          <Reveal delay={0.16}>
            <aside className="flex flex-col">
              <div className="mb-7">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Find me on
                </p>
              </div>

              <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {contactLinks.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      item.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center gap-4 py-5 no-underline transition-all duration-300 hover:px-2"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-slate-400 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/10 group-hover:text-blue-300">
                      <span className="h-5 w-5">{item.icon}</span>
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-xs text-slate-500">
                        {item.detail}
                      </span>
                    </span>

                    <span className="mr-1 font-mono text-xs text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400">
                      ↗
                    </span>
                    <span className="sr-only">{`Open ${item.label}`}</span>
                    <span className="sr-only">{index + 1}</span>
                  </a>
                ))}
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.22}>
            <section id="contact-form" className="scroll-mt-10">
              {sent ? (
                <div
                  role="status"
                  className="flex min-h-[440px] flex-col items-start justify-center py-12"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-blue-300 shadow-[0_0_40px_rgba(59,130,246,0.12)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-7 w-7"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </div>

                  <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                    Message delivered
                  </p>
                  <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
                    THANK YOU<span className="text-blue-500">.</span>
                  </h2>
                  <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                    Your message has been sent. I'll get back to you within 1–2
                    business days.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setForm(initialForm);
                      setProjectType("Web Design");
                      setError("");
                    }}
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-blue-400/30 px-6 py-3 text-xs font-medium text-blue-300 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10"
                  >
                    Send another message <span>↗</span>
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-9 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                        Tell me about it.
                      </h2>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-6">
                      <div className="group">
                        <label
                          htmlFor="contact-name"
                          className="mb-1 block text-xs text-slate-400 transition-colors group-focus-within:text-blue-300"
                        >
                          Your name <span className="text-blue-400">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          required
                          autoComplete="name"
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, name: e.target.value }))
                          }
                          className={inputClass}
                        />
                      </div>

                      <div className="group">
                        <label
                          htmlFor="contact-email"
                          className="mb-1 block text-xs text-slate-400 transition-colors group-focus-within:text-blue-300"
                        >
                          Email address <span className="text-blue-400">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          required
                          autoComplete="email"
                          type="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, email: e.target.value }))
                          }
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="group">
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <label
                          htmlFor="contact-message"
                          className="text-xs text-slate-400 transition-colors group-focus-within:text-blue-300"
                        >
                          Message <span className="text-blue-400">*</span>
                        </label>
                        <span className="font-mono text-[10px] text-slate-600">
                          {form.message.length} / 1000
                        </span>
                      </div>

                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        maxLength={1000}
                        rows={4}
                        placeholder="Tell me about your idea, goals, timeline, or anything else I should know..."
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        className={`${inputClass} min-h-[120px] resize-y leading-7`}
                      />
                    </div>

                    {error && (
                      <p
                        role="alert"
                        className="rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm leading-6 text-red-300"
                      >
                        {error}
                      </p>
                    )}

                    <div className="flex flex-col items-start gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group relative inline-flex w-full items-center justify-center gap-4 overflow-hidden rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                      >
                        <span className="relative">
                          {submitting ? "Sending..." : "Send message"}
                        </span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </section>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
