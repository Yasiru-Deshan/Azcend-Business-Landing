import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const caps = [
  { cap: "Delivery cap", removes: "Assistant coaches" },
  { cap: "Admin-time cap", removes: "Automation" },
  { cap: "Client-acquisition cap", removes: "Marketing systems" },
  { cap: "Credibility & scale cap", removes: "Your own branded platform" }
];

export const ScalingSection = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-brand-900)]/10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why 10x Is Realistic, Not Hype</h2>
          <p className="text-xl text-zinc-400 mb-16 leading-relaxed">
            A coach capped by their own hours can only serve so many clients. Azcend removes each cap, one at a time.
          </p>
        </motion.div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <div className="grid grid-cols-2 bg-zinc-950 border-b border-zinc-800 p-6 text-sm font-bold text-zinc-400 uppercase tracking-wider">
            <div className="text-left">The Cap</div>
            <div className="text-right">What Removes It</div>
          </div>
          <div className="divide-y divide-zinc-800">
            {caps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="grid grid-cols-2 p-6 hover:bg-zinc-800/50 transition-colors items-center group"
              >
                <div className="text-left text-lg text-white font-medium group-hover:text-red-300 transition-colors">{item.cap}</div>
                <div className="text-right text-lg text-[var(--color-brand-400)] font-semibold flex items-center justify-end gap-3">
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                  {item.removes}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Remove all four caps, and revenue isn't linear anymore-<span className="text-[var(--color-brand-500)] italic">it compounds.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
