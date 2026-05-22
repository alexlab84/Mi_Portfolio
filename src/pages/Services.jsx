import { Container, Typography, Box, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import { Code, Web, AutoGraph, Palette } from "@mui/icons-material";

const services = [
  {
    title: "Desarrollo Web",
    description: "Creación de aplicaciones web modernas, rápidas y escalables utilizando React y JavaScript. Diseños responsivos adaptados a cualquier dispositivo.",
    icon: <Code sx={{ fontSize: 48, color: "#818cf8" }} />,
    bg: "#111827",
    color: "#ffffff",
    textBg: "#9ca3af"
  },
  {
    title: "E-Commerce",
    description: "Desarrollo y optimización de tiendas online con WooCommerce. Configuración de pasarelas de pago, gestión de productos y personalización.",
    icon: <Web sx={{ fontSize: 48, color: "#bfdbfe" }} />,
    bg: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
    color: "#ffffff",
    textBg: "#e0e7ff"
  },
  {
    title: "Optimización CRO",
    description: "Auditorías de velocidad, mejora de Core Web Vitals y optimización de la tasa de conversión (CRO) para que tu sitio web genere más ventas.",
    icon: <AutoGraph sx={{ fontSize: 48, color: "#2563eb" }} />,
    bg: "#ffffff",
    color: "#111827",
    textBg: "#4b5563"
  },
  {
    title: "Diseño UI/UX",
    description: "Diseño de interfaces atractivas y centradas en el usuario. Transformo ideas en productos digitales visualmente impactantes y fáciles de usar.",
    icon: <Palette sx={{ fontSize: 48, color: "#d946ef" }} />,
    bg: "#ffffff",
    color: "#111827",
    textBg: "#4b5563"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 8, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          
          <Box sx={{ mb: 8, textAlign: "center" }}>
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: "3rem", sm: "4rem", md: "5rem" }, 
                  fontWeight: 800, 
                  lineHeight: 1.1, 
                  letterSpacing: "-0.04em",
                  color: "#111827",
                  mb: 2
                }}
              >
                Servicios <br />
                <span style={{ 
                  background: "linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  Destacados
                </span>
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography variant="h6" sx={{ color: "#4b5563", maxWidth: "800px", mx: "auto", fontWeight: 400, fontSize: "1.2rem" }}>
                Ayudo a empresas y emprendedores a tener una presencia digital sólida, rápida y enfocada en resultados reales.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div variants={itemVariants} style={{ height: "100%" }}>
                  <Card sx={{ 
                    height: "100%", 
                    borderRadius: "32px", 
                    p: { xs: 4, md: 5 }, 
                    background: service.bg,
                    color: service.color,
                    border: service.bg === "#ffffff" ? "1px solid #f3f4f6" : "none",
                    boxShadow: service.bg === "#ffffff" ? "0 10px 30px -10px rgba(0, 0, 0, 0.05)" : "0 20px 40px -10px rgba(37, 99, 235, 0.2)",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-5px)" }
                  }}>
                    <Box sx={{ mb: 3 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h4" sx={{ color: "inherit", fontWeight: 800, mb: 2, letterSpacing: "-0.02em" }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: service.textBg, fontSize: "1.1rem", lineHeight: 1.6 }}>
                      {service.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

        </motion.div>
      </Container>
    </Box>
  );
}
