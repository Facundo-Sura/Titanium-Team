'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Send, Zap } from "lucide-react";

const quickLinks = [
  { label: "Nosotros", href: "/about" },
  { label: "Disciplinas", href: "/#disciplines" },
  { label: "Alumnos", href: "/pupils" },
  { label: "Entrenamientos", href: "/trainings" },
  { label: "Combates", href: "/combats" },
];

const disciplines = [
  { label: "Muay Thai", href: "/#disciplines" },
  { label: "Kickboxing", href: "/#disciplines" },
  { label: "K1", href: "/#disciplines" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "from-purple-500 to-pink-500" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com", color: "from-blue-500 to-blue-600" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com", color: "from-red-500 to-red-600" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      {/* Gradient line superior */}
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                <div className="relative">
                  <Image
                    src="/logo.jpg"
                    width={60}
                    height={60}
                    alt="Titanium Team"
                    className="rounded-lg border-2 border-red-600"
                  />
                  <span className="absolute inset-0 rounded-lg bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <span className="text-white font-black text-xl">TITANIUM</span>
                  <span className="text-red-500 font-bold text-xl">TEAM</span>
                </div>
              </Link>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                La mejor escuela de Muay Thai, Kickboxing y K1 en Argentina. 
                Entrená con los mejores instructores y alcanzá tu máximo potencial.
              </p>

              {/* Newsletter */}
              <div className="space-y-3">
                <span className="text-white font-semibold text-sm">Recibí nuestras noticias</span>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 hover:bg-red-500 p-2 rounded-lg transition-colors"
                  >
                    <Send className="text-white" size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Zap className="text-red-500" size={18} />
               快速 Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Column 3: Disciplines */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Zap className="text-red-500" size={18} />
                Disciplinas
              </h3>
              <ul className="space-y-3">
                {disciplines.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Horarios brief */}
              <div className="mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Clock size={14} className="text-red-500" />
                  <span className="font-medium text-white">Horarios</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Lun - Vie: 9hs a 22hs<br />
                  Sáb: 9hs a 18hs
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Zap className="text-red-500" size={18} />
                Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm">Argentina</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="text-red-500 flex-shrink-0" size={16} />
                  <a href="tel:+549xxxxxxxxx" className="text-sm hover:text-red-400 transition-colors">
                    +54 9 xxx xxx xxxx
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="text-red-500 flex-shrink-0" size={16} />
                  <a href="mailto:info@titaniumteam.com.ar" className="text-sm hover:text-red-400 transition-colors">
                    info@titaniumteam.com.ar
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8">
                <span className="text-white font-semibold text-sm block mb-4">
                  Seguinos en redes
                </span>
                <div className="flex gap-3">
                  {socials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg`}
                    >
                      <social.icon className="text-white" size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Titanium Team</span>. 
            Todos los derechos reservados.
          </p>
          
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-red-400 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-gray-500 hover:text-red-400 transition-colors">
              Términos de Uso
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Back to top button (opcional) */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/30 z-50"
      >
        <Zap className="text-white" size={20} />
      </motion.button>
    </footer>
  );
}