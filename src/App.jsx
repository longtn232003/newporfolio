import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

import { useScrollReveal } from "@/hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <div className="scroll-reveal">
          <Hero />
        </div>
        <div className="scroll-reveal">
          <About />
        </div>
        <div className="scroll-reveal">
          <Projects />
        </div>
        <div className="scroll-reveal">
          <Experience />
        </div>
        <div className="scroll-reveal">
          <Skills />
        </div>
        <div className="scroll-reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
