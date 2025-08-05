const benefits = [
    "Mejora tu condición física",
    "Aprende defensa personal",
    "Desarrolla disciplina mental",
    "Forma parte de una comunidad",
  ];
  
  export default function Benefits() {
    return (
      <section className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-10">
          Beneficios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl text-center text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              {b}
            </div>
          ))}
        </div>
      </section>
    );
  }
  