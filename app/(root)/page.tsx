import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Disciplines from "@/components/home/Disciplines";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Disciplines />
      <FAQ />
      <Testimonials />
    </main>
  );
}