import { motion } from 'framer-motion';
import { experiences } from '../data';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Carreira</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Experiência Profissional</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-4 md:ml-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-10 ml-8 md:ml-10 relative"
              >
                <span className="absolute -left-12 md:-left-14 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 ring-4 ring-white dark:ring-gray-950 shadow-lg shadow-blue-500/40">
                  <Briefcase className="w-5 h-5 text-white" />
                </span>

                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-blue-700 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit">{exp.period}</span>
                  </div>

                  <h4 className="text-lg font-semibold text-gradient mb-4">{exp.company}</h4>

                  <p className="text-gray-600 dark:text-gray-400 mb-5">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-3">Atividades</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.activities.map((act, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
