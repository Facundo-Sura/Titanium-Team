'use client';

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, X, Zap, Award, Flame, Trophy, Clock, Target } from "lucide-react";

type Combat = {
  fighter: string;
  nickname: string;
  opponent: string;
  category: string;
  result: "Victoria" | "Derrota" | "Empate";
  date: string;
  duration: string;
  video: string;
  thumbnail: string;
};

const combats: Combat[] = [
  {
    fighter: "Alex Huanca",
    nickname: "El Guerrero",
    opponent: "Juan Pérez",
    category: "Kick - Semi Pro - 66kg",
    result: "Victoria",
    date: "15 de Marzo 2024",
    duration: "3 rounds",
    video: "/combates/roundx - ale.mp4",
    thumbnail: "/competidores/alex.jpg",
  },
  {
    fighter: "Lucas Muslera",
    nickname: "El Titán",
    opponent: "Martín Díaz",
    category: "Kick - Amateur - 70kg",
    result: "Victoria",
    date: "22 de Febrero 2024",
    duration: "3 rounds",
    video: "/combates/roundx - luqui.mp4",
    thumbnail: "/competidores/lucas.jpg",
  },
  {
    fighter: "Tiziano Pelssa",
    nickname: "Tizi",
    opponent: "Carlos Gómez",
    category: "Kick - Amateur - 65kg",
    result: "Victoria",
    date: "10 de Enero 2024",
    duration: "3 rounds",
    video: "/combates/roundx - tizi.mp4",
    thumbnail: "/competidores/tizi.jpg",
  },
  {
    fighter: "Cristian Cabral",
    nickname: "El León",
    opponent: "Pedro Sánchez",
    category: "Kick - Amateur - 72kg",
    result: "Victoria",
    date: "5 de Diciembre 2023",
    duration: "3 rounds",
    video: "/combates/entrada - ale.mp4",
    thumbnail: "/competidores/cris.jpg",
  },
  {
    fighter: "Noha Tosonieri",
    nickname: "El Fenómeno",
    opponent: "Jorge Lima",
    category: "Kick - Amateur - 83kg",
    result: "Victoria",
    date: "18 de Noviembre 2023",
    duration: "3 rounds",
    video: "/combates/roundy - ale.mp4",
    thumbnail: "/competidores/noha.jpg",
  },
  {
    fighter: "Fernando Gremo",
    nickname: "Feroz",
    opponent: "Sergio Torres",
    category: "Kick - Light - 60kg",
    result: "Victoria",
    date: "5 de Octubre 2023",
    duration: "3 rounds",
    video: "/combates/roundy - tizi.mp4",
    thumbnail: "/competidores/fer.jpg",
  },
];

