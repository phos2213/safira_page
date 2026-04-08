import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import HowItWorks from "@/components/HowItWorks";
import Philosophy from "@/components/Philosophy";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <HowItWorks />
        <Philosophy />
        <CTASection />
      </main>
      <footer className="py-8 px-6 bg-white border-t border-gray-100 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Onfly · Safira é um produto Onfly para
        gestão inteligente de viagens corporativas.
      </footer>
    </>
  );
}
