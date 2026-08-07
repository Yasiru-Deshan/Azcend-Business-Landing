import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-zinc-950 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/IMG_3816.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-brand-500)]/20 rounded-full blur-[128px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] mix-blend-screen opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Stop Just Coaching. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-400)] to-[var(--color-brand-600)]">
              Start Building a Business.
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-base md:text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Azcend is the complete ecosystem for fitness professionals-your personal brand, a high converting website, your own branded app, marketing systems, and business support-built to help you turn your expertise into a business that grows without you working more hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#founding-partner"
            className="w-full sm:w-auto bg-[var(--color-brand-500)] text-zinc-950 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:bg-[var(--color-brand-400)] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(140,212,0,0.5)]"
          >
            Become a Founding Partner
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#ecosystem"
            className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 border border-zinc-800 hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
          >
            See the Ecosystem
          </a>
        </motion.div>
      </div>
    </section>
  );
};
