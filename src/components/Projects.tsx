import { motion } from 'framer-motion';
import { projects } from '../data';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Projetos em Destaque</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projetos reais desenvolvidos para empresas e instituições, demonstrando minhas habilidades técnicas e visão de negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-950 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group hover:-translate-y-2"
            >
              {/* Header with gradient */}
              <div className={`h-40 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,white,transparent_50%)]"></div>
                <span className="text-6xl font-black text-white/90 tracking-tighter drop-shadow-lg">
                  {project.initials}
                </span>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              <div className="p-7 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-5">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-200 mb-3">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    Principais Atividades
                  </h4>
                  <ul className="space-y-2">
                    {project.activities.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
