import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Tools from "./sections/Tools";
import Projects from "./sections/Projects";
import TryHackMe from "./sections/TryHackMe";
import HackTheBox from "./sections/HackTheBox";
import GitHub from "./sections/GitHub";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Tools />

      <Projects />

      <TryHackMe />

      <HackTheBox />

      <GitHub />

      <Certificates />

      <Contact />

      <Footer />
    </>
  );
}

export default App;