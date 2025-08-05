export default function Hero() {
    return (
        <section className="h-screen bg-[url('/logo.jpg')] bg-cover bg-center flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-red-500 drop-shadow-lg">
                    {"TITANIUM'S TEAM"}
                </h1>
                <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto">
                    Escuela de Muay Thai & Kickboxing
                </p>
                <a
                    href="#contact"
                    className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                    Reserva tu clase gratis
                </a>
            </div>
        </section>
    );
}
