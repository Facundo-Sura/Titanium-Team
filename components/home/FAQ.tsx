'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "¿Necesito experiencia previa para comenzar?",
    answer: "No, absolutamente no. Nuestras clases están diseñadas para principiantes absolutos. Muchos de nuestros mejores competidores started desde cero. El instructor te enseñará todo desde lo más básico.",
    category: "Principiantes",
  },
  {
    question: "¿Qué debo llevar a mi primera clase?",
    answer: "Solo necesitás ropa cómoda para hacer ejercicio (remera y short o pants), algo de agua y una toalla. Мы tenemos vestuarios y Duchas disponibles. Si tenés guantes de boxeo, traélos, pero no es obligatorio.",
    category: "Preparación",
  },
  {
    question: "¿Hay límite de edad para entrenar?",
    answer: "Aceptamos desde niños de 6 años hasta adultos de cualquier edad. Tenemos clases específicas para kids (6-12 años), jóvenes (13-17) y adultos (18+). Nunca es tarde para empezar.",
    category: "Edades",
  },
  {
    question: "¿Cuántas veces por semana debería entrenar?",
    answer: "Depende de tu objetivo. Para principiantes, 2-3 veces por semana es ideal para adaptar tu cuerpo. Para quienes buscan competir o mejorar rápido, 4-5 veces. Siempre escuchamos a tu cuerpo y descansamos cuando необходимо.",
    category: "Frecuencia",
  },
  {
    question: "¿Las clases son mixtas (hombres y mujeres)?",
    answer: "Sí, nuestras clases son mixtas. El entrenamiento es inclusivo y respetuoso. Muchas de nuestras mejores atletas son mujeres y compiten en el más alto nivel. La intensidad se adapta a cada persona.",
    category: "Inclusión",
  },
  {
    question: "¿Qué nivel de condición física necesito?",
    answer: "Ninguno específico. Empezás con lo que tengas y vas mejorando progresivamente. El Muay Thai y Kickboxing son великолепные para entrar en forma, pero el proceso es gradual. Everyone starts somewhere.",
    category: "Preparación",
  },
  {
    question: "¿Ofrecen clases de prueba gratuitas?",
    answer: "Sí,Ofrecemos una clase de prueba sin costo para que conozcas el gym, conoces al instructor y veas si es para vos. No hay compromiso, solo querés que experimentes lo que es entrenar con nosotros.",
    category: "Inicio",
  },
  {
    question: "¿Puedo competir si apenas empiezo?",
    answer: "Absolutamente. Muchos de nuestros competidores started entrenando hace poco más de un año y ya están en el ring. El camino hacia la competencia depende de tu dedicación y el instructor te guiará cuando estés listo.",
    category: "Competencia",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div 
        className="absolute top-40 right-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
            Resolvé tus dudas
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Preguntas{' '}
            <span className="text-transparent bg-gradient-to-r from-red-500 to-red-300 bg-clip-text">
              Frecuentes
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
        </motion.div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group"
            >
              {/* Question Button */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:border-red-500/50 hover:bg-gray-800/50 transition-all duration-300 text-left"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle 
                    size={20} 
                    className={`text-red-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-12' : ''}`}
                  />
                  <span className="text-white font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gray-400 group-hover:text-red-400" size={20} />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pb-8 bg-gray-900/50 border border-t-0 border-gray-700/50 rounded-b-xl">
                      <div className="flex items-start gap-4">
                        <MessageSquare className="text-red-400 flex-shrink-0 mt-1" size={18} />
                        <div>
                          <span className="inline-block px-2 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded mb-3">
                            {faq.category}
                          </span>
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA si no encontró respuesta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center p-8 bg-gradient-to-r from-red-600/10 to-transparent rounded-2xl border border-red-500/30"
        >
          <p className="text-gray-300 mb-4">
            ¿No encontraste lo que buscabas?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Escribinos por WhatsApp
          </a>
        </motion.div>

        {/* Keywords SEO */}
        <div className="sr-only">
          Preguntas frecuentes sobre Muay Thai, Kickboxing, K1, clases de artes marciales Argentina, entrenamiento para principiantes, competencias boxeo tailandés.
        </div>
      </div>
    </section>
  );
}