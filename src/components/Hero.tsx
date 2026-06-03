import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { personalInfo, typingSpecialties } from '../data';
import { Mail, FolderGit2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 lg:col-span-3"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 px-4 py-1.5 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Disponível para novas oportunidades</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            Olá, sou <br />
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <div className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 h-14">
            <span className="text-blue-600 dark:text-blue-400">&gt; </span>
            <TypeAnimation
              sequence={typingSpecialties}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            {personalInfo.shortDesc}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <a href="#projetos" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5">
              <FolderGit2 className="w-5 h-5" />
              Ver Projetos
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 font-medium rounded-full transition-all hover:-translate-y-0.5">
              <LinkedinIcon className="w-5 h-5" />
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white font-medium rounded-full transition-all hover:-translate-y-0.5">
              <GithubIcon className="w-5 h-5" />
              GitHub
            </a>
            <a href="#contato" className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full transition-all hover:-translate-y-0.5 shadow-lg">
              <Mail className="w-5 h-5" />
              Contato
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:col-span-2"
        >
          <div className="relative">
            {/* Gradient ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30 dark:opacity-50 animate-pulse"></div>

            {/* Photo */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl z-10">
              <img 
                src="gabi.jpeg"
                alt="Foto de Gabriela"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-xl border border-gray-100 dark:border-gray-800 z-20"
            >
              <span className="text-sm font-semibold flex items-center gap-1">
                💻 Dev
              </span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              className="absolute -bottom-2 -left-4 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-xl border border-gray-100 dark:border-gray-800 z-20"
            >
              <span className="text-sm font-semibold flex items-center gap-1">
                🚀 Empreendedora
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
