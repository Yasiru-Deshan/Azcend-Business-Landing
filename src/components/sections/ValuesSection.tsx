import { motion } from 'framer-motion';

const values = [
  {
    title: "Ownership over rental.",
    desc: "Everything we build - your brand, your website, your app belongs to you."
  },
  {
    title: "Business builders first.",
    desc: "We started by asking what actually makes a coaching business profitable and scalable, then built the systems to support that answer."
  },
  {
    title: "Partnership over transactions.",
    desc: "We win when you win. This is a long-term relationship, not a subscription you forget about."
  },
  {
    title: "Freedom is the goal.",
    desc: "We build systems specifically to get coaches out of the 24/7 grind, not deeper into it."
  }
];

export const ValuesSection = () => {
  return (
    <section className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What We Believe</h2>
              <div className="w-20 h-1 bg-[var(--color-brand-500)] rounded-full"></div>
            </motion.div>
          </div>

          <div className="md:w-2/3 space-y-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-brand-400)] transition-colors">
                  {value.title}
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
