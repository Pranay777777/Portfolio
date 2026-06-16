import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group sticky top-24"
      style={{ zIndex: index + 1 }}
    >
      <div className="rounded-2xl border border-border-subtle bg-bg-card overflow-hidden transition-all duration-500 hover:border-border-muted hover:bg-bg-card-hover">
        {/* Image Area */}
        <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-bg">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-card to-bg relative">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>
              <h3 className="hero-heading text-3xl md:text-4xl font-bold opacity-30 relative z-10">
                {project.title}
              </h3>
            </div>
          )}

          {/* Number overlay */}
          <div className="absolute top-4 left-5">
            <span className="text-white/20 text-5xl font-bold">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Year pill */}
          <div className="absolute top-4 right-5">
            <span className="mono-pill bg-bg/60 backdrop-blur-sm border-white/10 text-white/70">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="text-accent-purple text-sm mt-1">
                {project.subtitle}
              </p>
            </div>
            {project.highlight && (
              <span className="px-3 py-1 text-xs rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                Featured
              </span>
            )}
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl">
            {project.description}
          </p>

          {/* Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full border border-border-subtle text-text-muted bg-bg/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer Row */}
          <div className="flex items-center justify-between">
            <p className="text-text-muted text-xs">{project.role}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-btn text-sm !px-5 !py-2"
              >
                LIVE PROJECT
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Spacer for sticky stacking */}
      <div className="h-6 md:h-8" />
    </motion.div>
  );
}
