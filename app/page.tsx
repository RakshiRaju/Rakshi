import Header from "@/components/Header";
import About from "@/components/About";
import ForgeSection from "@/components/ForgeSection";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <About />
      <ForgeSection />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
