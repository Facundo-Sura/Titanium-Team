'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, Flame } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Excelencia Técnica",
    desc: "Enseñamos la correcta técnica泰国 de Muay Thai, transmitiendo la tradición del arte"
  },
  {
    icon: Shield,
    title: "Formación Integral",
    desc: "Desarrollamos atletas fuertes física y mentalmente, con disciplina y respeto"
  },
  {
    icon: Flame,
    title: "Pasión por el Ring",
    desc: "Nuestra filosofía: entrenar con intensidad, competir con honor"
  }
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      {/* Elementos decorativos de fondo */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[150px]"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block text-red-500 font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Nuestra Historia
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Sobre Nosotros
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
        </motion.div>

        {/* Descripción principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Somos <span className="text-red-400 font-semibold">Titanium Team</span>, una escuela dedicada al{" "}
            <span className="text-white font-semibold">Muay Thai, Kickboxing y K1</span>. 
            Nuestro objetivo es formar atletas <span className="text-white">fuertes física y mentalmente</span>, 
            en un ambiente de <span className="text-red-400">respeto y disciplina</span>.
          </p>
          <p className="text-lg text-gray-400 mt-6 leading-relaxed">
            Aquí no solo aprendés a pegar — aprendés a <span className="text-white">ser mejor persona</span>. 
            Cada entrenamiento es una oportunidad de crecimiento.
          </p>
        </motion.div>

        {/* Highlights con icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: 0.3 + index * 0.15, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-b from-gray-800/50 to-black/50 p-8 rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
            >
              {/* Glow effect al hover */}
              <div className="absolute inset-0 rounded-2xl bg-red-500/0 group-hover:bg-red-500/5 transition-colors duration-300" />
              
              {/* Icono */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-600/30"
              >
                <item.icon className="text-white" size={32} />
              </motion.div>

              {/* Título */}
              <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:text-red-400 transition-colors">
                {item.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-400 text-center text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats / logros */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20"
        >
          {[
            { number: "2018", label: "Año de Fundación" },
            { number: "150+", label: "Alumnos Activos" },
            { number: "30+", label: "Competidores" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm mt-2 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}