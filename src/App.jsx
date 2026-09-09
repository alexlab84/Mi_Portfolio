import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Box } from "@mui/material";

import Navbar from "./components/NavBar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

// La home entra en el bundle inicial; el resto se carga al navegar.
const About = lazy(() => import("./pages/About.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const CaseLucio = lazy(() => import("./pages/CaseLucio.jsx"));
const Experience = lazy(() => import("./pages/Experience.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Colofon = lazy(() => import("./pages/Colofon.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<Box sx={{ minHeight: "100vh" }} />}>
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
    </HelmetProvider>
  );
}

export default App;
