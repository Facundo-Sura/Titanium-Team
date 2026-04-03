'use client';

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone as PhoneIcon, Mail as MailIcon, Clock, Send, MessageSquare, User, Calendar, Instagram, Facebook, Youtube } from "lucide-react";

// Custom TikTok icon
const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    discipline: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main ref={containerRef} className="font-sans bg-black min-h-screen">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 z-50"
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/contact.jpg"
            alt="Contacto"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        </motion.div>

        {/* Glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[150px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-4"
          >
            Cont<span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">acto</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-gray-300"
          >
            Escribinos o visitanos. Te esperamos.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Ubicación/GPS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                <MapPin className="text-red-500" size={24} />
                Nuestra Ubicación
              </h2>
              
              {/* Mapa embedido */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-gray-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887559449!2d-58.3828512!3d-34.6037224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f50a7910e3%3A0x9e2b8e8e8e8e8e8!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1234567890!5m2!1ses!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Info de contacto */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl">
                  <MapPin className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-white font-semibold">Dirección</p>
                    <p className="text-gray-400 text-sm">Buenos Aires, Argentina</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl">
                  <PhoneIcon className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-white font-semibold">Teléfono</p>
                    <a href="tel:+549xxxxxxxxx" className="text-gray-400 text-sm hover:text-red-400 transition">
                      +54 9 xxx xxx xxxx
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl">
                  <MailIcon className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:info@titaniumteam.com.ar" className="text-gray-400 text-sm hover:text-red-400 transition">
                      info@titaniumteam.com.ar
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-xl">
                  <Clock className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-white font-semibold">Horarios</p>
                    <div className="text-gray-400 text-sm space-y-1">
                      <p><span className="text-red-400 font-medium">Muay Thai / K1:</span> Lun, Mié, Vie 14:30 - 16:00</p>
                      <p><span className="text-blue-400 font-medium">Kickboxing:</span> Mar, Jue 21:30 - 23:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-white font-semibold mb-4">Nuestras redes</p>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Youtube, label: "YouTube" },
                    { icon: TikTokIcon, label: "TikTok" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <social.icon className="text-white" size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-2">
                <MessageSquare className="text-red-500" size={24} />
                Envianos un mensaje
              </h2>
              <p className="text-gray-400 mb-8">
                Completá el formulario y te respondemos a la brevedad.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                  <p className="text-gray-400">Gracias por contactarnos. Te responderemos pronto.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-red-400 hover:text-red-300"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Nombre completo</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tu nombre"
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email y Teléfono */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Email</label>
                      <div className="relative">
                        <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@email.com"
                          required
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Teléfono</label>
                      <div className="relative">
                        <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+54 9 xxx xxx xxxx"
                          required
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Disciplina */}
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Disciplina de interés</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <select
                        value={formData.discipline}
                        onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-gray-800">Seleccioná una disciplina</option>
                        <option value="muay-thai" className="bg-gray-800">Muay Thai</option>
                        <option value="kickboxing" className="bg-gray-800">Kickboxing</option>
                        <option value="k1" className="bg-gray-800">K1</option>
                        <option value="todos" className="bg-gray-800">No tengo experiencia</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Mensaje</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-gray-500" size={18} />
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Contanos qué buscas y cómo podemos ayudarte..."
                        rows={5}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-red-600/20"
                  >
                    <Send size={20} />
                    Enviar mensaje
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}