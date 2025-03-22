/* eslint-disable no-unused-vars */

import { Avatar, Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import avatarImage from "../assets/avatar.png";
export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #121212, #1a1a2e)",
        color: "#fff",
        padding: "40px 0",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          marginTop: "30px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Avatar
            src={avatarImage}
            alt="Foto de perfil"
            sx={{ width: 120, height: 120, mb: 3 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Hola, soy{" "}
            <span style={{ color: "#80DEEA", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "Alejandra Sánchez",
                  "Web Developer",
                  "Fullstack Developer",
                ]}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#E0E0E0", maxWidth: "600px" }}
            paragraph
          >
            Programadora{" "}
            <span style={{ color: "#80DEEA", fontWeight: "bold" }}>
              Fullstack en formación
            </span>
            , apasionada por crear{" "}
            <span style={{ color: "#80DEEA", fontWeight: "bold" }}>
              experiencias digitales
            </span>{" "}
            funcionales y atractivas. Actualmente, me especializo en{" "}
            <span style={{ color: "#80DEEA", fontWeight: "bold" }}>React</span>{" "}
            y{" "}
            <span style={{ color: "#80DEEA", fontWeight: "bold" }}>Django</span>
            .
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Box
            mt={4}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/projects"
              sx={{
                padding: "12px 18px",
                fontSize: "1.1rem",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Ver Proyectos
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/contact"
              sx={{
                padding: "12px 24px",
                fontSize: "1.1rem",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Contáctame
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
