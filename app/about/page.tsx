'use client';

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Heart, Shield, Flame, Play, ChevronDown, Star, Award, Users, Zap } from "lucide-react";

const coaches = [
  {
    name: "David Bertossi",
    role: "Head Coach - Muay Thai",
    bio: "Con más de 15 años de experiencia en el ring y múltiples títulos regionales, David transmite la tradición del Muay Thai tailandés con pasión y dedicación.",
    image: "/profes/coach1.jpg",
    specialties: ["Técnica Thailandesa", "Sparring", "Preparación Competitiva"],
    achievements: ["5 títulos regionales", "50+ combates"],
  },
  {
    name: "Alex Huanca",
    role: "Coach - Kickboxing",
    bio: "Especialista en Kickboxing y K1, Alex combina técnicas de Japón y Occidente para crear un estilo único y efectivo en el ring.",
    image: "/profes/coach2.jpg",
    specialties: ["Kickboxing Deportivo", "K1", "Cardio de Combate"],
    achievements: ["3 títulos nacionales", "Experiencia internacional"],
  },
  {
    name: "Noha Tosonieri",
    role: "Preparador Físico",
    bio: "Con background en sports science, Noha diseña programas de entrenamiento que maximizan el rendimiento sin comprometer la salud.",
    image: "/profes/coach3.jpg",
    specialties: ["Acondicionamiento", "Lesiones", "Nutrición"],
    achievements: ["Lic. Ciencias del Deporte", "Especialización en Deportes de Combate"],
  },
];

const values = [
  {
    icon: Shield,
    title: "Disciplina",
    description: "Entrenamos mente y cuerpo con constancia. La disciplina es el fundamento de todo logro en las artes marciales.",
  },
  {
    icon: Heart,
    title: "Respeto",
    description: "Crecemos como comunidad apoyándonos mutuamente. Respetamos al compañero, al instructor y al arte.",
  },
  {
    icon: Flame,
    title: "Superación",
    description: "Nos esforzamos cada día para superar nuestros límites. El crecimiento personal es el verdadero premio.",
  },
];

const timeline = [
  { year: "2018", title: "Fundación", desc: "Nace Titanium Team con un sueño" },
  { year: "2019", title: "Primer Título", desc: "David gana su primer título regional" },
  { year: "2020", title: "Expansión", desc: "Ampliamos a más disciplinas" },
  { year: "2021", title: "Comunidad", desc: "Alcanzamos 100 alumnos" },
  { year: "2022", title: "Internacional", desc: "Competidores en tournaments abroad" },
  { year: "2024", title: "Líderes", desc: "Referentes en el país" },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1]);

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
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <Image
            src="/team.jpg"
            alt="Nuestro equipo"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        {/* Multi-layer overlay */}
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </motion.div>

        {/* Animated particles/glow */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-red-600/30 rounded-full blur-[200px]"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[150px]"
            animate={{ 
              x: [0, -30, 0],
              y: [0, 50, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            {/* Animated badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 font-semibold text-sm tracking-wider"
            >
              <Star size={14} className="animate-pulse" />
              Desd 2018
            </motion.span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6"
          >
            Sobre <span className="text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text">Nosotros</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Más que un gimnasio, somos una familia dedicada al arte del combate.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white/50 text-xs tracking-widest">SCROLL</span>
              <ChevronDown className="text-white/50" size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Historia con Timeline */}
      <section ref={timelineRef} className="py-32 px-6 relative bg-gradient-to-b from-black via-gray-900/80 to-black overflow-hidden">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/50 to-transparent hidden md:block" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-red-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Nuestra Trayectoria
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white">
              Un camino de <span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">superación</span>
            </h2>
          </motion.div>

          <div className="space-y-8 md:space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex items-center md:justify-${index % 2 === 0 ? 'start' : 'end'} mb-8 md:mb-16`}
              >
                <div className={`flex items-center gap-8 max-w-lg ${index % 2 === 0 ? '' : 'ml-auto flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`text-center ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                  
                  {/* Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50 flex-shrink-0 relative z-10">
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-red-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo con reveal stagger */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/10 rounded-full blur-[150px]"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-red-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Los pilares
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Nuestro <span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">Equipo</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Personas extraordinarias que dedican su vida a transmitir el arte del combate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-b from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl overflow-hidden backdrop-blur-sm">
                  {/* Imagen con overlay */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={coach.image}
                        alt={coach.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                    
                    {/* Red overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-red-600/20 mix-blend-overlay"
                    />
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 pt-4">
                    <motion.h3 
                      className="text-3xl font-black text-white mb-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {coach.name}
                    </motion.h3>
                    <p className="text-red-400 font-semibold mb-4">{coach.role}</p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {coach.bio}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {coach.specialties.map((spec, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full backdrop-blur-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="flex gap-3">
                      {coach.achievements.map((ach, i) => (
                        <div key={i} className="flex items-center gap-1 text-yellow-500/80 text-xs">
                          <Award size={12} />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Glow border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-3xl transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores con parallax scroll */}
      <section className="py-32 px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/muaythai.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }}
        />

        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[180px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-red-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Lo que nos define
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Nuestros <span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">Valores</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="group perspective-1000"
              >
                <div className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-3xl p-10 backdrop-blur-sm hover:border-red-500/50 transition-all duration-500">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.8 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center mb-8 shadow-2xl shadow-red-600/30"
                  >
                    <value.icon className="text-white" size={36} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats flotantes con scroll */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "6+", label: "Años", icon: Zap },
              { number: "150+", label: "Alumnos", icon: Users },
              { number: "50+", label: "Combates", icon: Award },
              { number: "8", label: "Títulos", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/30 mb-4"
                >
                  <stat.icon className="text-red-500" size={24} />
                </motion.div>
                <div className="text-4xl md:text-5xl font-black text-white">{stat.number}</div>
                <div className="text-gray-500 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final inmersivo */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background video feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-black to-blue-900/30" />
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }}
        />

        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[200px]"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white mb-8"
          >
            ¿Listo para{' '}
            <span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">
              comenzar
            </span>
            ?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-400 mb-12"
          >
            Vení a probar una clase gratis y descubrí por qué somos referencia en el país.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(220,38,38,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg"
            >
              <Play size={20} />
              Reservá tu clase gratis
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}