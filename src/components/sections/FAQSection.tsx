import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How is this different from hiring a web designer or a marketing agency?",
    answer: "Azcend isn't a one-off project, it's an integrated system built specifically for coaching businesses, covering brand, website, app, marketing, and operations together, with ongoing support as you grow."
  },
  {
    question: "Do I own my brand, website and app, or are they tied to Azcend?",
    answer: "Everything we build is yours, fully branded to you, not to Azcend."
  },
  {
    question: "You're early-stage-why should I trust this?",
    answer: "We're intentionally onboarding a small number of founding partners first, so we can work closely with each coach and build the platform around real results-not the other way around."
  },
  {
    question: "What if I already have some clients or existing systems?",
    answer: "Azcend is built to integrate with and upgrade what you already have, not force you to start over."
  },
  {
    question: "How much time does setup take?",
    answer: "[To be confirmed with actual onboarding timeline.]"
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden">
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
