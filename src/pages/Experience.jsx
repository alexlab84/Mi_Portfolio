import { Container, Typography, Box, Card, Grid, Chip } from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Digital & Web Coordinator",
    company: "Lucio J&M",
    link: "https://www.luciojm.es",
    date: "Dic 2024 - Actualidad",
    description: "Gestión y mantenimiento de la plataforma web usando WordPress y Elementor. Implementación de mejoras de frontend personalizadas mediante HTML, CSS, JavaScript y PHP. Coordinación de integraciones externas y optimización CRO.",
    skills: ["WordPress", "Elementor", "HTML/CSS", "JavaScript", "CRO"],
    color: "#2563eb"
  },
  {
    title: "Frontend Developer",
    company: "eTrivium",
    link: "https://etrivium.es/",
    date: "Jul 2025 - Dic 2025",
    description: "Contribución al crecimiento de la aplicación con nuevas funcionalidades, refactorización para un código más limpio y mejoras significativas en la experiencia de usuario (UX/UI).",
    skills: ["React.js", "JavaScript", "UX/UI"],
    color: "#4f46e5"
  },
  {
    title: "Frontend Developer (La Velada V)",
    company: "midudev",
    link: "https://github.com/midudev/la-velada-web-oficial",
    date: "Abr 2025 - May 2025",
    description: "Seleccionada entre casi 21.000 candidatos para colaborar en la web oficial de La Velada del Año V de Ibai Llanos, contribuyendo dentro de un equipo profesional liderado por Midudev.",
    skills: ["Astro", "TypeScript", "Tailwind CSS"],
    color: "#000000"
  },
  {
    title: "Frontend Developer",
    company: "AdoptaUnJunior",
    link: "#",
    date: "Oct 2024 - Dic 2024",
    description: "Desarrollo del proyecto Cloudsolute. Aplicación de buenas prácticas con Next.js y TypeScript en un entorno real y colaborativo.",
    skills: ["Next.js", "TypeScript", "React"],
    color: "#4b5563"
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

export default function Experience() {
  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 8, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          
          <Box sx={{ mb: 8, textAlign: { xs: "center", md: "left" } }}>
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: "3rem", sm: "4rem", md: "5rem" }, 
                  fontWeight: 800, 
                  lineHeight: 1.1, 
                  letterSpacing: "-0.04em",
                  color: "#111827",
                }}
              >
                Experiencia <br />
                <span style={{ 
                  background: "linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  Profesional.
                </span>
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants} style={{ height: "100%" }}>
                  <Card sx={{ 
                    height: "100%",
                    borderRadius: "32px", 
                    p: { xs: 3, md: 5 }, 
                    border: "1px solid #f3f4f6",
                    boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.1)",
                      borderColor: "#e5e7eb"
                    }
                  }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", mb: 2 }}>
                      <Typography variant="h4" sx={{ color: "#111827", fontWeight: 800, letterSpacing: "-0.02em", mb: 1, width: "100%" }}>
                        {exp.title}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography 
                          component="a" 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          sx={{ color: exp.color, fontWeight: 700, textDecoration: "none", fontSize: "1.1rem", "&:hover": { textDecoration: "underline" } }}
                        >
                          {exp.company}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500 }}>
                          • {exp.date}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Typography variant="body1" sx={{ color: "#4b5563", mb: 4, lineHeight: 1.7, fontSize: "1.05rem" }}>
                      {exp.description}
                    </Typography>
                    
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: "auto" }}>
                      {exp.skills.map((skill, i) => (
                        <Chip 
                          key={i} 
                          label={skill} 
                          sx={{ 
                            backgroundColor: "#f3f4f6", 
                            color: "#111827", 
                            fontWeight: 600,
                            borderRadius: "12px",
                            "&:hover": { backgroundColor: exp.color, color: "#fff" }
                          }} 
                        />
                      ))}
                    </Box>
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
