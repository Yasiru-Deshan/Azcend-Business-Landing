import { motion } from 'framer-motion';
import { Camera, Layout, Smartphone, Megaphone, Users, CreditCard, LineChart, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    icon: <Camera className="w-6 h-6 text-[var(--color-brand-400)]" />,
    title: "Brand",
    description: "Professional photography, video, and identity that builds trust and authority."
  },
  {
    icon: <Layout className="w-6 h-6 text-[var(--color-brand-400)]" />,
    title: "Website",
    description: "A high-converting personal brand site built to turn visitors into paying clients."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-[var(--color-brand-400)]" />,
    title: "App",
    description: "Your own branded mobile experience to manage clients, workouts, meals, check-ins, payments and messaging."
  },
  {
    icon: <Megaphone className="w-6 h-6 text-[var(--color-brand-400)]" />,
    title: "Marketing",
    description: "Content, ads, and social strategy that attract the right clients."
  },
  {
    icon: <Users className="w-6 h-6 text-[var(--color-brand-400)]" />,
    title: "People",
    description: "Trained assistant coaches so you're not capped by your own hours."
  },
  {
    icon: <CreditCard className="w-6 h-6 text-[var(--color-brand-400)]" />,
    title: "Money",
    description: "Secure payments, automated billing, subscriptions and invoicing."
  },
  {
    icon: <LineChart className="w-6 h-6 text-[var(--color-brand-400)]" />,
    title: "Growth Strategy",
    description: "Help with offers, pricing, funnels and sales systems."
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-[var(--color-brand-400)]" />,
    title: "Community",
    description: "A network of driven coaches growing together."
  }
];

export const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-24 bg-zinc-900 relative">
      <div className="absolute inset-0 bg-[var(--color-brand-900)]/5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
              Everything Your Business Needs,<br /> Working as <span className="text-[var(--color-brand-500)]">One System</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Azcend gives you a personal brand, a high-converting website, your own branded app, content and marketing systems, assistant coaches, payments, automation, and a community of coaches growing alongside you-all built to work together, not sold as separate pieces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-[var(--color-brand-500)]/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(140,212,0,0.2)]"
            >
              <div className="w-12 h-12 bg-[var(--color-brand-500)]/10 rounded-full flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
