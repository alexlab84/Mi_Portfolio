import { Container, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { motion } from "framer-motion";
import quiniela from "../assets/Quiniela.jpg";
import refran from "../assets/refran.jpg";
import meme from "../assets/meme.jpg";
import colesterol from "../assets/cholResults.jpg";
import harryPotter from "../assets/HarryPotter.png";
import molones from "../assets/ProyectosMolones.jpg";
import profiles from "../assets/AwesomeProfileCards.jpg";

const projects = [
  {
    title: "Quiniela Parkour (React, Django, PostgreSQL)",
    description: "Aplicación para gestionar quinielas, permitiendo a los usuarios hacer predicciones y comparar resultados en tiempo real. Usuario de prueba: test@test.com, contraseña: quiniela2024.",
    image: quiniela,
    url: "https://parallel-justinn-juanyale-930ef30a.koyeb.app/login"
  },
  {
    title: "Meme Generator (React, HTML, CSS)",
    description: "Herramienta interactiva para crear memes personalizados con texto editable y diferentes plantillas de imágenes.",
    image: meme,
    url: "https://alexlab84.github.io/Meme-Generator/"
  },
  {
    title: "Refranero divertido (JavaScript, HTML, CSS)",
    description: "Generador dinámico de refranes con un toque de humor, combinando frases populares de manera ingeniosa y entretenida.",
    image: refran,
    url: "https://alexlab84.github.io/Generador-de-refranes-divertidos/"
  },
  {
    title: "Cholesterol Results (JavaScript, D3.js, HTML, CSS)",
    description: "Visualización interactiva de datos médicos sobre colesterol, facilitando su interpretación mediante gráficos intuitivos.",
    image: colesterol,
    url: "https://alexlab84.github.io/Visualization-of-cholesterol-test-results/"
  },
  {
    title: "Harry Potter Cards (React, SCSS, API Harry Potter)",
    description: "Aplicación de tarjetas coleccionables con personajes del universo de Harry Potter, organizadas por casas y características mágicas.",
    image: harryPotter,
    url: "https://alexlab84.github.io/HarryPotterCards/"
  },
  {
    title: "Proyectos Molones (React, CSS, JavaScript)",
    description: "Colección de proyectos interesantes creados con React, destacando diferentes funcionalidades y diseños atractivos.",
    image: molones,
    url: "https://alexlab84.github.io/Proyectos-Molones-React/"
  },
  {
    title: "Awesome Profile Cards (JavaScript, HTML, SASS)",
    description: "Generador de tarjetas de presentación digitales, personalizables con foto, información de contacto y enlaces a redes sociales.",
    image: profiles,
    url: "https://alexlab84.github.io/Awesome-profile-cards/"
  },
];

export default function Projects() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5, marginTop: "100px" }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "#80DEEA", fontWeight: "bold" }}>
          Proyectos
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent="center" mt={5}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: index * 0.5 }}
            >
              {/* Enlace envuelve toda la tarjeta */}
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
  <Card
    sx={{
      maxWidth: 345,
      height: 400, // 🔥 Fijamos una altura para todas las tarjetas
      mx: "auto",
      backgroundColor: "#222",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between", // Asegura que los elementos se distribuyan correctamente
      transition: "transform 0.3s",
      "&:hover": { transform: "scale(1.05)" }
    }}
  >
    <CardMedia component="img" height="140" image={project.image} alt={project.title} sx={{width: "80%", margin: "0 auto", borderRadius: 1, marginTop: "20px", marginBottom: "18px"}} />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h5" sx={{ color: "#80DEEA",  marginBottom: "8px" }}>{project.title}</Typography>
      <Typography 
        variant="body2" 
        color="gray"
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: 4, // 🔥 Limita la cantidad de líneas de texto
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
      >
        {project.description}
      </Typography>
    </CardContent>
  </Card>
</a>

            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
