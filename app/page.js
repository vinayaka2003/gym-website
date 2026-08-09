import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import dynamic from "next/dynamic";

import Hero from "./components/sections/Hero/Hero";
import Branches from "./components/sections/Branches/Branches";
import About from "./components/sections/About/About";
import Facilities from "./components/sections/Facilities/Facilities";
import Etiquette from "./components/sections/Etiquette/Etiquette";
import Contact from "./components/sections/Contact/Contact";

const SectionSkeleton = () => (
  <div style={{ minHeight: "350px", display: "flex", justifyContent: "center", alignItems: "center", background: "var(--main-bg)", color: "var(--light-text)" }}>
    <div style={{ textAlign: "center" }}>
      <div style={{ width: "40px", height: "40px", border: "3px solid rgba(212, 175, 55, 0.15)", borderTop: "3px solid #e7c171", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 16px" }} />
      <span style={{ fontSize: "0.9rem", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" }}>Loading Section...</span>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  </div>
);

const Gallery = dynamic(() => import("./components/sections/Gallery/Gallery"), {
  loading: () => <SectionSkeleton />,
});

const Testimonials = dynamic(() => import("./components/sections/Testimonials/Testimonials"), {
  loading: () => <SectionSkeleton />,
});

const FAQ = dynamic(() => import("./components/sections/FAQ/FAQ"), {
  loading: () => <SectionSkeleton />,
});

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Branches />
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