'use client';

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Trophy, Medal, Target, Zap, Award, Crown, Flame } from "lucide-react";

const competitors = [
  {
    name: "Alex Huanca",
    nickname: "El Guerrero",
    category: "Semi Pro - Kickboxing - 66kg",
    record: "4-1",
    achievements: [
      "Campeón Regional",
      "3 KO's en su carrera",
      "Mejor Técnica 2024",
    ],
    img: "/competidores/alex.jpg",
    status: "active",
  },
  {
    name: "Cristian Cabral",
    nickname: "El León",
    category: "Kick Amateur - 72kg",
    record: "Invicto",
    achievements: [
      "3x Oro Torneos Regionales",
      "Subcampión Nacional",
      "Más Combates del Año",
    ],
    img: "/competidores/cris.jpg",
    status: "active",
  },
  {
    name: "Noha Tosonieri",
    nickname: "El Fenómeno",
    category: "Kick Amateur - 83kg",
    record: "En desarrollo",
    achievements: [
      "4 peleas disputadas",
      "Promesa del Año 2023",
      "Estilo único",
    ],
    img: "/competidores/noha.jpg",
    status: "active",
  },
  {
    name: "Tiziano Pelssa",
    nickname: "Tizi",
    category: "Kick Amateur",
    record: "En desarrollo",
    achievements: [
      "4 peleas disputadas",
      "Más prometedor rookie",
      "Técnica en progreso",
    ],
    img: "/competidores/tizi.jpg",
    status: "rising",
  },
  {
    name: "Lucas Muslera",
    nickname: "El Titán",
    category: "Kick Amateur",
    record: "1-1-1",
    achievements: [
      "Experiencia internacional",
      "Espíritu de luchador",
      "En reconstrucción",
    ],
    img: "/competidores/lucas.jpg",
    status: "active",
  },
  {
    name: "Fernando Gremo",
    nickname: "Feroz",
    category: "Kick Light",
    record: "Debutando",
    achievements: [
      "Primera pelea",
      "Gran potencial",
      "Aprendizaje continuo",
    ],
    img: "/competidores/fer.jpg",
    status: "new",
  },
];

const stats = [
  { number: "25+", label: "Combates Totales", icon: Trophy },
  { number: "18", label: "Victorias", icon: Medal },
  { number: "6", label: "Títulos", icon: Crown },
  { number: "3", label: "KO's", icon: Flame },
];

export default function PupilsPage() {
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

  return (
    <main ref={containerRef} className="font-sans bg-black">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 z-50"
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/competidores.jpg"
            alt="Nuestros competidores"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </motion.div>

        {/* Animated glow */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-[180px]"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-400 font-semibold text-sm"
            >
              <Crown size={16} />
              Elite Warriors
            </motion.span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white mb-6"
          >
            Nuestros{' '}
            <span className="text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text">
              Competidores
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Los atletas que representan con honor los colores de Titanium Team en cada ring.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-yellow-500/20 border border-yellow-500/30 mb-4"
                >
                  <stat.icon className="text-yellow-500" size={24} />
                </motion.div>
                <div className="text-4xl md:text-5xl font-black text-white">{stat.number}</div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitors Grid */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div 
          className="absolute top-40 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block text-yellow-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
              En el ring
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Nuestra <span className="text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text">Armada</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cada competidor representa años de entrenamiento, sacrificio y pasión por el arte del combate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitors.map((comp, index) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-500">
                  {/* Imagen */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={comp.img}
                        alt={comp.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                    
                    {/* Status badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm ${
                        comp.status === 'active' ? 'bg-green-500/80 text-white' :
                        comp.status === 'rising' ? 'bg-blue-500/80 text-white' :
                        'bg-gray-500/80 text-white'
                      }`}>
                        {comp.status === 'active' ? 'Activo' : comp.status === 'rising' ? 'Ascenso' : 'Nuevo'}
                      </span>
                    </div>

                    {/* Nickname */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-red-600/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                        &quot;{comp.nickname}&quot;
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 -mt-20 relative z-10">
                    <div className="text-center">
                      <h3 className="text-2xl font-black text-white mb-1">{comp.name}</h3>
                      <p className="text-yellow-400 font-semibold text-sm mb-3">{comp.category}</p>
                      
                      {/* Record */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full mb-4">
                        <Target size={14} className="text-red-500" />
                        <span className="text-white font-bold text-sm">{comp.record}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {comp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                          <Award size={12} className="text-yellow-500 flex-shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/5 transition-colors duration-500 pointer-events-none rounded-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-red-900/20 via-black to-yellow-900/20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            ¿Querés{' '}
            <span className="text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text">
              competir
            </span>
            ?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-8"
          >
            Empezá tu camino en el ring. Te preparamos para tu primera pelea.
          </motion.p>
          
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-10 py-5 rounded-2xl font-bold text-lg"
          >
            <Zap />
            Empezá tu camino
          </motion.a>
        </div>
      </section>
    </main>
  );
}