import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Layanan from "@/components/sections/Layanan";
import Armada from "@/components/sections/Armada";
import HargaPackage from "@/components/sections/HargaPackage";
import Keunggulan from "@/components/sections/Keunggulan";
import Testimoni from "@/components/sections/Testimoni";
import FAQ from "@/components/sections/FAQ";
import FloatingCTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Layanan />
      <Armada />
      <HargaPackage />
      <Keunggulan />
      <Testimoni />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
