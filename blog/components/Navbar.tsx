'use client'
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <header className="fixed w-full flex flex-wrap justify-around items-center">
            <Link href="/">
                <Image src="/logo.jpg" width={50} height={50} alt="Titanium Team" />
            </Link>
            <Link href="/about">Nosotros</Link>
            <Link href="/pupils">Alumnos</Link>
            <Link href="/trainings">Entrenamientos</Link>
            <Link href="/combats">Combates</Link>
            <Link href="/contact">Contactanos</Link>
        </header>
    )
}

export default Navbar;