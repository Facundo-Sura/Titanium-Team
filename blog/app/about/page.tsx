import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mt-18 font-sans">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900">
        <Image
          src="/team.jpg"
          alt="Nuestro equipo"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-red-500 drop-shadow-lg">
            Sobre Nosotros
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Conoce nuestra historia, equipo y filosofía de entrenamiento.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
          Nuestra Historia
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Nuestra escuela nació con la misión de acercar el Muay Thai, Kickboxing y K1 
          a todos los niveles, desde principiantes hasta competidores profesionales. 
          Nos enfocamos en la disciplina, el respeto y el desarrollo personal, 
          formando atletas completos en cuerpo y mente.
        </p>
      </section>

      {/* Equipo */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-10">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <div className="relative w-full h-72">
              <Image src="/coach1.jpg" alt="Entrenador 1" fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-red-500">David Bertossi</h3>
              <p className="text-gray-400">Head Coach - Muay Thai</p>
            </div>
          </div>
          <div className="bg-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <div className="relative w-full h-72">
              <Image src="/coach2.jpg" alt="Entrenador 2" fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-red-500">Alex Huanca</h3>
              <p className="text-gray-400">Coach - Kickboxing</p>
            </div>
          </div>
          <div className="bg-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <div className="relative w-full h-72">
              <Image src="/coach3.jpg" alt="Entrenador 3" fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-red-500">Noha Tosonieri</h3>
              <p className="text-gray-400">Preparador Físico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Disciplina</h3>
            <p className="text-gray-400">Entrenamos mente y cuerpo con constancia.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Respeto</h3>
            <p className="text-gray-400">Crecemos como comunidad apoyándonos mutuamente.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Superación</h3>
            <p className="text-gray-400">Nos esforzamos para superar nuestros límites.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
