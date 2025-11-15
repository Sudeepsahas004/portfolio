// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/Intro";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollToHash from "./ScrollToHash";

function App() {
  return(<div>
<Navbar />
<ScrollToHash/>
  <div id="intro"><Intro /></div>
<div id="about"><About /></div>
<div id="skills"><Skills /></div>
<div id="projects"><Projects /></div>
<div id="contact"><Contact /></div>

  </div>)
  

}

export default App;
