import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const services = [
  {
    title: "Desarrollo Web a Medida",
    description: "Creación de aplicaciones web modernas, rápidas y escalables utilizando React y JavaScript. Diseños responsivos adaptados a cualquier dispositivo."
  },
  {
    title: "E-Commerce & WordPress",
    description: "Desarrollo y optimización de tiendas online con WooCommerce. Configuración de pasarelas de pago, gestión de productos y personalización visual con Elementor."
  },
  {
    title: "Optimización de Rendimiento y CRO",
    description: "Auditorías de velocidad, mejora de Core Web Vitals y optimización de la tasa de conversión (CRO) para que tu sitio web no solo reciba visitas, sino que genere ventas y leads."
  },
  {
    title: "Diseño UI/UX",
    description: "Diseño de interfaces atractivas y centradas en el usuario. Transformo ideas en productos digitales visualmente impactantes y fáciles de usar."
  }
];

export default function Services() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #121212, #1a1a2e)",
        color: "#fff",
        padding: "100px 0 40px 0",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "#80DEEA", fontWeight: "bold", mb: 2 }}
          >
            Servicios Web
          </Typography>
          <Typography variant="h6" sx={{ color: "#E0E0E0", mb: 5, maxWidth: "800px", mx: "auto" }}>
            Ayudo a empresas y emprendedores a tener una presencia digital sólida, rápida y enfocada en resultados.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    minHeight: 280,
                    backgroundColor: "#222",
                    color: "#fff",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0px 10px 20px rgba(128, 222, 234, 0.3)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ color: "#80DEEA", fontWeight: "bold", mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#bbb" }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
