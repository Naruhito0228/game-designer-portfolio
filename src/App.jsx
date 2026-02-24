import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

