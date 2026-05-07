import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#020617] text-white">
      <NavBar />

      <main className="w-full">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;