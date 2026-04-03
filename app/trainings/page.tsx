'use client';

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight, X, RotateCcw, Zap, Flame, Award } from "lucide-react";

type Training = {
  title: string;
  description: string;
  duration: string;
  difficulty: "Iniciación" | "Intermedio" | "Avanzado";
  video: string;
  images: string[];
};

const trainings: Training[] = [
  {
    title: "Entrenamiento con Paos",
    description: "Trabajo de golpes básicos con enfoque en resistencia, técnica y combinaciones. Ejercicios para mejorar timing y precisión.",
    duration: "45 min",
    difficulty: "Iniciación",
    video: "/entrenamientos/entrenamiento con paos.mp4",
    images: [
      "/entrenamientos/entrenamiento con paos.jpg",
      "/entrenamientos/entrenamiento con paos(1).jpg",
    ],
  },
  {
    title: "Técnica y Transferencia",
    description: "Práctica de técnicas de ataque y defensa en combate. Cómo aplicar lo aprendido en el gym al ring.",
    duration: "60 min",
    difficulty: "Intermedio",
    video: "/entrenamientos/transferencia.mp4",
    images: [
      "/entrenamientos/entrenamiento con paos.jpg",
      "/entrenamientos/entrenamiento con paos(1).jpg",
    ],
  },
  {
    title: "Sparring: Tizi vs Nico",
    description: "Sesión de sparring entre competidores. Práctica de combate en tiempo real con compañero.",
    duration: "30 min",
    difficulty: "Avanzado",
    video: "/entrenamientos/tizi vs nico.mp4",
    images: [
      "/entrenamientos/dia-de-spa1.jpg",
      "/entrenamientos/dia-de-spa2.jpg",
    ],
  },
  {
    title: "Sparring: Ale vs Nico",
    description: "Sparring intenso entre两名 luchadores. Combates reales para ganar experiencia.",
    duration: "30 min",
    difficulty: "Avanzado",
    video: "/entrenamientos/ale vs nico.mp4",
    images: [
      "/entrenamientos/dia-de-spa1.jpg",
      "/entrenamientos/dia-de-spa2.jpg",
    ],
  },
  {
    title: "Sparring: Gere vs Luqui",
    description: "Sparring de alta intensidad. Trabajo de combinaciones y defensa.",
    duration: "30 min",
    difficulty: "Avanzado",
    video: "/entrenamientos/gere vs luqui.mp4",
    images: [
      "/entrenamientos/dia-de-spa1.jpg",
      "/entrenamientos/dia-de-spa2.jpg",
    ],
  },
  {
    title: "Sparring: Cris vs Ale",
    description: "Combate de entrenamiento entre两名 atletas. Sesión de presión alta.",
    duration: "30 min",
    difficulty: "Avanzado",
    video: "/entrenamientos/cris vs ale.mp4",
    images: [
      "/entrenamientos/dia-de-spa1.jpg",
      "/entrenamientos/dia-de-spa2.jpg",
    ],
  },
];

export default function Training() {
  const [current, setCurrent] = useState<Training>(trainings[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciación": return "text-green-400 bg-green-500/20 border-green-500/30";
      case "Intermedio": return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30";
      case "Avanzado": return "text-red-400 bg-red-500/20 border-red-500/30";
      default: return "text-gray-400 bg-gray-500/20 border-gray-500/30";
    }
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
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/entrenamientos/background.jpg"
            alt="Entrenamientos"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </motion.div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[150px]"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
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
              className="inline-flex items-center gap-2 px-6 py-2 bg-red-600/20 border border-red-500/40 rounded-full text-red-400 font-semibold text-sm"
            >
              <Flame size={16} />
              Entrena como un campeón
            </motion.span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white mb-6"
          >
            Entrena<span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">mientos</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Videos y fotos de nuestras sesiones de entrenamiento.
          </motion.p>
        </div>
      </section>

      {/* Main Video Section with 3D effect */}
      <section className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Video principal */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-red-600/20 border border-gray-800"
              >
                <video
                  ref={videoRef}
                  src={current.video}
                  className="w-full h-full object-cover"
                  onClick={handleVideoClick}
                  poster={current.images[0]}
                />
                
                {/* Overlay con controles */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <button
                          onClick={handleVideoClick}
                          className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition"
                        >
                          {isPlaying ? <Pause className="text-white" size={20} /> : <Play className="text-white ml-1" size={20} />}
                        </button>
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                        >
                          {isMuted ? <VolumeX className="text-white" size={18} /> : <Volume2 className="text-white" size={18} />}
                        </button>
                      </div>
                      <button
                        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                      >
                        <Maximize className="text-white" size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Difficulty badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(current.difficulty)}`}>
                  {current.difficulty}
                </div>

                {/* Duration badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center gap-1">
                  <Zap size={12} className="text-yellow-400" />
                  {current.duration}
                </div>
              </motion.div>
            </motion.div>

            {/* Video info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <h2 className="text-3xl font-black text-white mb-2">
                {current.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {current.description}
              </p>
            </motion.div>

            {/* Galería de imágenes */}
            <div className="mt-8">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Award className="text-red-500" size={18} />
                Galería
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {current.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="relative aspect-square cursor-pointer group perspective-500"
                    onClick={() => openLightbox(i)}
                  >
                    <div className="absolute inset-0 rounded-lg overflow-hidden border border-gray-700 group-hover:border-red-500/50 transition-colors">
                      <Image
                        src={img}
                        alt={`Foto ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white text-2xl">+</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar con lista de entrenamientos */}
          <aside className="lg:w-96">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-4 sticky top-24"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <RotateCcw className="text-red-500" size={18} />
                Todos los entrenamientos
              </h3>
              
              <div className="flex flex-col gap-3 max-h-[70vh] overflow-y-auto pr-2">
                {trainings.map((t, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    onClick={() => {
                      setCurrent(t);
                      setIsPlaying(false);
                    }}
                    className={`group relative p-3 rounded-xl text-left transition-all duration-300 overflow-hidden ${
                      t.title === current.title 
                        ? "bg-red-600/20 border border-red-500/50" 
                        : "bg-gray-800/30 border border-gray-700/50 hover:border-red-500/30"
                    }`}
                  >
                    {/* Video thumbnail */}
                    <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                      <video
                        src={t.video}
                        className="w-full h-full object-cover"
                        muted
                      />
                    </div>
                    
                    <div className="relative z-10 flex gap-3 items-center">
                      <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={t.images[0]}
                          alt={t.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="text-white" size={16} fill="white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-bold text-sm truncate group-hover:text-red-400 transition-colors">
                          {t.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs px-2 py-0.5 rounded ${getDifficultyColor(t.difficulty)}`}>
                            {t.difficulty}
                          </span>
                          <span className="text-gray-500 text-xs">{t.duration}</span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, rotateX: -10 }}
              animate={{ scale: 1, rotateX: 0 }}
              exit={{ scale: 0.8, rotateX: -10 }}
              className="relative w-full max-w-5xl aspect-video mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.images[lightboxIndex]}
                alt="Ampliada"
                fill
                className="object-contain rounded-lg"
              />

              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition"
              >
                <X size={32} />
              </button>

              {lightboxIndex > 0 && (
                <button
                  onClick={() => setLightboxIndex(lightboxIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
                >
                  <ChevronLeft className="text-white" size={24} />
                </button>
              )}

              {lightboxIndex < current.images.length - 1 && (
                <button
                  onClick={() => setLightboxIndex(lightboxIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
                >
                  <ChevronRight className="text-white" size={24} />
                </button>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {current.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className={`w-2 h-2 rounded-full transition ${
                      i === lightboxIndex ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}