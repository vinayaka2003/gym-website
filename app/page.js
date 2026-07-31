import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Facilities from "./components/sections/Facilities/Facilities";
import Gallery from "./components/sections/Gallery/Gallery";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import Etiquette from "./components/sections/Etiquette/Etiquette";
import FAQ from "./components/sections/FAQ/FAQ";
import Contact from "./components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Facilities />
        <Gallery />
        <Testimonials />
        <Etiquette />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}