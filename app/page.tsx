import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Reservations from "@/components/Reservations";
import MapSection from "@/components/MapSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <Gallery />
      <Reviews />
      <Reservations />
      <MapSection />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
