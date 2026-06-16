import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useProfile } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';

export default function HeroSection() {
  const profile = useProfile();

  const initials = profile.shortName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle radial glow behind avatar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-accent-purple/5 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-muted text-sm tracking-[0.3em] uppercase mb-6"
        >
          {profile.role}
        </motion.p>

        {/* Chrome Gradient Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hero-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
        >
          Hi, I'm {profile.shortName}
        </motion.h1>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          {profile.avatarImage ? (
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-border-muted overflow-hidden shadow-2xl shadow-accent-purple/10">
              <img
                src={profile.avatarImage}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : profile.avatarSvg ? (
            <div
              className="w-28 h-28 rounded-full border-2 border-border-muted overflow-hidden"
              dangerouslySetInnerHTML={{ __html: profile.avatarSvg }}
            />
          ) : (
            <div className="w-28 h-28 rounded-full border-2 border-border-muted bg-bg-card flex items-center justify-center">
              <span className="hero-heading text-3xl font-bold">{initials}</span>
            </div>
          )}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-text-secondary text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <SocialLinks social={profile.social} className="justify-center" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
