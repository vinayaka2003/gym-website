import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Facilities from "./components/sections/Facilities/Facilities";
import Pricing from "./components/sections/Pricing/Pricing";
import Gallery from "./components/sections/Gallery/Gallery";
import Trainers from "./components/sections/Trainers/Trainers";
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
        <Pricing />
        <Gallery />
        <Trainers />
        <Testimonials />
        <Etiquette />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}