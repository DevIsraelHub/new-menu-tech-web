import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "../components/Footer";
import Map from "@/components/Map";
import Services from "@/components/Menu";
export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden ">
      <Header />
      <Hero />
      <Services />
      <About />
      <Map />
      <Footer />
    </main>
  );
}
