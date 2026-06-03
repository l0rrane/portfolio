import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Mail, MessageCircle, Send, CheckCircle, User, AtSign, FileText } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const body = `Nome: ${form.name}%0AE-mail: ${form.email}%0A%0A${form.message}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactOptions = [
    {
      icon: Mail,
      title: 'E-mail',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: personalInfo.whatsapp,
      href: `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: LinkedinIcon,
      title: 'LinkedIn',
      value: '/in/gabrielaespin',
      href: personalInfo.linkedin,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: GithubIcon,
      title: 'GitHub',
      value: '/gabrielaespin',
      href: personalInfo.github,
      color: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section id="contato" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Contato</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Vamos Conversar?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades, projetos e parcerias. Entre em contato e vamos construir algo incrível juntos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <a
                  key={idx}
                  href={opt.href}
                  target={opt.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${opt.color} text-white rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">{opt.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{opt.value}</p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envie sua mensagem</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                />
              </div>
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                />
              </div>
            </div>

            <div className="relative mb-4">
              <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                required
                type="text"
                name="subject"
                placeholder="Assunto"
                value={form.subject}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
              />
            </div>

            <textarea
              required
              name="message"
              placeholder="Sua mensagem..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition mb-4 resize-none"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              {sent ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Mensagem enviada!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
