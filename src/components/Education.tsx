import { motion } from 'framer-motion';
import { education } from '../data';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="formacao" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Formação</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Formação Acadêmica</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white dark:bg-gray-950 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{education.course}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-3">{education.institution}</p>
                <div className="inline-flex items-center space-x-2 text-sm text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{education.period}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-800 pt-8">
              <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200 mb-5">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Áreas de Estudo
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {education.subjects.map((subject, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-xl border border-blue-100 dark:border-blue-800/50 hover:scale-105 transition-transform"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {subject}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
