import Hero from "@/common/components/Hero/Hero";
import Navbar from "@/common/components/Navbar/Navbar";
import Services from "@/common/components/Services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
