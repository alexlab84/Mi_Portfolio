import { Container, Typography, Card, CardContent } from "@mui/material";

export default function Projects() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Proyectos
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">Proyecto 1</Typography>
          <Typography variant="body2">
            Descripción breve del proyecto.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
