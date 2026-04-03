'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const title = "TITANIUM'S TEAM";
  const subtitle = "Escuela de Muay Thai & Kickboxing";
  const buttonText = "Reserva tu clase gratis";

  return (
    <section 
      ref={containerRef}
      className="h-screen bg-[url('/logo.jpg')] bg-cover bg-center flex items-center justify-center relative overflow-hidden"
    >
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      
      {/* Efecto de partículas/glow en el fondo */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Contenido con parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4"
      >
        {/* Título con animación y glow rojo */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]">
            {title}
          </span>
        </motion.h1>

        {/* Subtítulo con fade in */}
        <motion.p
          className="mt-6 text-xl md:text-3xl text-gray-200 font-medium max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>

        {/* Botón con efecto glow y hover */}
        <motion.a
          href="#contact"
          className="mt-10 inline-block relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glow effect detrás */}
          <span className="absolute -inset-2 bg-red-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
          
          {/* Botón principal */}
          <span className="relative block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-10 py-4 rounded-xl font-bold text-lg tracking-wide shadow-2xl border border-red-400/30">
            {buttonText}
          </span>
        </motion.a>
      </motion.div>

      {/* Indicador de scroll animado */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-3 bg-red-500 rounded-full"
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}