'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "Nosotros" },
  { href: "/pupils", label: "Alumnos" },
  { href: "/trainings", label: "Entrenamientos" },
  { href: "/combats", label: "Combates" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: 1
    }
  }
};

const linkVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece cuando scrolleas más de 100px (cuando salís del Hero)
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar principal */}
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 ${
          scrolled ? "visible" : "invisible"
        }`}
        initial={{ opacity: 0, y: -100 }}
        animate={{ 
          y: scrolled ? 0 : -20,
          opacity: scrolled ? 1 : 0,
        }}
        transition={{ 
          duration: 0.4, 
          ease: "easeOut"
        }}
      >
        <div className="bg-black/95 backdrop-blur-lg py-2 shadow-2xl shadow-red-600/20">
          <div className="max-w-7xl mx-auto flex justify-center items-center px-4 relative">
          {/* Links izquierda - desktop */}
          <nav className="hidden md:flex gap-8 absolute left-6">
            {navLinks.slice(0, 2).map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="relative group text-white font-semibold text-sm uppercase tracking-wider"
              >
                <span className="relative z-10 group-hover:text-red-400 transition-colors">
                  {link.label}
                </span>
                {/* Underline animated */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Logo centrado */}
          <Link href="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/logo.jpg"
                width={45}
                height={45}
                alt="Titanium Team"
                className="rounded-lg border-2 border-red-600 shadow-lg shadow-red-600/30 transition-all"
              />
            </motion.div>
            {/* Glow effect al hover */}
            <span className="absolute inset-0 rounded-lg bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          {/* Links derecha - desktop */}
          <nav className="hidden md:flex gap-8 absolute right-6">
            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="relative group text-white font-semibold text-sm uppercase tracking-wider"
              >
                <span className="relative z-10 group-hover:text-red-400 transition-colors">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Botón menú móvil */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden absolute right-4 text-white p-2"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} className="text-red-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        </div>
      </motion.header>

      {/* Menú móvil con overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay oscuro */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            
            {/* Menú desplegable */}
            <motion.div
              className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-red-500/30 shadow-2xl shadow-red-600/20 z-50 overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-6 flex flex-col gap-4">
                {/* Logo pequeño en el menú */}
                <div className="flex items-center justify-center gap-2 pb-4 border-b border-red-500/20">
                  <Zap className="text-red-500" size={20} />
                  <span className="text-white font-bold tracking-wider">MENÚ</span>
                </div>

                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block w-full text-center py-3 px-4 text-white font-semibold text-lg rounded-xl hover:bg-red-600/20 hover:text-red-400 transition-all border border-transparent hover:border-red-500/30"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* CTA en el menú */}
                <motion.div variants={linkVariants} className="pt-4 border-t border-red-500/20">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 transition-colors"
                  >
                    ¡Empezá Ahora!
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;