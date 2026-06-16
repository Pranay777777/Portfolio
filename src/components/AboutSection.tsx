import { motion } from 'framer-motion';
import { useProfile } from '../hooks/usePortfolio';

export default function AboutSection() {
  const profile = useProfile();

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Label */}
          <p className="text-text-muted text-xs tracking-[0.3em] uppercase mb-4">
            ABOUT ME
          </p>

          {/* Chrome Gradient Headline */}
          <h2 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Turning ideas into
            <br />
            scalable reality.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Bio */}
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed no-break max-w-3xl">
            {profile.bio}
          </p>

          {/* Stats Row */}
          <div className="mt-12 flex flex-wrap gap-8 md:gap-16">
            <div>
              <p className="hero-heading text-4xl md:text-5xl font-bold">
                {profile.yearsOfExperience}+
              </p>
              <p className="text-text-muted text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="hero-heading text-4xl md:text-5xl font-bold">
                50+
              </p>
              <p className="text-text-muted text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="hero-heading text-4xl md:text-5xl font-bold">
                200+
              </p>
              <p className="text-text-muted text-sm mt-1">Clients Served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
