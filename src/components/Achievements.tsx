import { motion } from 'framer-motion';
import { differentials, personalInfo } from '../data';
import { CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 dark:from-blue-900 dark:via-indigo-950 dark:to-purple-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-200 uppercase tracking-widest">Soft Skills</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Diferenciais</h2>
          <div className="w-24 h-1 bg-blue-300 mx-auto rounded-full mb-6"></div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Competências pessoais que me destacam e contribuem para o sucesso dos projetos e equipes.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3 mb-16">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 text-white shadow-lg hover:bg-white/20 hover:scale-105 transition-all"
            >
              <CheckCircle2 className="w-5 h-5 text-blue-200" />
              <span className="font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Goals card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
            🎯 Objetivos Profissionais
          </h3>
          <p className="text-blue-50 text-lg leading-relaxed">
            {personalInfo.goals}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
