import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Target, Sparkles, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Apaixonada por Tecnologia',
      desc: 'Aprendizado contínuo e busca constante por inovação no desenvolvimento de software.',
    },
    {
      icon: Rocket,
      title: 'Mentalidade Empreendedora',
      desc: 'Fundadora da Zyra Systems, oferecendo soluções digitais modernas para empresas.',
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      desc: 'Criação de experiências funcionais, intuitivas e eficientes que geram valor real.',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-white dark:bg-gray-950 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Sobre Mim</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Quem é a Gabriela?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {personalInfo.about}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {personalInfo.about2}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium border-l-4 border-blue-600 pl-5 italic bg-blue-50/50 dark:bg-blue-900/10 py-3 pr-3 rounded-r-lg">
              "Estou sempre em busca de novos desafios e oportunidades que me permitam evoluir profissionalmente, aprender novas tecnologias e contribuir para projetos de impacto."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-5"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
