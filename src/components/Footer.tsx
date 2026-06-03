import { personalInfo } from '../data';
import { LinkedinIcon, GithubIcon } from './Icons';
import { Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">
              <span className="text-gradient">Gabriela</span> Espin
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Desenvolvedora de Software | Estudante de ADS | Empreendedora em Tecnologia.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a></li>
              <li><a href="#projetos" className="hover:text-blue-400 transition-colors">Projetos</a></li>
              <li><a href="#habilidades" className="hover:text-blue-400 transition-colors">Habilidades</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Conecte-se</h3>
            <div className="flex space-x-3">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <LinkedinIcon className="w-5 h-5 text-white" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                <GithubIcon className="w-5 h-5 text-white" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">
              "Construindo soluções digitais com tecnologia, criatividade e propósito."
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <p>© {currentYear} <span className="text-white font-medium">Gabriela Espin</span>. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Desenvolvido com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> e muito código.
          </p>
        </div>
      </div>
    </footer>
  );
}
