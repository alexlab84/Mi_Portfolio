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
                  "Frontend Developer",
                  "Web Developer",
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
              Frontend Developer
            </span>
            , especializada en crear{" "}
            <span style={{ color: "#80DEEA", fontWeight: "bold" }}>
              experiencias digitales
            </span>{" "}
            atractivas y funcionales. Con experiencia real trabajando en entornos modernos con{" "}
            <span style={{ color: "#80DEEA", fontWeight: "bold" }}>React</span>{" "}
            y en la optimización de sitios en{" "}
            <span style={{ color: "#80DEEA", fontWeight: "bold" }}>WordPress y Elementor</span>
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
              to="/experience"
              sx={{
                padding: "12px 18px",
                fontSize: "1.1rem",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Mi Experiencia
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/services"
              sx={{
                padding: "12px 24px",
                fontSize: "1.1rem",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Servicios Web
            </Button>
            <Button
              variant="text"
              color="inherit"
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
