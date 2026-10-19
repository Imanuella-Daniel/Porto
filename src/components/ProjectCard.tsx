import { useNavigate } from "react-router";
import type { Project } from "../data/projects";
import ProjectImage from "./ProjectImage";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const screenshot = project.screenshots?.[0];

  return (
    <article
      onClick={() => navigate(`/projects/${project.id}`)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigate(`/projects/${project.id}`);
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`Lihat proyek ${project.title}`}
      className="group relative flex h-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-sm transition-all duration-500 hover:border-blue-400/40 hover:bg-white/[0.035] hover:shadow-[0_0_40px_rgba(59,130,246,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    >
      {/* Thumbnail: consistent aspect ratio */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-white/10 bg-[#060810]">
        {screenshot ? (
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <ProjectImage
              src={screenshot.src}
              alt={`${project.title} — ${screenshot.label}`}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18),transparent_70%)]">
            <span className="font-serif text-2xl italic text-white/40">
              {project.title}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/90 via-black/15 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="min-w-0 truncate text-[11px] font-medium uppercase tracking-[0.18em] text-blue-400">
            {project.category.split(" · ")[0]}
          </span>

          <span className="shrink-0 font-mono text-xs text-slate-500">
            {project.year}
          </span>
        </div>

        <p className="mt-2 line-clamp-3 text-sm leading-5 text-slate-400">
          {project.tagline}
        </p>

        {/* Tech tags */}
        <div className="mt-auto pt-3 flex flex-wrap content-start gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="h-fit rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 font-mono text-[11px] text-slate-300 transition-colors group-hover:border-blue-400/25 group-hover:text-slate-200"
            >
              {tech}
            </span>
          ))}

          {project.tech.length > 4 && (
            <span className="self-start py-1 font-mono text-[11px] text-slate-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
