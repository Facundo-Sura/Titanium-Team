import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Disciplines from "@/components/home/Disciplines";
import Benefits from "@/components/home/Benefits";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="mt-18 font-sans">
      <Hero />
      <About />
      <Disciplines />
      <Benefits />
      <Testimonials />
      <Contact />
    </main>
  );
}
