import BrandCarousel from "./components/BrandCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { InfoSection } from "./components/InfoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-50 to-indigo-200">
      <Header />
      <main className="flex flex-col ">
        <Hero />
        <BrandCarousel />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}
