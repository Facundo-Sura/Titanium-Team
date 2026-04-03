'use client';

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize, X, Zap, Award, Flame, Trophy, Clock, Target } from "lucide-react";

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

export default function CombatsPage() {
  const [current, setCurrent] = useState<Combat>(combats[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
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
            src="/contact.jpg"
            alt="Combates"
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
              <Trophy size={16} />
              En el ring
            </motion.span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white mb-6"
          >
            Com<span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">bates</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Videos y momento más recientes de nuestros peleadores en competencia.
          </motion.p>
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
          {/* Video principal */}
          <div className="flex-1">
            <motion.div
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
                  poster={current.thumbnail}
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
                      <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                        <Maximize className="text-white" size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Result badge */}
                <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-bold border ${getResultColor(current.result)}`}>
                  {current.result}
                </div>
              </motion.div>
            </motion.div>

            {/* Fight info */}
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

          {/* Sidebar con lista de combates */}
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
                      setIsPlaying(false);
                    }}
                    className={`group relative p-3 rounded-xl text-left transition-all duration-300 overflow-hidden ${
                      c.fighter === current.fighter 
                        ? "bg-red-600/20 border border-red-500/50" 
                        : "bg-gray-800/30 border border-gray-700/50 hover:border-red-500/30"
                    }`}
                  >
                    {/* Thumbnail */}
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

      {/* Lightbox Modal */}
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