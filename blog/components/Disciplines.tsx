import Image from "next/image";

const disciplines = [
  { name: "Muay Thai", img: "/muaythai.jpg" },
  { name: "Kickboxing", img: "/kickboxing.jpg" },
  { name: "K1", img: "/k1.jpg" },
];

export default function Disciplines() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-10">
        Disciplinas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {disciplines.map((d) => (
          <div
            key={d.name}
            className="bg-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <div className="relative w-full h-64">
              <Image
                src={d.img}
                alt={d.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-white">{d.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
