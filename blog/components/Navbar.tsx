'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-blue-950 via-black to-red-600 shadow-lg">
      {/* Contenedor tipo cinturón */}
      <div className="max-w-7xl mx-auto flex justify-center items-center px-4 py-3 relative">
        {/* Links izquierda */}
        <nav className="hidden md:flex gap-6 absolute left-6 text-white font-semibold">
          <Link href="/about" className="hover:text-red-300 transition">Nosotros</Link>
          <Link href="/pupils" className="hover:text-red-300 transition">Alumnos</Link>
        </nav>

        {/* Logo centrado */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            width={50}
            height={50}
            alt="Titanium Team"
            className="rounded-xl border-2 border-red-600 shadow-md"
          />
        </Link>

        {/* Links derecha */}
        <nav className="hidden md:flex gap-6 absolute right-6 text-white font-semibold">
          <Link href="/trainings" className="hover:text-red-300 transition">Entrenamientos</Link>
          <Link href="/combats" className="hover:text-red-300 transition">Combates</Link>
        </nav>

        {/* Botón menú móvil */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white absolute right-4">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg flex flex-col items-center py-4 space-y-4 text-white font-semibold">
          <Link href="/about" onClick={() => setOpen(false)}>Nosotros</Link>
          <Link href="/pupils" onClick={() => setOpen(false)}>Alumnos</Link>
          <Link href="/trainings" onClick={() => setOpen(false)}>Entrenamientos</Link>
          <Link href="/combats" onClick={() => setOpen(false)}>Combates</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
