import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-(--header-height) flex flex-col bg-[url('/main-bg.png')] bg-cover bg-center">
        <Hero />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}
