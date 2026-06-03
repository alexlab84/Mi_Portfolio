import { Helmet } from "react-helmet-async";
import { Container, Typography, Box, Grid, Card, Avatar } from "@mui/material";
import { motion } from "framer-motion";

import avatarImage from "../assets/alejandra-blanco.webp";
import htmlIcon from "../assets/html-5.webp";
import cssIcon from "../assets/css-3.webp";
import jsIcon from "../assets/js.webp";
import reactIcon from "../assets/react.webp";
import pythonIcon from "../assets/piton.webp";
import djangoIcon from "../assets/django.webp";
import materialuiIcon from "../assets/material-ui.webp";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 8, minHeight: "100vh" }}>
      <Helmet>
        <title>Sobre Mí | Alejandra Sánchez Frontend Developer</title>
        <meta name="description" content="Conoce a Alejandra Sánchez: Frontend Developer con background en laboratorio clínico, colaboradora en La Velada del Año V y responsable digital de Lucio J&M." />
        <link rel="canonical" href="https://www.alejandrasanchezdev.es/about" />
        <meta property="og:title" content="Sobre Mí | Alejandra Sánchez" />
        <meta property="og:url" content="https://www.alejandrasanchezdev.es/about" />
      </Helmet>
      <Container maxWidth="lg">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          
          <Grid container spacing={4} alignItems="stretch">
            {/* TEXT COLUMN */}
            <Grid item xs={12} md={7} sx={{ display: "flex", flexDirection: "column", order: { xs: 2, md: 1 } }}>
              <motion.div variants={itemVariants} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: "3rem", sm: "4rem", md: "5rem" }, 
                    fontWeight: 800, 
                    lineHeight: 1.1, 
                    letterSpacing: "-0.04em",
                    color: "#111827",
                    mb: 4
                  }}
                >
                  Conectando <br />
                  <span style={{ 
                    background: "linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}>
                    funcionalidad
                  </span><br />
                  con estética
                </Typography>

                <Card sx={{ 
                  p: { xs: 4, md: 5 }, 
                  borderRadius: "32px", 
                  background: "rgba(255, 255, 255, 0.7)", 
                  backdropFilter: "blur(20px)",
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.05)",
                  flex: 1
                }}>
                  <Typography variant="body1" sx={{ color: "#4b5563", fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}>
                    Soy una desarrolladora web apasionada por crear interfaces digitales que destaquen tanto por su <b>estética premium</b> como por su <b>rendimiento</b>.
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#4b5563", fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}>
                    Mi enfoque principal es el desarrollo Frontend, donde combino mi creatividad con un sólido conocimiento técnico para construir experiencias de usuario excepcionales que conviertan visitas en clientes.
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#4b5563", fontSize: "1.1rem", lineHeight: 1.8 }}>
                    Vengo del mundo del laboratorio clínico, lo que me ha dado una capacidad analítica brutal que ahora aplico al código. A lo largo de mi trayectoria he colaborado en proyectos de alto impacto como <b>La Velada del Año V</b> de Ibai Llanos (junto a Midudev) y actualmente coordino toda la estrategia digital y e-commerce de la marca premium <b>Lucio J&M</b>.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
            
            {/* IMAGE COLUMN */}
            <Grid item xs={12} md={5} sx={{ display: "flex", order: { xs: 1, md: 2 } }}>
              <motion.div variants={itemVariants} style={{ width: "100%", display: "flex" }}>
                <Card sx={{ 
                  width: "100%",
                  minHeight: { xs: "400px", md: "100%" },
                  borderRadius: "32px", 
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.05)",
                  overflow: "hidden",
                  position: "relative",
                  background: "#fff"
                }}>
                  <Box 
                    component="img" 
                    src={avatarImage} 
                    sx={{ 
                      position: "absolute",
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      objectPosition: "center top"
                    }} 
                  />
                  {/* Subtle gradient overlay at the bottom for premium feel */}
                  <Box sx={{
                    position: "absolute",
                    bottom: 0, left: 0, right: 0, height: "30%",
                    background: "linear-gradient(to top, rgba(0,0,0,0.1), transparent)"
                  }} />
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          <Box sx={{ mt: 10 }}>
            <motion.div variants={itemVariants}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 6, color: "#111827", letterSpacing: "-0.02em", textAlign: "center" }}>
                El Ecosistema que manejo
              </Typography>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
                {[
                  { src: htmlIcon, alt: "HTML5" },
                  { src: cssIcon, alt: "CSS3" },
                  { src: jsIcon, alt: "JavaScript" },
                  { src: reactIcon, alt: "React" },
                  { src: materialuiIcon, alt: "Material-UI" },
                  { src: "https://cdn.simpleicons.org/wordpress/21759b", alt: "WordPress" },
                  { src: "https://cdn.simpleicons.org/elementor/92003B", alt: "Elementor" },
                  { src: "https://cdn.simpleicons.org/woocommerce/96588a", alt: "WooCommerce" },
                  { src: pythonIcon, alt: "Python" },
                  { src: djangoIcon, alt: "Django" },
                ].map((tech, index) => (
                  <Box 
                    key={index}
                    sx={{
                      width: { xs: 70, md: 90 }, 
                      height: { xs: 70, md: 90 }, 
                      borderRadius: "24px", 
                      background: "#ffffff", 
                      border: "1px solid #e5e7eb",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": { 
                        transform: "translateY(-10px) scale(1.05)", 
                        borderColor: "#2563eb", 
                        boxShadow: "0 15px 25px -5px rgba(37, 99, 235, 0.15)" 
                      }
                    }}
                  >
                    <img
                      src={tech.src}
                      alt={tech.alt}
                      title={tech.alt}
                      style={{ width: "50%", height: "50%", objectFit: "contain" }}
                    />
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

        </motion.div>
      </Container>
    </Box>
  );
}
