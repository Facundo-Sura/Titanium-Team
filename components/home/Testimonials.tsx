'use client';

import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Matías R.",
    text: "Desde que entreno en Titanium Team mi vida cambió por completo. No solo mejoré físicamente, sino que encontré una disciplina mental que me ayuda en todo. El ambiente es increíble, todos se pushes mutuamente a dar lo mejor.",
    since: "Entrena desde 2021",
    rating: 5,
  },
  {
    name: "Camila S.",
    text: "本来紧张的 pero acá me sentí super cómoda desde el primer día. Las profes son muy pacientes y el grupo es muy heterogeneous. Ahora compito y nunca pensé que llegaría tan lejos. ¡Recomendado 100%!",
    since: "Entrena desde 2022",
    rating: 5,
  },
  {
    name: "Lucas M.",
    text: "Probé varios gyms antes de encontrar Titanium y no me arrepiento. La técnica que enseñan es impecable y cuando vas a competir ves la diferencia. Tengo 35 años y nunca fue tarde para empezar.",
    since: "Entrena desde 2020",
    rating: 5,
  },
  {
    name: "Sofía L.",
    text: "Empecé para bajar de peso y terminé enamorada del Muay Thai. El equipo te motiva a superarte cada día. Ahora es mi segunda casa y mi forma de desconectar del trabajo.",
    since: "Entrena desde 2023",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <motion.div 
        className="absolute top-20 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Lo que dicen nuestros Alumnos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Testimonios{' '}
            <span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">
              Reales
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-b from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl p-6 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-600/10 transition-all duration-300"
            >
              {/* Quote icon */}
              <motion.div
                className="absolute -top-4 -left-2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Quote className="text-white" size={18} />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 ml-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.15 + i * 0.05 }}
                  >
                    <Star 
                      size={16} 
                      className="text-yellow-500 fill-yellow-500" 
                    />
                  </motion.div>
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 pl-2">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                  <User className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.since}</p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-red-500/0 group-hover:bg-red-500/5 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Stats / Cantidad de testimonios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/30 rounded-full border border-gray-700/50">
            <span className="text-gray-400 text-sm">
              + de <span className="text-white font-bold">150</span> alumnos satisfechos
            </span>
          </div>
        </motion.div>

        {/* Keywords SEO */}
        <div className="sr-only">
          Testimonios alumnos Titanium Team Muay Thai Argentina. Reseñas de estudiantesboxeo tailandés. Opiniones sobre clases de artes marciales. Experiencias de entrenamiento.
        </div>
      </div>
    </section>
  );
}