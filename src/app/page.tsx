import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-centerfont-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 sm:items-start">
        <Hero />
      </main>
    </div>
  );
}
