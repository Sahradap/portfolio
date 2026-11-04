import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Training from "./components/Training";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Home/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Training/>
        <Services/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;