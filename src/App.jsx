import useReveal from "./hooks/useReveal";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const ref = useReveal();
  return (
    <div ref={ref} className="min-h-screen bg-bg text-fg">
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}
