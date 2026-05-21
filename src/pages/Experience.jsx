import { Container, Typography, Box, Card, CardContent, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Digital & Web Coordinator",
    company: <a href="https://www.luciojm.es" target="_blank" rel="noopener noreferrer" style={{color: "#bbb", textDecoration: "underline"}}>Lucio J&M</a>,
    date: "Dic 2024 - Actualidad",
    description: "Gestión y mantenimiento de la plataforma web usando WordPress y Elementor. Implementación de mejoras de frontend personalizadas mediante HTML, CSS, JavaScript y PHP. Coordinación de redes sociales, integraciones con proveedores externos y optimización constante del rendimiento y CRO.",
    skills: ["WordPress", "Elementor", "HTML/CSS", "JavaScript", "PHP", "CRO"]
  },
  {
    title: "Frontend Developer",
    company: <a href="https://etrivium.es/" target="_blank" rel="noopener noreferrer" style={{color: "#bbb", textDecoration: "underline"}}>eTrivium</a>,
    date: "Jul 2025 - Dic 2025",
    description: "Contribución al crecimiento de la aplicación con nuevas funcionalidades, refactorización para un código más limpio y mejoras significativas en la experiencia de usuario (UX/UI).",
    skills: ["React.js", "JavaScript", "UX/UI"]
  },
  {
    title: "Frontend Developer (La Velada del Año V)",
    company: <a href="https://github.com/midudev/la-velada-web-oficial" target="_blank" rel="noopener noreferrer" style={{color: "#bbb", textDecoration: "underline"}}>midudev</a>,
    date: "Abr 2025 - May 2025",
    description: "Seleccionada entre casi 21.000 candidatos para colaborar en la web oficial de La Velada del Año V de Ibai Llanos, contribuyendo dentro de un equipo profesional liderado por Midudev para crear un sitio web dinámico y de alto rendimiento.",
    skills: ["Astro", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Frontend Developer",
    company: "AdoptaUnJunior",
    date: "Oct 2024 - Dic 2024",
    description: "Desarrollo del proyecto Cloudsolute, mi primera experiencia profesional tras el bootcamp. Aplicación de buenas prácticas con Next.js y TypeScript en un entorno real y colaborativo.",
    skills: ["Next.js", "TypeScript", "React"]
  }
];

export default function Experience() {
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
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "#80DEEA", fontWeight: "bold", textAlign: "center", mb: 5 }}
          >
            Experiencia Profesional
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ backgroundColor: "#222", color: "#fff", borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ color: "#80DEEA", fontWeight: "bold" }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "#bbb", mb: 2 }}>
                      {exp.company} | {exp.date}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {exp.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {exp.skills.map((skill, i) => (
                        <Chip key={i} label={skill} sx={{ backgroundColor: "#673ab7", color: "#fff" }} />
                      ))}
                    </Box>
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
