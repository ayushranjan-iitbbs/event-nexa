import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Highlights from "@/components/Highlights";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white min-h-screen scroll-smooth">
      <Navbar />
      
      <section id="hero">
        <HeroSection />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="events">
        <Highlights />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
