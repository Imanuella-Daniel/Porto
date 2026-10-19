import { skillCategories } from "../data/skills";
import Reveal from "../components/Reveal";
import AtmosphericBg from "../components/AtmosphericBg";

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
  "Draw.io":
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/Diagrams.net_Logo.svg",
  Blender:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg",
  Canva:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  Railway:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original.svg",
};

export default function Skills() {
  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070D] text-white">
      <AtmosphericBg />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <Reveal delay={0.12}>
          <section className="relative mb-16 sm:mb-20">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
              Kompetensi &amp; perangkat
            </p>

            <h1 className="max-w-5xl text-[clamp(3.5rem,10vw,8rem)] font-medium leading-[0.88] tracking-[-0.075em]">
              TECHNICAL
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text font-serif italic font-normal tracking-[-0.055em] text-transparent">
                PROFICIENCY
              </span>
              <span className="text-blue-500">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Pilihan bahasa pemrograman, framework antarmuka, basis data, dan
              perangkat rekayasa sistem yang saya kuasai dan aplikasikan dalam
              proyek riil.
            </p>
          </section>
        </Reveal>

        <div className="space-y-8 border-t border-white/10 pt-12">
          {skillCategories.map((cat, catIdx) => {
            const doubled = [...cat.skills, ...cat.skills];
            const reverse = catIdx % 2 === 1;

            return (
              <Reveal key={cat.category} delay={0.08 + catIdx * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] py-5 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30">
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
                        reverse ? "animate-marquee-reverse" : "animate-marquee"
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
      </div>
    </main>
  );
}
