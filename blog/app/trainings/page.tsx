"use client";
import { useState } from "react";
import Image from "next/image";

type Training = {
  title: string;
  description: string;
  video: string;
  images: string[];
};

const trainings: Training[] = [
  {
    title: "Sesión de Muay Thai - Cardio",
    description: "Trabajo de golpes básicos con enfoque en resistencia.",
    video: "/videos/muaythai-cardio.mp4",
    images: ["/photos/muay1.jpg", "/photos/muay2.jpg"],
  },
  {
    title: "Entrenamiento con paos(1)",
    description: "Práctica de técnicas de ataque y defensa en combate.",
    video: "/videos/kickboxing-sparring.mp4",
    images: ["/photos/kick1.jpg", "/photos/kick2.jpg"],
  },
  {
    title: "K1 - Combinaciones",
    description: "Entrenamiento de combinaciones avanzadas de puños y patadas.",
    video: "/videos/k1-training.mp4",
    images: ["/photos/k11.jpg", "/photos/k12.jpg"],
  },
];

export default function Training() {
  const [current, setCurrent] = useState<Training>(trainings[0]);

  return (
    <main className="mt-18 font-sans min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
        <Image
          src="/trainings-hero.jpg"
          alt="Entrenamientos"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-red-500 drop-shadow-lg">
            Entrenamientos
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Videos y fotos de nuestras sesiones.
          </p>
        </div>
      </section>

      {/* Video principal + sugerencias */}
      <section className="py-10 px-4 md:px-10 flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        {/* Video principal */}
        <div className="flex-1">
          <div className="relative w-full h-[300px] md:h-[450px] bg-black">
            <video
              src={current.video}
              controls
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <h2 className="text-2xl font-bold text-red-500 mt-4">{current.title}</h2>
          <p className="text-gray-300 mt-2">{current.description}</p>

          {/* Galería de imágenes debajo */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {current.images.map((img, i) => (
              <div key={i} className="relative w-full h-32">
                <Image
                  src={img}
                  alt={`Foto ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sugerencias de videos */}
        <aside className="lg:w-1/3 bg-gray-900 p-4 rounded-xl">
          <h3 className="text-xl font-bold text-red-500 mb-4">Otros entrenamientos</h3>
          <div className="flex flex-col gap-4">
            {trainings.map((t, i) => (
              <button
                key={i}
                onClick={() => setCurrent(t)}
                className={`flex gap-3 items-center bg-black rounded-lg overflow-hidden hover:bg-gray-800 transition ${
                  t.title === current.title ? "ring-2 ring-red-500" : ""
                }`}
              >
                <div className="relative w-28 h-20 flex-shrink-0">
                  <video
                    src={t.video}
                    className="w-full h-full object-cover"
                    muted
                  />
                </div>
                <div className="text-left p-2">
                  <p className="text-sm font-bold text-white">{t.title}</p>
                  <p className="text-xs text-gray-400 line-clamp-2">{t.description}</p>
                </div>
              </button>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
