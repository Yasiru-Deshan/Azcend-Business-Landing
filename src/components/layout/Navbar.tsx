import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#">
            <img src="/azcend-logo-dark.png" alt="Azcend Fitness" className="h-22 w-auto" onError={(e) => { e.currentTarget.src = '/azcend-icon.png' }} />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <a href="#problems" className="opacity-90 hover:opacity-100 transition-opacity">The Problems</a>
          <a href="#ecosystem" className="opacity-90 hover:opacity-100 transition-opacity">The Ecosystem</a>
          <a href="#app" className="opacity-90 hover:opacity-100 transition-opacity">Your App</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#founding-partner" className="bg-[var(--color-brand-500)] text-zinc-950 px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-[var(--color-brand-400)] transition-colors">
            Become a Founding Partner
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass border-t border-zinc-800"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            <a href="#problems" className="text-white py-2 border-b border-zinc-800" onClick={() => setIsMobileMenuOpen(false)}>The Problems</a>
            <a href="#ecosystem" className="text-white py-2 border-b border-zinc-800" onClick={() => setIsMobileMenuOpen(false)}>The Ecosystem</a>
            <a href="#app" className="text-white py-2 border-b border-zinc-800" onClick={() => setIsMobileMenuOpen(false)}>Your App</a>
            <a href="#founding-partner" className="bg-[var(--color-brand-500)] text-zinc-950 px-5 py-3 rounded-full text-sm font-semibold mt-2 text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Become a Founding Partner
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
