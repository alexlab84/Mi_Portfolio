import { Avatar, Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import avatarImage from "../assets/avatar.png"; // Importa la imagen de tu avatar

export default function Home() {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: { xs: "300px", sm: "64px" },
        textAlign: "center",
         // Más espacio para centrar mejor
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh", // Ocupa casi toda la pantalla
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }} // Comienza más arriba y con opacidad 0
        animate={{ opacity: 1, y: 0 }} // Se mueve hacia su posición original
        transition={{ duration: 1 }}
      >
      <Avatar
        src={avatarImage} // Aquí puedes poner la ruta de tu imagen
        alt="Foto de perfil"
        sx={{ width: 120, height: 120, mb: 2, marginBottom:10}} // Tamaño y margen inferior
      />
      </motion.div>
      {/* Animación del texto principal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Hola, soy{" "}
          <span style={{ color: "#80DEEA", fontWeight: "bold" }}>
            <Typewriter
              words={["Alejandra Sánchez", "Web Developer", "Fullstack Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </Typography>
      </motion.div>

      {/* Animación del subtítulo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography variant="h5" color="textSecondary" paragraph>
  Programadora <span style={{ color: "#F5F5F5", fontWeight: "bold" }}>Fullstack en formación</span>, apasionada por crear <span style={{ color: "#F5F5F5", fontWeight: "bold" }}>experiencias digitales</span> funcionales y atractivas. Actualmente, me estoy especializando en <span style={{ color: "#F5F5F5", fontWeight: "bold" }}>React</span> para el frontend y explorando <span style={{ color: "#F5F5F5", fontWeight: "bold" }}>Django</span> en el backend. Aunque aún estoy en proceso de aprendizaje, me encanta enfrentar <span style={{ color: "#F5F5F5", fontWeight: "bold" }}>nuevos desafíos</span> y mejorar mis habilidades cada día.
</Typography>
      </motion.div>

      {/* Animación de los botones */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
         <Box
          mt={4}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Alineación en columna en móviles, en fila en pantallas grandes
            gap: 2, // Espacio entre los botones
            alignItems: "center", // Centrado de los botones
            justifyContent: "center", // Centrado de los botones
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/projects"
            sx={{
              padding: "12px 24px", // Aumenta el tamaño del botón
              fontSize: "1.1rem",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.1)" },
              width: { xs: "100%", sm: "auto" }, // En móviles ocupa el 100% del ancho
            }}
          >
            Ver Proyectos
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            sx={{
              padding: "12px 24px", // Aumenta el tamaño del botón
              fontSize: "1.1rem",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.1)" },
              width: { xs: "100%", sm: "auto" }, // En móviles ocupa el 100% del ancho
            }}
          >
            Contáctame
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}
