import Contact from "@/common/components/Contact/Contact";
import Footer from "@/common/components/Footer/Footer";
import Hero from "@/common/components/Hero/Hero";
import Navbar from "@/common/components/Navbar/Navbar";
import Quote from "@/common/components/Quote/Quote";
import Services from "@/common/components/Services/Services";
import Works from "@/common/components/Works/Works";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <Services />
      {/* <Works /> */}
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
