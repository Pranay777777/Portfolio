import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useProfile } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Footer() {
  const profile = useProfile();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (profile.social.email) {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="border-t border-border-subtle pt-16 pb-8 px-6">
      <div className="mx-auto max-w-6xl">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div>
            <h3 className="hero-heading text-2xl md:text-3xl font-bold mb-3">
              {profile.name}
            </h3>
            <p className="text-text-secondary text-sm mb-1">
              {profile.specialization}
            </p>
            <p className="text-text-muted text-sm">
              {profile.location}
            </p>
          </div>

          {/* Navigate Column */}
          <div>
            <h4 className="text-text-muted text-xs tracking-[0.2em] uppercase mb-6">
              NAVIGATE
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Reach Out Column */}
          <div>
            <h4 className="text-text-muted text-xs tracking-[0.2em] uppercase mb-6">
              REACH OUT
            </h4>
            <div className="space-y-4 mb-6">
              {profile.social.email && (
                <div className="flex items-center gap-2">
                  <span className="text-text-secondary text-sm">
                    {profile.social.email}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg border border-border-subtle hover:border-border-muted text-text-muted hover:text-text-primary transition-all duration-200"
                    aria-label="Copy email"
                    title="Copy email"
                  >
                    {copied ? (
                      <Check size={14} className="text-green-400" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>
              )}
              {profile.social.phone && (
                <p className="text-text-secondary text-sm">
                  <a
                    href={`tel:${profile.social.phone}`}
                    className="hover:text-text-primary transition-colors"
                  >
                    {profile.social.phone}
                  </a>
                </p>
              )}
            </div>
            <SocialLinks social={profile.social} size={16} />
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-border-subtle pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
