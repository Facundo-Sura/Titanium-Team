import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

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
