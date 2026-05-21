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
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Sobre mí", path: "/about" },
    { name: "Experiencia", path: "/experience" },
    { name: "Servicios", path: "/services" },
    { name: "Proyectos", path: "/projects" },
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          top: { xs: 15, md: 25 }, 
          left: 0, 
          right: 0, 
          width: { xs: "92%", md: "850px" }, 
          mx: "auto", 
          borderRadius: "50px",
          background: "rgba(17, 24, 39, 0.85)", // #111827 semi-transparente
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)",
          color: "#fff",
          zIndex: 1201 
        }}
      >
        <Toolbar sx={{ minHeight: { xs: "56px", sm: "64px" }, px: { xs: 2, md: 4 } }}>
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            sx={{ display: { xs: "block", sm: "none" }, mr: 1 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 800,
              flexGrow: { xs: 1, sm: 0 },
              textDecoration: "none",
              color: "#fff",
              mr: { sm: 4 },
              letterSpacing: "-0.02em",
              textAlign: { xs: "right", sm: "left" }
            }}
          >
            AS<span style={{ color: "#2563eb" }}>.</span>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1, gap: 1 }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Button
                  key={link.name}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: isActive ? "#fff" : "#9ca3af",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "20px",
                    px: 2,
                    background: isActive ? "rgba(255, 255, 255, 0.1)" : "transparent",
                    transition: "all 0.2s",
                    "&:hover": {
                      color: "#fff",
                      background: "rgba(255, 255, 255, 0.15)",
                    }
                  }}
                >
                  {link.name}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)",
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: 700,
                px: 3,
                boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.39)",
                "&:hover": {
                  background: "linear-gradient(90deg, #1d4ed8 0%, #4338ca 100%)",
                  boxShadow: "0 6px 20px rgba(37, 99, 235, 0.5)",
                }
              }}
            >
              Hablemos
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        sx={{
          zIndex: 1300,
          "& .MuiDrawer-paper": {
            width: 250,
            background: "rgba(17, 24, 39, 0.95)",
            backdropFilter: "blur(16px)",
            color: "#fff",
            borderLeft: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "20px",
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <Typography variant="h5" sx={{ fontWeight: 800, ml: 3, mb: 3, mt: 2 }}>
            AS<span style={{ color: "#2563eb" }}>.</span>
          </Typography>
          <List>
            {[...navLinks, { name: "Contacto", path: "/contact" }].map((link) => (
              <ListItem button component={Link} to={link.path} key={link.name} sx={{ mb: 1 }}>
                <ListItemText 
                  primary={link.name} 
                  sx={{ 
                    ml: 1,
                    "& .MuiTypography-root": {
                      fontWeight: 600,
                      color: location.pathname === link.path ? "#2563eb" : "#d1d5db"
                    }
                  }} 
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
