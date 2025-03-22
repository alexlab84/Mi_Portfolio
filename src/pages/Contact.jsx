/* eslint-disable no-unused-vars */

import { Container, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { LinkedIn, Email, GitHub, Send } from "@mui/icons-material";

export default function Contact() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(135deg, #121212, #1a1a2e)",
        padding: "40px 0",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Container
          maxWidth="xs"
          sx={{
            textAlign: "center",
            p: 4,
            backgroundColor: "#222",
            color: "#fff",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Send sx={{ fontSize: 50, color: "#80DEEA", mb: 1 }} />
          </motion.div>

          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#80DEEA", fontWeight: "bold" }}
          >
            ¡Hablemos!
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, fontStyle: "italic", color: "#ccc" }}
          >
            ¿Tienes una idea o un proyecto en mente? ¡Estoy emocionada por
            conectar contigo! 🚀
          </Typography>

          <Box display="flex" flexDirection="column" gap={2}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="contained"
                startIcon={<LinkedIn />}
                href="https://linkedin.com"
                target="_blank"
                fullWidth
                sx={{
                  backgroundColor: "#0077B5",
                  "&:hover": { backgroundColor: "#005582" },
                }}
              >
                LinkedIn
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="contained"
                startIcon={<GitHub />}
                href="https://github.com"
                target="_blank"
                fullWidth
                sx={{
                  backgroundColor: "#333",
                  "&:hover": { backgroundColor: "#000" },
                }}
              >
                GitHub
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="contained"
                startIcon={<Email />}
                href="mailto:alejandra.sanchez.garcia@gmail.com"
                fullWidth
                sx={{
                  backgroundColor: "#6A0DAD",
                  "&:hover": { backgroundColor: "#4A086D" },
                }}
              >
                Enviar un correo
              </Button>
            </motion.div>
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
}