export default function CombatesPage() {
  const [current, setCurrent] = useState<Combat>(combats[0]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!videoRef.current) return;
      
      switch (e.key.toLowerCase()) {
        case 'f':
          if (!document.fullscreenElement && videoContainerRef.current) {
            videoContainerRef.current.requestFullscreen();
          } else if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
        case 'm':
          videoRef.current.muted = !videoRef.current.muted;
          break;
        case 'escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
        case ' ':
        case 'k':
          e.preventDefault();
          handleVideoClick();
          break;
      }
    };

    if (typeof window !== 'undefined' && !('ontouchstart' in window)) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  const getResultColor = (result: string) => {
    switch (result) {
      case "Victoria": return "text-green-400 bg-green-500/20 border-green-500/30";
      case "Derrota": return "text-red-400 bg-red-500/20 border-red-500/30";
      case "Empate": return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30";
      default: return "text-gray-400 bg-gray-500/20 border-gray-500/30";
    }
  };

  return (
    <main ref={containerRef} className="font-sans bg-black min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 z-50"
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
      />

      {/* Hero Section con animación de guantes */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Imagen de fondo */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Image
            src="/contact.jpg"
            alt="Combates"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </motion.div>

        {/* Glow effects */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[150px]"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>

        {/* Guantes de boxeo animación */}
        <div className="relative z-20 w-full h-full flex items-center justify-center">
          {/* Explosión/Impacto en el centro */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div
              className="absolute w-20 h-20 rounded-full border-4 border-red-500"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.div
              className="absolute w-32 h-32 rounded-full border-2 border-yellow-400"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            />
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ 
                  x: Math.cos(i * 30 * Math.PI / 180) * 100,
                  y: Math.sin(i * 30 * Math.PI / 180) * 100,
                  opacity: 0,
                  scale: 0
                }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            ))}
          </motion.div>

          {/* Guante izquierdo - ROJO */}
          <motion.div
            className="absolute left-1/2"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: -250, opacity: [1, 1, 0] }}
            transition={{ 
              delay: 0.2,
              duration: 2.3,
              times: [0, 0.3, 1],
              type: "spring",
              stiffness: 150,
              damping: 15
            }}
          >
            <svg width="180" height="180" viewBox="0 0 100 100" className="drop-shadow-2xl">
              <defs>
                <linearGradient id="gloveRed" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="50%" stopColor="#b91c1c" />
                  <stop offset="100%" stopColor="#7f1d1d" />
                </linearGradient>
                <filter id="glowRed">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <g filter="url(#glowRed)">
                <path d="M50 10 C25 10 15 30 15 50 C15 70 25 85 40 90 C45 92 50 95 55 90 C70 85 80 70 80 50 C80 30 70 10 50 10 Z" fill="url(#gloveRed)" stroke="#7f1d1d" strokeWidth="2"/>
                <path d="M30 35 Q40 30 50 35 Q60 40 65 50" fill="none" stroke="#fca5a5" strokeWidth="2" opacity="0.5"/>
                <circle cx="40" cy="55" r="5" fill="#7f1d1d"/>
                <circle cx="50" cy="50" r="5" fill="#7f1d1d"/>
                <circle cx="60" cy="55" r="5" fill="#7f1d1d"/>
                <text x="50" y="72" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="bold" opacity="0.7">TITANIUM</text>
              </g>
            </svg>
          </motion.div>

          {/* Guante derecho - AZUL */}
          <motion.div
            className="absolute right-1/2"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 250, opacity: [1, 1, 0] }}
            transition={{ 
              delay: 0.2,
              duration: 2.3,
              times: [0, 0.3, 1],
              type: "spring",
              stiffness: 150,
              damping: 15
            }}
          >
            <svg width="180" height="180" viewBox="0 0 100 100" className="drop-shadow-2xl" style={{ transform: 'scaleX(-1)' }}>
              <defs>
                <linearGradient id="gloveBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>
                <filter id="glowBlue">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <g filter="url(#glowBlue)">
                <path d="M50 10 C25 10 15 30 15 50 C15 70 25 85 40 90 C45 92 50 95 55 90 C70 85 80 70 80 50 C80 30 70 10 50 10 Z" fill="url(#gloveBlue)" stroke="#1e3a8a" strokeWidth="2"/>
                <path d="M30 35 Q40 30 50 35 Q60 40 65 50" fill="none" stroke="#93c5fd" strokeWidth="2" opacity="0.5"/>
                <circle cx="40" cy="55" r="5" fill="#1e3a8a"/>
                <circle cx="50" cy="50" r="5" fill="#1e3a8a"/>
                <circle cx="60" cy="55" r="5" fill="#1e3a8a"/>
                <text x="50" y="72" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold" opacity="0.7">TITANIUM</text>
              </g>
            </svg>
          </motion.div>

          {/* Texto que aparece después del impacto */}
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mb-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-red-600/20 border border-red-500/40 rounded-full text-red-400 font-semibold text-sm"
              >
                <Trophy size={16} />
                En el ring
              </motion.span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white mb-6"
            >
              Com<span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">bates</span>
            </motion.h1>
          
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            >
              Videos y momento más recientes de nuestros peleadores en competencia.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { number: "25+", label: "Combates", icon: Trophy },
              { number: "18", label: "Victorias", icon: Award },
              { number: "3", label: "KO's", icon: Flame },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
              >
                <stat.icon className="mx-auto text-red-500 mb-2" size={24} />
                <div className="text-3xl font-black text-white">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Video Section */}
      <section className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <motion.div
              ref={videoContainerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                setRotation({
                  x: (y - 0.5) * 8,
                  y: (0.5 - x) * 8,
                });
              }}
              onMouseLeave={() => setRotation({ x: 0, y: 0 })}
            >
              <motion.div
                style={{
                  rotateX: rotation.x,
                  rotateY: rotation.y,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-red-600/20 border border-gray-800"
              >
                <video
                  ref={videoRef}
                  src={current.video}
                  className="w-full h-full object-cover"
                  onClick={handleVideoClick}
                  onTouchStart={handleVideoClick}
                  poster={current.thumbnail}
                  playsInline
                  controls
                  controlsList="nodownload"
                />
                <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-bold border ${getResultColor(current.result)}`}>
                  {current.result}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl font-black text-white">
                  {current.fighter}
                </h2>
                <span className="text-red-400 font-medium text-lg">vs {current.opponent}</span>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Target size={14} className="text-red-500" />
                  {current.category}
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={14} className="text-red-500" />
                  {current.date}
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Zap size={14} className="text-red-500" />
                  {current.duration}
                </div>
              </div>
            </motion.div>
          </div>

          <aside className="lg:w-96">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-4 sticky top-24"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="text-red-500" size={18} />
                Todos los combates
              </h3>
              
              <div className="flex flex-col gap-3 max-h-[70vh] overflow-y-auto pr-2">
                {combats.map((c, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    onClick={() => {
                      setCurrent(c);
                    }}
                    className={`group relative p-3 rounded-xl text-left transition-all duration-300 overflow-hidden ${
                      c.fighter === current.fighter 
                        ? "bg-red-600/20 border border-red-500/50" 
                        : "bg-gray-800/30 border border-gray-700/50 hover:border-red-500/30"
                    }`}
                  >
                    <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                      <Image
                        src={c.thumbnail}
                        alt={c.fighter}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="relative z-10 flex gap-3 items-center">
                      <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={c.thumbnail}
                          alt={c.fighter}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="text-white" size={16} fill="white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-white font-bold text-sm truncate group-hover:text-red-400 transition-colors">
                            {c.fighter}
                          </p>
                          <span className={`text-xs px-1.5 py-0.5 rounded ${getResultColor(c.result)}`}>
                            {c.result === "Victoria" ? "V" : c.result === "Derrota" ? "D" : "E"}
                          </span>
                        </div>
                        <p className="text-gray-500 text-xs">vs {c.opponent}</p>
                        <p className="text-gray-600 text-xs">{c.date}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
