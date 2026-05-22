import { Container, Typography, Button, Box, Card } from "@mui/material";
import { motion } from "framer-motion";
import { LinkedIn, Email, GitHub, Send, Event } from "@mui/icons-material";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 8, minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container maxWidth="md">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          
          <motion.div variants={itemVariants}>
            <Card sx={{ 
              borderRadius: "40px", 
              p: { xs: 4, md: 8 }, 
              background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
              border: "1px solid #f3f4f6",
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.05)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            }}>
              
              {/* Decorative background shape */}
              <Box sx={{ 
                position: "absolute", left: "-10%", top: "-30%", 
                width: 400, height: 400, 
                background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, rgba(255,255,255,0) 70%)", 
                borderRadius: "50%",
                zIndex: 0
              }} />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Box sx={{ 
                    width: 80, height: 80, 
                    borderRadius: "24px", 
                    background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)", 
                    display: "flex", alignItems: "center", justifyContent: "center",
                    mx: "auto", mb: 4,
                    boxShadow: "0 10px 20px -5px rgba(37, 99, 235, 0.3)"
                  }}>
                    <Send sx={{ fontSize: 40, color: "#fff", transform: "translate(-2px, 2px)" }} />
                  </Box>
                </motion.div>

                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: "3rem", md: "4.5rem" }, 
                    fontWeight: 800, 
                    lineHeight: 1.1, 
                    letterSpacing: "-0.04em",
                    color: "#111827",
                    mb: 2
                  }}
                >
                  Vamos a crear <br />
                  <span style={{ color: "#2563eb" }}>algo genial</span>
                </Typography>

                <Typography variant="body1" sx={{ color: "#4b5563", fontSize: "1.2rem", mb: 6, maxWidth: "500px", mx: "auto", lineHeight: 1.6 }}>
                  ¿Tienes una idea, un proyecto en mente o simplemente quieres saludar? ¡Estoy emocionada por conectar contigo!
                </Typography>

                <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" alignItems="center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ width: "100%", maxWidth: "220px" }}>
                    <Button
                      variant="contained"
                      startIcon={<Event />}
                      href="https://calendly.com/alejandra-sachez-garcia/30min"
                      target="_blank"
                      fullWidth
                      sx={{
                        py: 1.5,
                        fontSize: "1rem",
                        borderRadius: "50px",
                        background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                        boxShadow: "0 10px 20px -5px rgba(37, 99, 235, 0.4)",
                        "&:hover": { background: "linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%)" },
                      }}
                    >
                      Agendar Reunión
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ width: "100%", maxWidth: "220px" }}>
                    <Button
                      variant="outlined"
                      startIcon={<Email />}
                      href="mailto:alejandra.sachez.garcia@gmail.com"
                      fullWidth
                      sx={{
                        py: 1.5,
                        fontSize: "1rem",
                        borderRadius: "50px",
                        color: "#111827",
                        border: "2px solid #111827",
                        "&:hover": { border: "2px solid #111827", background: "rgba(17, 24, 39, 0.05)" },
                      }}
                    >
                      Email
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ width: "100%", maxWidth: "220px" }}>
                    <Button
                      variant="outlined"
                      startIcon={<LinkedIn />}
                      href="https://linkedin.com/in/alexlab84"
                      target="_blank"
                      fullWidth
                      sx={{
                        py: 1.5,
                        fontSize: "1rem",
                        borderRadius: "50px",
                        color: "#0077B5",
                        border: "2px solid #0077B5",
                        background: "rgba(0, 119, 181, 0.05)",
                        "&:hover": { border: "2px solid #0077B5", background: "rgba(0, 119, 181, 0.1)" },
                      }}
                    >
                      LinkedIn
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ width: "100%", maxWidth: "220px" }}>
                    <Button
                      variant="outlined"
                      startIcon={<GitHub />}
                      href="https://github.com/alexlab84"
                      target="_blank"
                      fullWidth
                      sx={{
                        py: 1.5,
                        fontSize: "1rem",
                        borderRadius: "50px",
                        color: "#111827",
                        border: "2px solid #111827",
                        "&:hover": { border: "2px solid #111827", background: "rgba(17, 24, 39, 0.05)" },
                      }}
                    >
                      GitHub
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            </Card>
          </motion.div>

        </motion.div>
      </Container>
    </Box>
  );
}
