import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
      </main>
    </>
  );
}
