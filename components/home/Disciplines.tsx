'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Shield, Flame, Target, Heart, TrendingUp } from "lucide-react";

const disciplines = [
  {
    name: "Muay Thai",
    image: "/muaythai.jpg",
    tagline: "El Arte de los 8 Miembros",
    description: "El Muay Thai, conocido como el \"arte de los ocho miembros\", es el arte marcial tailandés más antiguo y completo. Utiliza puños, codos, rodillas y piernas, convirtiéndose en una disciplina integral de combate.",
    history: "Con más de 500 años de historia, el Muay Thai nació en Tailandia como arte de guerra y evolucionó hasta convertirse en deporte nacional. Cada patada, golpe y movimiento lleva la esencia de la tradición tailandesa.",
    benefits: [
      { icon: Flame, text: "Mejora tu condición física al máximo" },
      { icon: Shield, text: "Aprende defensa personal real" },
      { icon: Heart, text: "Desarrolla disciplina mental" },
      { icon: Zap, text: "Quema calorías rapidísimo" },
    ],
    forWho: "Para quienes buscan un entrenamiento intenso y completo",
    keywords: ["Muay Thai", "boxeo tailandés", "artes marciales", "defensa personal"],
  },
  {
    name: "Kickboxing",
    image: "/kickboxing.jpg",
    tagline: "Potencia y Precisión",
    description: "El Kickboxing combina la potencia del boxeo con patadas de karate, creando un estilo dinámico y explosivo. Es perfecto para quienes buscan cardio de alta intensidad + técnica de combate.",
    history: "Nacido en Japón en los años 60, el Kickboxing evolucionó desde el Karate kyokushin mezclado con boxeo occidental. Hoy es uno de los deportes de combate más populares del mundo.",
    benefits: [
      { icon: TrendingUp, text: "Aumenta tu coordinación y reflejos" },
      { icon: Target, text: "Mejora tu precisión y timing" },
      { icon: Flame, text: "Entrenamiento funcional completo" },
      { icon: Heart, text: "Reduce estrés y ansiedad" },
    ],
    forWho: "Para quienes buscan cardio intenso con técnica",
    keywords: ["Kickboxing", "cardio", "deporte de combate", "entrenamiento"],
  },
  {
    name: "K1",
    image: "/k1.jpg",
    tagline: "La Forma más Pura de Combate",
    description: "El K1 es la variante más dura y competitiva del kickboxing. Se caracteriza por reglas que permiten golpes más potentes y técnicas explosivas. Es la categoría más exigente del combate de pie.",
    history: "Fundado en Japón en 1993, el K1 se convirtió en la organización de combate más prestigiosa del mundo. Combina lo mejor de múltiples artes marciales en un规则 moderno y agresivo.",
    benefits: [
      { icon: Zap, text: "Prepárate para competir" },
      { icon: Flame, text: "Desarrolla potencia explosiva" },
      { icon: Shield, text: "Resistencia mental extrema" },
      { icon: Target, text: "Técnica de nivel competitivo" },
    ],
    forWho: "Para competidores y quienes buscan el siguiente nivel",
    keywords: ["K1", "competencia", "deporte de combate", "torneos"],
  },
];

export default function Disciplines() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Fondo con efecto de cuadrícula sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decoración */}
      <motion.div 
        className="absolute top-20 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-red-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Nuestras Disciplinas
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Entrena como un{' '}
            <span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">
              Campeón
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
        </motion.div>

        {/* Disciplinas con layout alternado */}
        <div className="space-y-24 md:space-y-32">
          {disciplines.map((disc, index) => (
            <motion.div
              key={disc.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Imagen */}
              <motion.div 
                className="w-full md:w-1/2 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  {/* Imagen */}
                  <Image
                    src={disc.image}
                    alt={disc.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Etiqueta flotante */}
                  <motion.div 
                    className="absolute bottom-6 left-6 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-white font-bold text-sm uppercase tracking-wider">
                      {disc.tagline}
                    </span>
                  </motion.div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-2xl transition-all duration-300" />
                </div>
              </motion.div>

              {/* Contenido */}
              <div className="w-full md:w-1/2">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                    {disc.name}
                  </h3>
                  <p className="text-red-400 text-lg font-medium mb-6">
                    {disc.tagline}
                  </p>
                </motion.div>

                {/* Descripción */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-gray-300 text-lg leading-relaxed mb-6"
                >
                  {disc.description}
                </motion.p>

                {/* Historia breve */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-gray-800/30 border-l-4 border-red-500 pl-4 py-3 mb-6 rounded-r-lg"
                >
                  <p className="text-gray-400 text-sm italic">
                    {disc.history}
                  </p>
                </motion.div>

                {/* Beneficios */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="grid grid-cols-2 gap-3 mb-6"
                >
                  {disc.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-400">
                      <benefit.icon size={16} className="text-red-500 flex-shrink-0" />
                      <span className="text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Para quién es */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-transparent px-4 py-2 rounded-full border border-red-500/30"
                >
                  <Target size={16} className="text-red-400" />
                  <span className="text-white text-sm font-medium">{disc.forWho}</span>
                </motion.div>

                {/* Keywords SEO (oculto visualmente pero indexable) */}
                <div className="sr-only">
                  {disc.keywords.join(", ")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}