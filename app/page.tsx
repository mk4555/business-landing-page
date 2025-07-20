import Header from "./components/Header";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-24 row-start-2 bg-white">
        <Hero />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
