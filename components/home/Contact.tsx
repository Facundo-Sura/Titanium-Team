export default function Contact() {
    return (
      <section id="contact" className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
          Contacto
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          ¿Listo para tu primera clase? Escríbenos ahora.
        </p>
        <a
          href="https://wa.me/xxxxxxxxxxx"
          target="_blank"
          className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition-all"
        >
          Contactar por WhatsApp
        </a>
      </section>
    );
  }
  