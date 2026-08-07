import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  {
    title: "Fully branded",
    desc: "Your logo, colors and identity, top to bottom. Azcend never appears to your clients."
  },
  {
    title: "Your own listing",
    desc: "Published under your name on the App Store and Google Play."
  },
  {
    title: "You own the relationship",
    desc: "Client data and communication stay tied to your brand, not a shared platform."
  },
  {
    title: "Built to grow with you",
    desc: "Manage workouts, meals, check-ins, payments and messaging, all inside the app your clients associate only with you."
  }
];

export const AppSection = () => {
  return (
    <section id="app" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Your Brand. <br className="hidden md:block" />
                Your App. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-400)] to-[var(--color-brand-600)]">Your Business.</span>
              </h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                When your clients open the app, they see you-not us. Every coaching app we build is fully white-labeled: your logo, your colors, your name on the App Store and Google Play. Your clients become loyal to your brand, not to a platform they could just as easily find without you.
              </p>

              <div className="space-y-6 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-500)] shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://azcend.fitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-brand-500)] text-zinc-950 px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-brand-400)] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-10px_rgba(140,212,0,0.4)]"
              >
                See How App Works
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </a>
            </motion.div>
          </div>

          {/* Visual mockups */}
          <div className="lg:w-1/2 relative w-full h-[500px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-full flex justify-center items-center"
            >
              <img
                src="/devices.png"
                alt="Azcend Fitness Devices App Preview"
                className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
