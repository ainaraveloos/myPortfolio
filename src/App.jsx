import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
};

export default App;