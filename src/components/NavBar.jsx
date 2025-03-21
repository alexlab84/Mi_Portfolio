import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#673ab7" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        AS | Fullstack developer
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Sobre mí
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          Proyectos
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contacto
        </Button>
      </Toolbar>
    </AppBar>
  );
}




