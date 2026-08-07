import { Mail } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <img src="/azcend-logo-dark.png" alt="Azcend Fitness" className="h-8 w-auto opacity-80" onError={(e) => { e.currentTarget.src = '/azcend-icon.png' }} />
            </div>
            <p className="text-zinc-400 text-sm mb-6">
              Everything coaches need to deliver personalized fitness coaching at scale.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/azcend.fitness/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[var(--color-brand-500)] transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="text-white font-semibold mb-4">Get in touch</h4>
            <p className="text-zinc-400 text-sm mb-6">
              Have questions about the platform? <br className="hidden md:block" /> We'd love to hear from you.
            </p>
            <a
              href="mailto:azcendfitness@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-[var(--color-brand-500)]/50 hover:bg-zinc-800 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all"
            >
              <Mail className="w-4 h-4 text-[var(--color-brand-500)]" />
              Send us an email
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800/50 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Azcend Fitness. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Designed for elite coaches</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
