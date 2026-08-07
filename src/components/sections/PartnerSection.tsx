import { motion } from 'framer-motion';

export const PartnerSection = () => {
  return (
    <section id="founding-partner" className="py-24 bg-[var(--color-brand-950)] border-y border-[var(--color-brand-900)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-900)] text-[var(--color-brand-400)] text-sm font-semibold mb-6">
            Limited Availability
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">We're Selectively Onboarding Our First Partner Coaches</h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-100)] mb-10 leading-relaxed max-w-2xl mx-auto">
            Azcend is early, and that's an advantage for the coaches who join now. Founding partners get direct access to our team, input into the platform roadmap, and founding-member pricing locked in for life.
          </p>

          <button className="bg-[var(--color-brand-500)] text-zinc-950 px-10 py-4 rounded-full text-xl font-bold hover:bg-[var(--color-brand-400)] transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(140,212,0,0.4)]">
            Apply to Become a Founding Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
};
