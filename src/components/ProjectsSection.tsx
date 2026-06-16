import { motion } from 'framer-motion';
import { useProjects } from '../hooks/usePortfolio';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects = useProjects();

  // Sort: highlighted projects first, then by year descending
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.highlight && !b.highlight) return -1;
    if (!a.highlight && b.highlight) return 1;
    return b.year.localeCompare(a.year);
  });

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-text-muted text-xs tracking-[0.3em] uppercase mb-4">
            SELECTED WORK
          </p>
          <h2 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
            Projects
          </h2>
        </motion.div>

        <div>
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
