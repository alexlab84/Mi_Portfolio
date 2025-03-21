import { Container, Typography, Button } from "@mui/material";

export default function Contact() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Contacto
      </Typography>
      <Typography variant="body1">¡Hablemos! Puedes encontrarme en:</Typography>
      <Button variant="contained" color="primary" href="https://linkedin.com">
        LinkedIn
      </Button>
    </Container>
  );
}
