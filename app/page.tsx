import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-(--header-height) pt-12 row-start-2 bg-white">
        <Hero />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}
