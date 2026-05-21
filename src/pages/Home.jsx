import { Container, Typography, Box, Grid, Card, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowForward, Code, Web, AutoGraph } from "@mui/icons-material";
import avatarImage from "../assets/alejandra-porfolio.png";
import reactIcon from "../assets/react.png";
import jsIcon from "../assets/js.png";
import muiIcon from "../assets/material-ui.png";

// Animations
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

export default function Home() {
  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 8, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* HERO SECTION */}
          <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: { xs: "center", md: "left" } }}>
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: "3.5rem", sm: "4.5rem", md: "6rem", lg: "7rem" }, 
                  fontWeight: 800, 
                  lineHeight: 1.05, 
                  letterSpacing: "-0.04em",
                  color: "#111827",
                  mb: 3
                }}
              >
                Frontend <br />
                <span style={{ 
                  background: "linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  Developer.
                </span>
              </Typography>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: "#4b5563", 
                  maxWidth: "600px", 
                  mb: 5, 
                  mx: { xs: "auto", md: 0 },
                  lineHeight: 1.6,
                  fontWeight: 400,
                  fontSize: { xs: "1.1rem", md: "1.3rem" }
                }}
              >
                Hola, soy <b>Alejandra Sánchez</b>. Construyo interfaces de usuario premium, experiencias rápidas y escalables con un enfoque implacable en el diseño y rendimiento.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
                <Button 
                  component={Link} 
                  to="/projects"
                  variant="contained" 
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{ 
                    borderRadius: "50px", 
                    px: 4, 
                    py: 1.5, 
                    fontSize: "1.1rem",
                    boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 15px 30px -5px rgba(37, 99, 235, 0.5)",
                    }
                  }}
                >
                  Ver Proyectos
                </Button>
                <Button 
                  component={Link} 
                  to="/contact"
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    borderRadius: "50px", 
                    px: 4, 
                    py: 1.5, 
                    fontSize: "1.1rem",
                    borderWidth: "2px",
                    borderColor: "#e5e7eb",
                    color: "#111827",
                    "&:hover": {
                      borderWidth: "2px",
                      borderColor: "#111827",
                      backgroundColor: "transparent"
                    }
                  }}
                >
                  Hablemos
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* BENTO GRID */}
          <Grid container spacing={3}>
            {/* ABOUT ME BENTO */}
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <Card sx={{ 
                  height: "100%", 
                  borderRadius: "32px", 
                  p: { xs: 3, md: 5 }, 
                  display: "flex", 
                  flexDirection: { xs: "column-reverse", sm: "row" },
                  alignItems: "center",
                  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.03)"
                }}>
                  <Box sx={{ flex: 1, zIndex: 1, textAlign: { xs: "center", sm: "left" }, mt: { xs: 3, sm: 0 } }}>
                    <Typography variant="overline" sx={{ color: "#2563eb", fontWeight: 800, letterSpacing: 1.5 }}>
                      PERFIL PROFESIONAL
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, mt: 1, color: "#111827", fontSize: { xs: "1.8rem", md: "2.2rem" }, letterSpacing: "-0.02em" }}>
                      De precisión analítica al código creativo.
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#4b5563", fontSize: "1.1rem", lineHeight: 1.7 }}>
                      Combino mi experiencia previa en laboratorio clínico con el desarrollo de software. He coordinado la estrategia digital en <b>Lucio J&M</b> y colaborado con Midudev en la web de <b>La Velada del Año V</b>.
                    </Typography>
                  </Box>
                  <Avatar 
                    src={avatarImage} 
                    sx={{ 
                      width: { xs: 120, sm: 160 }, 
                      height: { xs: 120, sm: 160 }, 
                      ml: { xs: 0, sm: 4 },
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                      border: "6px solid #fff",
                      zIndex: 1
                    }} 
                  />
                  {/* Decorative background shape */}
                  <Box sx={{ 
                    position: "absolute", right: "-10%", top: "-20%", 
                    width: 300, height: 300, 
                    background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0) 70%)", 
                    borderRadius: "50%",
                    zIndex: 0
                  }} />
                </Card>
              </motion.div>
            </Grid>

            {/* TECH STACK BENTO */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <Card sx={{ 
                  height: "100%", 
                  borderRadius: "32px", 
                  p: { xs: 3, md: 4 }, 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "center",
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.03)"
                }}>
                  <Typography variant="overline" sx={{ color: "#2563eb", fontWeight: 800, letterSpacing: 1.5 }}>
                    STACK PRINCIPAL
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, mt: 1, color: "#111827", letterSpacing: "-0.02em" }}>
                    Herramientas que domino.
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    {[
                      { icon: reactIcon, name: "React" }, 
                      { icon: jsIcon, name: "JavaScript" }, 
                      { icon: muiIcon, name: "MUI" },
                      { icon: "https://cdn.simpleicons.org/wordpress/21759b", name: "WordPress" },
                      { icon: "https://cdn.simpleicons.org/elementor/92003B", name: "Elementor" },
                      { icon: "https://cdn.simpleicons.org/woocommerce/96588a", name: "WooCommerce" }
                    ].map((tech, idx) => (
                      <Box key={idx} sx={{ 
                        width: 70, height: 70, 
                        borderRadius: "20px", 
                        background: "#f9fafb", 
                        border: "1px solid #e5e7eb",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": { transform: "translateY(-5px) scale(1.05)", borderColor: "#2563eb", boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.1)" }
                      }}>
                        <img src={tech.icon} alt={tech.name} title={tech.name} style={{ width: 36, height: 36, objectFit: "contain" }} />
                      </Box>
                    ))}
                  </Box>
                </Card>
              </motion.div>
            </Grid>

            {/* SERVICES BENTO - DARK */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <Card sx={{ 
                  height: "100%", borderRadius: "32px", p: 4, 
                  backgroundColor: "#111827", color: "#fff",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                }}>
                  <Code sx={{ fontSize: 48, color: "#818cf8", mb: 3 }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: "#fff", letterSpacing: "-0.02em" }}>
                    Desarrollo Moderno
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#9ca3af", lineHeight: 1.6 }}>
                    Construcción de interfaces atractivas, altamente interactivas y escalables con React y ecosistema moderno.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>

            {/* SERVICES BENTO - ACCENT */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <Card sx={{ 
                  height: "100%", borderRadius: "32px", p: 4, 
                  background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)", color: "#fff",
                  boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.3)"
                }}>
                  <Web sx={{ fontSize: 48, color: "#bfdbfe", mb: 3 }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: "#fff", letterSpacing: "-0.02em" }}>
                    E-Commerce Premium
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#e0e7ff", lineHeight: 1.6 }}>
                    Implementación de tiendas online con WooCommerce y arquitecturas enfocadas en maximizar la conversión.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>

            {/* SERVICES BENTO - SECONDARY */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <Card sx={{ 
                  height: "100%", borderRadius: "32px", p: 4, 
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.03)"
                }}>
                  <AutoGraph sx={{ fontSize: 48, color: "#2563eb", mb: 3 }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: "#111827", letterSpacing: "-0.02em" }}>
                    Optimización & CRO
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.6 }}>
                    Análisis de rendimiento, mejora de Core Web Vitals y estrategias técnicas para aumentar las ventas y leads.
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

        </motion.div>
      </Container>
    </Box>
  );
}
