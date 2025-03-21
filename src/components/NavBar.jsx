import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#673ab7", zIndex: 1201 }}>
      <Toolbar>
      <IconButton
          color="inherit"
          aria-label="open menu"
          edge="start"
          sx={{ display: { xs: "block", sm: "none" } }} // Solo en pantallas pequeñas
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: { xs: "center", sm: "left" }, // Centrado en móviles, alineado a la izquierda en pantallas grandes
            marginLeft: { xs: "0", sm: "16px" }, // Aseguramos que haya margen en pantallas grandes
          }}
        >
          AS | Fullstack developer
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
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
        </Box>
      </Toolbar>
      <Drawer open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List sx={{ paddingTop: "60px" }}>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Inicio" sx={{ color: "#f5f5f5" }}/>
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="Sobre mí" sx={{ color: "#f5f5f5" }}/>
            </ListItem>
            <ListItem button component={Link} to="/projects">
              <ListItemText primary="Proyectos" sx={{ color: "#f5f5f5" }}/>
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contacto" sx={{ color: "#f5f5f5" }}/>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}




