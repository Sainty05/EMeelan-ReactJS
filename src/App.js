import "./App.css";
import AboutUs from "./Components/AboutUs";
import CTA from "./Components/CTA";
import Clients from "./Components/Clients";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import Skills from "./Components/Skills";
import Team from "./Components/Team";
import WhyUs from "./Components/WhyUs";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <main id="main">
        <Clients />
        <AboutUs />
        <WhyUs />
        <Skills />
        <Service />
        <CTA />
        <Team />
        <Contact />
      </main>
      <Footer />
      <a
        href="/"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default App;
