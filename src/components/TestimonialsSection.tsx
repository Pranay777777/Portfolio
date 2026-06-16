import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTestimonials } from '../hooks/usePortfolio';

export default function TestimonialsSection() {
  const testimonials = useTestimonials();

  // Duplicate for seamless infinite scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 md:py-32 overflow-hidden bg-bg-card/30">
      <div className="mx-auto max-w-7xl px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-text-muted text-xs tracking-[0.3em] uppercase mb-4">
            WHAT PEOPLE SAY
          </p>
          <h2 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-bold">
            Testimonials
          </h2>
        </motion.div>
      </div>

      {/* Decorative quote icons */}
      <div className="relative">
        <div className="absolute -top-8 left-8 md:left-16 pointer-events-none">
          <Quote size={64} className="text-accent-purple/10 rotate-180" />
        </div>

        {/* Marquee Container */}
        <div className="marquee-container">
          <div className="marquee-track">
            {doubled.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[360px] sm:w-[420px] flex-shrink-0 mx-3"
              >
                <div className="h-full rounded-2xl border border-border-subtle bg-bg-card p-6 md:p-8 flex flex-col">
                  {/* Quote */}
                  <Quote
                    size={20}
                    className="text-accent-purple/40 mb-4 flex-shrink-0"
                  />
                  <p className="italic text-text-secondary text-sm leading-relaxed flex-grow mb-6">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    {/* Avatar circle with initial */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold text-white"
                      style={{ backgroundColor: testimonial.avatarColor }}
                    >
                      {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-text-primary text-sm font-semibold uppercase tracking-wider">
                        {testimonial.name}
                      </p>
                      <p className="text-text-muted text-xs mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
