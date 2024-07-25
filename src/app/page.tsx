import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import Services from "@/components/Services";
import MenuMap from "@/components/MenuMap";
import Features from "@/components/Features";
import About from "@/components/About";
export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden ">
      <Header />
      <Hero />
      <Services />
      <About />
      <Features />
      <MenuMap />
      <Footer />
    </main>
  );
}
