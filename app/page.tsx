import Header from "./components/Header";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div>
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col items-center gap-[32px] pt-24 row-start-2 sm:items-start">
        <Hero />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
