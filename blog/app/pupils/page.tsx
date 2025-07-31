import Image from "next/image";

const competitors = [
  {
    name: "Alex Huenca",
    category: "Semi pro - Kick - 66kg",
    achievements: ["Campeón", "record de 4-1"],
    img: "/alex.jpg",
  },
  {
    name: "Cristian Cabral",
    category: "Kick amateur - 72kg",
    achievements: ["Campeon", "3x Oro en Torneos Regionales"],
    img: "/cris.jpg",
  },
  {
    name: "Noha Tosonieri",
    category: "Kick amateur - 83kg",
    achievements: ["Cuarta pelea en kick"],
    img: "/noha.jpg",
  },
  {
    name: "Tiziano Pelssa",
    category: "Kick amateur",
    achievements: ["Cuarta pelea en kick"],
    img: "/tizi.jpg",
  },
  {
    name: "lucas Muslera",
    category: "Kick amateur",
    achievements: ["Segunda pelea en kick"],
    img: "/.jpg",
  },
  {
    name: "Fernando Gremo",
    category: "Kick light",
    achievements: ["Primera pelea en kick"],
    img: "/fer.jpg",
  },
];

export default function Pupils() {
  return (
    <main className="mt-18 font-sans">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
        <Image
          src="/competidores.jpg"
          alt="Competidores"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-red-500 drop-shadow-lg">
            Nuestros Competidores
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Los atletas que representan nuestra escuela en cada torneo.
          </p>
        </div>
      </section>

      {/* Lista de Competidores */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competitors.map((c) => (
            <div
              key={c.name}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <div className="relative w-full h-80">
                <Image src={c.img} alt={c.name} fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-red-500">{c.name}</h3>
                <p className="text-gray-400">{c.category}</p>
                <ul className="mt-3 text-gray-300 text-sm">
                  {c.achievements.map((a, i) => (
                    <li key={i}>• {a}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
