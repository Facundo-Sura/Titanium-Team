'use client'
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <header className="fixed bg-linear-to-b from-blue-950 via-black to-red-600 w-full flex flex-wrap justify-around items-center">
            <Link href="/about">Nosotros</Link>
            <Link href="/pupils">Alumnos</Link>
            <Link href="/">
                <Image src="/logo.jpg" width={50} height={50} alt="Titanium Team" className="rounded-xl" />
            </Link>
            <Link href="/trainings">Entrenamientos</Link>
            <Link href="/combats">Combates</Link>
        </header>
    )
}

export default Navbar;