'use client';

import { motion } from "framer-motion";
import { Clock, Calendar, Flame, Users, Target } from "lucide-react";

const schedule = [
  {
    day: "Lunes",
    classes: [
      { time: "09:00 - 10:30", name: "Muay Thai Principiantes", level: "Iniciación" },
      { time: "18:00 - 19:30", name: "Kickboxing", level: "Todos los niveles" },
      { time: "19:30 - 21:00", name: "Muay Thai Avanzado", level: "Avanzado" },
    ],
  },
  {
    day: "Martes",
    classes: [
      { time: "09:00 - 10:30", name: "Muay Thai", level: "Todos los niveles" },
      { time: "17:00 - 18:30", name: "Kids Muay Thai", level: "Niños 6-12 años" },
      { time: "20:00 - 21:30", name: "K1 Training", level: "Avanzado" },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { time: "09:00 - 10:30", name: "Muay Thai Principiantes", level: "Iniciación" },
      { time: "18:00 - 19:30", name: "Kickboxing", level: "Todos los niveles" },
      { time: "19:30 - 21:00", name: "Sparring", level: "Intermedio-Avanzado" },
    ],
  },
  {
    day: "Jueves",
    classes: [
      { time: "09:00 - 10:30", name: "Muay Thai", level: "Todos los niveles" },
      { time: "17:00 - 18:30", name: "Kids Muay Thai", level: "Niños 6-12 años" },
      { time: "20:00 - 21:30", name: "K1 Training", level: "Avanzado" },
    ],
  },
  {
    day: "Viernes",
    classes: [
      { time: "09:00 - 10:30", name: "Muay Thai Principiantes", level: "Iniciación" },
      { time: "18:00 - 19:30", name: "Kickboxing", level: "Todos los niveles" },
      { time: "19:30 - 21:00", name: "Fight Club", level: "Avanzado" },
    ],
  },
  {
    day: "Sábado",
    classes: [
      { time: "10:00 - 11:30", name: "Clase Maestra", level: "Todos los niveles" },
      { time: "11:30 - 13:00", name: "Técnica y Estrategia", level: "Intermedio" },
    ],
  },
];

const features = [
  { icon: Clock, text: "Horarios flexibles para todos" },
  { icon: Users, text: "Grupos reducidos para mejor atención" },
  { icon: Flame, text: "Alta intensidad garantizada" },
  { icon: Target, text: "Instructor certificado" },
];

export default function Schedule() {
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
        className="absolute top-40 left-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-40 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Entrená cuando puedas
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Nuestros{' '}
            <span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">
              Horarios
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
        </motion.div>

        {/* Grid de horarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group bg-gray-800/30 border border-gray-700/50 rounded-2xl p-5 hover:border-red-500/50 hover:bg-gray-800/50 transition-all duration-300"
            >
              {/* Día */}
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-red-500" size={20} />
                <h3 className="text-lg font-bold text-white">{day.day}</h3>
              </div>

              {/* Clases */}
              <div className="space-y-3">
                {day.classes.map((cls, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-gray-700 pl-3 pb-2 last:border-0">
                    <span className="text-red-400 text-sm font-medium">{cls.time}</span>
                    <span className="text-white font-semibold">{cls.name}</span>
                    <span className="text-gray-500 text-xs">{cls.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className="flex items-center gap-3 p-4 bg-gray-800/20 rounded-xl border border-gray-700/30"
            >
              <feat.icon className="text-red-500 flex-shrink-0" size={24} />
              <span className="text-gray-300 text-sm font-medium">{feat.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Nota informativa SEO */}
        <div className="sr-only">
          Horarios de entrenamiento Muay Thai, Kickboxing, K1 Argentina. Clases para niños, principiantes, intermedios y avanzados. Entrenamiento matutino y vespertino.
        </div>
      </div>
    </section>
  );
}