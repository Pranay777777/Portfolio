import { motion } from 'framer-motion';
import { Server, Brain, Layout, Cloud } from 'lucide-react';

// TODO: Move services data to portfolio.json in a future update
const services = [
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Designing and building robust, scalable backend systems with microservices architecture, REST/GraphQL APIs, and high-throughput data pipelines that handle millions of requests.',
  },
  {
    icon: Brain,
    title: 'AI / LLM Integration',
    description:
      'Integrating large language models, building RAG pipelines, and developing AI-powered features that transform raw data into intelligent, actionable insights for end users.',
  },
  {
    icon: Layout,
    title: 'Frontend Engineering',
    description:
      'Crafting pixel-perfect, responsive interfaces with React and modern frameworks. Focused on performance, accessibility, and delightful user experiences with smooth animations.',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description:
      'Architecting cloud-native solutions on AWS and GCP. Infrastructure as code, containerization with Docker/K8s, CI/CD pipelines, and cost-optimized scaling strategies.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-bg-card/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-text-muted text-xs tracking-[0.3em] uppercase mb-4">
            WHAT I DO
          </p>
          <h2 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
            Services
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
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
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="w-12 h-12 rounded-xl border border-border-subtle bg-bg-card flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-accent-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
