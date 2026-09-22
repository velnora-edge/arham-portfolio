import FloatingPetals from "./Components/FloatingPetals";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <main className="portfolio-page">
      <FloatingPetals />

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
<Footer />
    
    </main>
  );
}
export default App;