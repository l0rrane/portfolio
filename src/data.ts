import {
  Code2,
  Database,
  Globe,
  LayoutTemplate,
  Server,
  Terminal,
  Cloud,
  Palette,
  Award,
  BookOpen,
  Lightbulb,
} from 'lucide-react';

export const personalInfo = {
  name: 'Gabriela Espin',
  role: 'Desenvolvedora de Software | Estudante de ADS | Empreendedora em Tecnologia',
  shortDesc: 'Transformo ideias em soluções digitais através da tecnologia, desenvolvendo sistemas, websites e experiências que geram valor e resultados.',
  about: `Sou estudante de Análise e Desenvolvimento de Sistemas apaixonada por tecnologia, inovação e desenvolvimento de software. Atuo no desenvolvimento de websites, sistemas e soluções digitais, utilizando tecnologias modernas para criar experiências funcionais, intuitivas e eficientes.`,
  about2: `Tenho experiência com desenvolvimento web, WordPress, Elementor, bancos de dados e administração básica de servidores Linux, além de participação em projetos reais para empresas e instituições públicas.`,
  goals: 'Busco oportunidades para atuar na área de desenvolvimento de software, contribuindo para projetos inovadores e ampliando constantemente meus conhecimentos técnicos. Meu objetivo é construir uma carreira sólida na tecnologia, participando de projetos desafiadores e gerando impacto através de soluções digitais modernas e eficientes.',
  email: 'contato@gabrielaespin.com',
  whatsapp: '+5511999999999',
  linkedin: 'https://linkedin.com/in/gabrielaespin',
  github: 'https://github.com/l0rrane',
};

export const typingSpecialties = [
  'Desenvolvimento Web',
  2000,
  'Sistemas Personalizados',
  2000,
  'WordPress & Elementor',
  2000,
  'Banco de Dados',
  2000,
  'Soluções Digitais',
  2000,
];

export const education = {
  course: 'Análise e Desenvolvimento de Sistemas',
  institution: 'Curso Superior em Tecnologia',
  period: 'Em andamento',
  subjects: [
    'Engenharia de Software',
    'Desenvolvimento Web',
    'Banco de Dados',
    'UML e Modelagem de Sistemas',
    'Qualidade de Software',
    'Inteligência Artificial',
    'Redes Neurais Artificiais',
    'Segurança da Informação',
    'Programação Orientada a Objetos',
  ],
};

export const skills = {
  frontend: {
    title: 'Front-end',
    icon: LayoutTemplate,
    items: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  backend: {
    title: 'Back-end',
    icon: Server,
    items: ['PHP', 'Node.js'],
  },
  cms: {
    title: 'CMS & Visual',
    icon: Palette,
    items: ['WordPress', 'Elementor'],
  },
  database: {
    title: 'Banco de Dados',
    icon: Database,
    items: ['MySQL', 'Firebase'],
  },
  tools: {
    title: 'Ferramentas',
    icon: Terminal,
    items: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  infra: {
    title: 'Infraestrutura',
    icon: Cloud,
    items: ['Linux (Básico)', 'Hospedagem de Sites', 'Deploy de Aplicações', 'Servidores Web'],
  },
};

export const projects = [
  {
    name: 'WD Conecta',
    category: 'Website Corporativo',
    description: 'A WD Conecta é uma startup e plataforma digital projetada para conectar profissionais a famílias.',
    activities: [
      'Desenvolvimento e manutenção do site',
      'Implementação de páginas responsivas',
      'Otimização de desempenho',
      'Experiência do usuário (UX)',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'vite', 'firebase', 'Node.js', ],
    color: 'from-blue-500 to-cyan-500',
    initials: 'WD',
  },
  {
    name: 'Zyra Systems',
    category: 'Empresa Própria | Tech',
    description: 'A Zyra Systems é uma startup de inovação voltada para soluções inteligentes de análise de solo e apoio à tomada de decisão no setor agrícola e ambiental.',
    activities: [
      'Desenvolvimento do site institucional',
      'Design da identidade digital',
      'Estruturação de serviços oferecidos',
      'Otimização para conversão de clientes',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'vite', 'firebase', 'Node.js', ],
    color: 'from-indigo-500 to-purple-500',
    initials: 'ZS',
  },
  {
    name: 'Site da Prefeitura de Ferraz de Vasconcelos',
    category: 'Projeto Institucional',
    description: 'Participação em atividades relacionadas ao gerenciamento e atualização do site institucional da Prefeitura Municipal de Ferraz de Vasconcelos.',
    activities: [
      'Atualização de conteúdos institucionais',
      'Organização e estruturação de páginas',
      'Suporte na manutenção do site',
      'Gerenciamento de informações públicas',
    ],
    technologies: ['WordPress', 'Elementor', 'Administração Web', 'PHP'],
    color: 'from-emerald-500 to-teal-500',
    initials: 'PF',
  },
];

export const experiences = [
  {
    title: 'Fundadora e Desenvolvedora',
    company: 'Zyra Systems',
    period: 'Atual',
    description: 'Responsável pela criação de soluções digitais voltadas para empresas e profissionais.',
    activities: [
      'Desenvolvimento de websites',
      'Landing pages personalizadas',
      'Sistemas sob medida',
      'Manutenção de plataformas digitais',
      'Atendimento e relacionamento com clientes',
      'Planejamento de soluções tecnológicas',
    ],
  },
];

export const differentials = [
  'Aprendizado Contínuo',
  'Capacidade Analítica',
  'Organização',
  'Proatividade',
  'Criatividade',
  'Resolução de Problemas',
  'Trabalho em Equipe',
  'Comunicação Eficiente',
  'Mentalidade Empreendedora',
];

export const certificates = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    issuer: 'Instituição de Ensino Superior',
    type: 'Em andamento',
    icon: BookOpen,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Desenvolvimento Web Full Stack',
    issuer: 'Estudos Complementares',
    type: 'Certificação',
    icon: Code2,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'WordPress & Elementor Profissional',
    issuer: 'Prática Profissional',
    type: 'Experiência',
    icon: Palette,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Banco de Dados MySQL',
    issuer: 'Formação Acadêmica',
    type: 'Curso',
    icon: Database,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Lógica de Programação & POO',
    issuer: 'Formação Acadêmica',
    type: 'Curso',
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Próximas Certificações',
    issuer: 'Em constante evolução',
    type: 'Em breve',
    icon: Award,
    color: 'from-cyan-500 to-blue-500',
  },
];

export { Globe };
