import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import { lazyPage, limpiarMarcaDeRecarga } from "./lazyPage";

// La portada entra en el paquete inicial; el resto se descarga al navegar.
const About = lazyPage(() => import("./pages/About.jsx"));
const Projects = lazyPage(() => import("./pages/Projects.jsx"));
const CaseLucio = lazyPage(() => import("./pages/CaseLucio.jsx"));
const Experience = lazyPage(() => import("./pages/Experience.jsx"));
const Contact = lazyPage(() => import("./pages/Contact.jsx"));
const Colofon = lazyPage(() => import("./pages/Colofon.jsx"));
const NotFound = lazyPage(() => import("./pages/NotFound.jsx"));

function App() {
  // Si llegamos hasta aquí, la aplicación ha arrancado bien.
  useEffect(limpiarMarcaDeRecarga, []);

  return (
    <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/lucio-jm" element={<CaseLucio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/colofon" element={<Colofon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
    </Router>
  );
}

export default App;
