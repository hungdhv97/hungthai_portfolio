import Spotlight from "@/components/Spotlight";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:flex lg:justify-between lg:gap-4 lg:py-0">
        <Header />
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Awards />
          <Footer />
        </main>
      </div>
    </div>
  );
}
