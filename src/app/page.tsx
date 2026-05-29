import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TechnicalStack from "@/components/TechnicalStack/TechnicalStack";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-centerfont-sans px-5 md:px-0">
      <Header />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 gap-20 sm:items-start">
        <Hero />
        <TechnicalStack />
        <Experience />
      </main>
    </div>
  );
}
