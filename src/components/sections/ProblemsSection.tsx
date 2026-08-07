import { motion } from 'framer-motion';
import { Users, Clock, Scaling, LineChart, BookOpen, MonitorSmartphone } from 'lucide-react';

const problems = [
  {
    icon: <Users className="w-6 h-6 text-red-400" />,
    title: "Inconsistent Client Flow",
    description: "Struggling to attract and convert consistent clients."
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-400" />,
    title: "Time-Consuming Operations",
    description: "Managing clients, programs, payments and check-ins takes too much time."
  },
  {
    icon: <Scaling className="w-6 h-6 text-yellow-400" />,
    title: "Lack of Scalability",
    description: "Hard to serve more clients without sacrificing quality or working 24/7."
  },
  {
    icon: <LineChart className="w-6 h-6 text-rose-400" />,
    title: "Unpredictable Income",
    description: "Income is inconsistent and not systemized for long-term growth."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-purple-400" />,
    title: "Lack of Business Knowledge",
    description: "Most coaches are great trainers but lack skills in marketing, sales and business."
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-blue-400" />,
    title: "Technology Overload",
    description: "Too many tools, no integration, difficult to manage."
  }
];

export const ProblemsSection = () => {
  return (
    <section id="problems" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Problems</h2>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">Coaches face these challenges every day.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-5 md:p-8 hover:border-zinc-700 transition-colors flex md:block items-start gap-4"
            >
              <div className="w-12 h-12 bg-zinc-800/50 rounded-xl flex items-center justify-center shrink-0 mb-0 md:mb-6">
                {problem.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-3">{problem.title}</h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
