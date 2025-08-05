const testimonials = [
    { name: "Juan", text: "Las clases cambiaron mi vida. Excelente ambiente." },
    { name: "María", text: "Aprendí defensa personal y mejoré mi condición física." },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-10">
          Testimonios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-black p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <p className="text-gray-300 italic">“{t.text}”</p>
              <p className="mt-4 font-bold text-red-500">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  