import Image from "next/image";
import Hero from "@/app/components/hero"
import Header from "@/app/components/header"
import Cards from "@/app/components/cards";
import Footer from "@/app/components/footer";
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <div className="md:mt-18 relative mt-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="relative pb-4">
          <Hero />
          <Cards />
          <Footer />
        </div>
      </div>
    </main>
  );
}
