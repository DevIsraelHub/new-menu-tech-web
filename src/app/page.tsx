import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "../components/Footer";
import Services from "@/components/Menu";
import MenuMap from "@/components/MenuMap";
export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden ">
      <Header />
      <Hero />
      <Services />
      <About />
      <MenuMap />
      <Footer />
    </main>
  );
}
