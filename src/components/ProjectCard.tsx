import { useState } from 'react';
import { useNavigate } from 'react-router';
import type { Project } from '../data/projects';
import MockScreenshot from './MockScreenshot';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#131720',
        border: `1px solid ${hovered ? 'rgba(45,212,191,0.4)' : '#232b3a'}`,
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(0,0,0,0.4)' : 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Screenshot area */}
      <div style={{ height: 220, overflow: 'hidden', borderBottom: '1px solid #232b3a', flexShrink: 0 }}>
        <div style={{ height: '100%', transform: hovered ? 'scale(1.02)' : 'scale(1)', transition: 'transform 0.3s' }}>
          <MockScreenshot type={project.screenshots[0].type} />
        </div>
      </div>

      {/* Card content */}
      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
          <div>
            <div style={{ color: '#5e6e86', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4, fontFamily: 'JetBrains Mono, monospace' }}>
              {project.category.split(' · ')[0]}
            </div>
            <h3 style={{ color: '#e1e8f4', fontSize: 17, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>
              {project.title}
            </h3>
          </div>
          <div style={{ color: '#5e6e86', fontSize: 11, flexShrink: 0, marginTop: 2 }}>{project.year}</div>
        </div>

        <p style={{ color: '#5e6e86', fontSize: 13, lineHeight: 1.55, margin: '0 0 14px 0', flex: 1 }}>
          {project.tagline}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
          {project.tech.slice(0, 4).map(t => (
            <span key={t} style={{
              fontSize: 10, padding: '2px 8px', borderRadius: 4,
              background: 'rgba(45,212,191,0.08)', color: '#2dd4bf',
              border: '1px solid rgba(45,212,191,0.15)',
              fontFamily: 'JetBrains Mono, monospace',
            }}>{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span style={{ fontSize: 10, color: '#5e6e86', padding: '2px 0' }}>+{project.tech.length - 4} more</span>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#2dd4bf', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
            View Case Study
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
          <div style={{ display: 'flex', gap: 8 }}>
            <a href={project.github} onClick={e => e.stopPropagation()} style={{ color: '#5e6e86', fontSize: 11, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 3 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            {project.demo && (
              <a href={project.demo} onClick={e => e.stopPropagation()} style={{ color: '#5e6e86', fontSize: 11, textDecoration: 'none' }}>Demo</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
