import { motion } from 'framer-motion';
import { useExperience } from '../hooks/usePortfolio';

export default function ExperienceSection() {
  const experience = useExperience();

  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-text-muted text-xs tracking-[0.3em] uppercase mb-4">
            CAREER PATH
          </p>
          <h2 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Divider (except first) */}
              {index > 0 && (
                <div className="border-t border-border-subtle" />
              )}

              <div className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10">
                {/* Number */}
                <div className="flex items-start">
                  <span className="hero-heading text-4xl md:text-5xl font-bold opacity-40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div>
                  {/* Title Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
                        {exp.company}
                      </h3>
                      <p className="text-text-secondary text-sm mt-1">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="mono-pill">{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-2xl">
                    {exp.summary}
                  </p>

                  {/* Highlights (first 3) */}
                  <ul className="space-y-2">
                    {exp.highlights.slice(0, 3).map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-text-muted"
                      >
                        <span className="inline-block w-1 h-1 rounded-full bg-accent-purple mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
