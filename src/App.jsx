import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Skills from "./components/Skills"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"


function App() {
 

  return (
    <>
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
      
    </div>
 
    </>
  )
}

export default App

