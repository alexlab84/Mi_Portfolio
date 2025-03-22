import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
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
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            paddingBottom: "4px",
            fontWeight: "bold",
            flexGrow: 1,
            textAlign: { xs: "center", sm: "left" },
            marginLeft: { xs: "0", sm: "16px" },
          }}
        >
          AS | Fullstack developer
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontSize: { xs: "1rem", sm: "1rem" },
              fontWeight: "bold",
            }}
          >
            Inicio
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              fontSize: { xs: "1rem", sm: "1rem" },
              fontWeight: "bold",
            }}
          >
            Sobre mí
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/projects"
            sx={{
              fontSize: { xs: "1rem", sm: "1rem" },
              fontWeight: "bold",
            }}
          >
            Proyectos
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{
              fontSize: { xs: "1rem", sm: "1rem" },
              fontWeight: "bold",
            }}
          >
            Contacto
          </Button>
        </Box>
      </Toolbar>
      <Drawer open={open} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List sx={{ paddingTop: "60px" }}>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Inicio" sx={{ color: "#f5f5f5" }} />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="Sobre mí" sx={{ color: "#f5f5f5" }} />
            </ListItem>
            <ListItem button component={Link} to="/projects">
              <ListItemText primary="Proyectos" sx={{ color: "#f5f5f5" }} />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contacto" sx={{ color: "#f5f5f5" }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
