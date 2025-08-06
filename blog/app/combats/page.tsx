"use client";
import { useState } from "react";
import Image from "next/image";

type Combat = {
  fighter: string;
  category: string;
  video: string;
  images: string[];
};

const combats: Combat[] = [
  {
    fighter: "Alex Huenca",
    category: "Kick - Semi pro",
    video: "/combates/roundx - ale.mp4",
    images: ["/alex.jpg", ""],
  },
  {
    fighter: "Lucas Muslera",
    category: "Kick - amateur",
    video: "/combates/roundx - luqui.mp4",
    images: ["", ""],
  },
  {
    fighter: "Tiziano Pelssa",
    category: "Kick - amateur",
    video: "/combates/roundx - tizi.mp4",
    images: ["/tizi.jpg", ""],
  },
];

export default function Combats() {
  const [current, setCurrent] = useState<Combat>(combats[0]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null && i < current.images.length - 1 ? i + 1 : i));

  return (
    <main className="bg-black text-white font-sans min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gray-900">
        <Image
          src="/combats-hero.jpg"
          alt="Combates"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-red-500 drop-shadow-lg">
            Combates
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Videos e imágenes de nuestros peleadores.
          </p>
        </div>
      </section>

      {/* Layout estilo YouTube */}
      <section className="py-10 px-4 md:px-10 flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        {/* Video principal */}
        <div className="flex-1">
          <div className="relative w-full h-[250px] md:h-[450px] bg-black rounded-xl overflow-hidden">
            <video
              src={current.video}
              controls
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold text-red-500 mt-4">{current.fighter}</h2>
          <p className="text-gray-400">{current.category}</p>

          {/* Galería de imágenes */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {current.images.map((img, i) => (
              <div
                key={i}
                className="relative w-full h-32 cursor-pointer group"
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={img}
                  alt={`Foto combate ${i + 1}`}
                  fill
                  className="object-cover rounded-lg group-hover:opacity-80 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lista de sugerencias */}
        <aside className="lg:w-1/3 bg-gray-900 p-4 rounded-xl">
          <h3 className="text-xl font-bold text-red-500 mb-4">Otros Combates</h3>
          <div className="flex flex-col gap-4">
            {combats.map((c, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(c);
                  setLightboxIndex(null);
                }}
                className={`flex gap-3 items-center bg-black rounded-lg overflow-hidden hover:bg-gray-800 transition ${
                  c.fighter === current.fighter ? "ring-2 ring-red-500" : ""
                }`}
              >
                <div className="relative w-28 h-20 flex-shrink-0">
                  <video
                    src={c.video}
                    className="w-full h-full object-cover"
                    muted
                  />
                </div>
                <div className="text-left p-2">
                  <p className="text-sm font-bold text-white">{c.fighter}</p>
                  <p className="text-xs text-gray-400">{c.category}</p>
                </div>
              </button>
            ))}
          </div>
        </aside>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="relative w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // evita que se cierre al hacer click en la imagen
          >
            {/* Imagen actual */}
            <Image
              src={current.images[lightboxIndex]}
              alt="Ampliada"
              width={1200}
              height={800}
              className="object-contain rounded-lg mx-auto"
            />

            {/* Botón cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Botón anterior */}
            {lightboxIndex > 0 && (
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
              >
                ◀
              </button>
            )}

            {/* Botón siguiente */}
            {lightboxIndex < current.images.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
              >
                ▶
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
