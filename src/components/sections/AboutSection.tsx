import { motion } from 'framer-motion';
import { Target, CheckCircle2 } from 'lucide-react';

const audiences = [
  "Online Fitness Coaches",
  "Personal Trainers",
  "Nutrition Coaches",
  "Fitness Influencers",
  "Gyms & Fitness Businesses"
];

const outcomes = [
  "More Clients",
  "More Time",
  "More Income",
  "Happier Clients",
  "Business Freedom"
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Founder Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-10 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why We Built Azcend</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed italic">
              <p>
                "We watched incredible coaches burn out—not from coaching, but from duct-taping together a dozen different tools just to manage clients, marketing, and operations."
              </p>
              <p>
                "Existing platforms were either too rigid, too limited, or treated coaches like renters instead of business owners. We built Azcend to change that. It's the all-in-one ecosystem designed to scale with you, give you your time back, and multiply your impact."
              </p>
            </div>
          </motion.div>

          {/* Audience & Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-[var(--color-brand-500)]" />
                Who We Work With
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {audiences.map((audience, i) => (
                  <li key={i} className="flex items-center gap-2 text-zinc-300 bg-zinc-900/50 px-4 py-2 rounded-lg border border-zinc-800">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-brand-500)]"></span>
                    {audience}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-zinc-500 mt-4">For coaches ready to stop trading time for money and build something that lasts.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-500)]" />
                The Outcome
              </h3>
              <div className="flex flex-wrap gap-3">
                {outcomes.map((outcome, i) => (
                  <span key={i} className="px-4 py-2 bg-[var(--color-brand-900)]/30 text-[var(--color-brand-300)] rounded-full border border-[var(--color-brand-800)]/50 text-sm font-medium">
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
