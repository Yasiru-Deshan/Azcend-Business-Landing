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
                When your clients open the app, they see you — not us. Every coaching app we build is fully white-labeled: your logo, your colors, your name on the App Store and Google Play. Your clients become loyal to your brand, not to a platform they could just as easily find without you.
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
          <div className="lg:w-1/2 relative w-full h-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex justify-center items-center"
            >
              <div className="relative w-72 h-[500px] bg-zinc-900 rounded-[2.5rem] border-[8px] border-zinc-800 overflow-hidden shadow-2xl z-20">
                <div className="absolute top-0 w-full h-12 bg-zinc-800 flex justify-center items-end pb-2">
                  <div className="w-1/3 h-5 bg-zinc-950 rounded-b-3xl"></div>
                </div>
                {/* Mockup Screen Content */}
                <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 bg-[var(--color-brand-500)]/20 rounded-2xl flex items-center justify-center mb-6 border border-[var(--color-brand-500)]/30">
                    <span className="text-[var(--color-brand-500)] font-bold text-2xl">YOU</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Your Fitness App</h3>
                  <p className="text-zinc-500 text-sm">Powered seamlessly by Azcend in the background.</p>

                  <div className="mt-8 w-full space-y-3">
                    <div className="h-12 w-full bg-zinc-900 rounded-lg animate-pulse"></div>
                    <div className="h-24 w-full bg-zinc-900 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Decorative background app showing third party */}
              <div className="absolute top-10 -right-10 w-72 h-[450px] bg-zinc-900 rounded-[2.5rem] border-[8px] border-zinc-800 overflow-hidden opacity-30 z-10 scale-90 blur-[2px]">
                <div className="w-full h-full bg-zinc-950 flex items-center justify-center">
                  <p className="text-zinc-600 font-bold">Generic App</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
