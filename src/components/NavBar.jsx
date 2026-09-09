import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { color, font, size } from "../tokens";

const navLinks = [
  { name: "Trabajo", path: "/projects" },
  { name: "Trayectoria", path: "/experience" },
  { name: "Sobre mí", path: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(251, 250, 248, 0.82)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: `1px solid ${color.line}`,
          color: color.ink,
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 60, md: 68 },
            px: { xs: 2.5, md: 5 },
            gap: 2,
          }}
        >
          {/* Marca: el nombre entero, no unas siglas. */}
          <Typography
            component={Link}
            to="/"
            sx={{
              fontFamily: font.display,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              fontSize: "1.25rem",
              color: color.ink,
              textDecoration: "none",
              flexGrow: 1,
              "&:hover": { color: color.accent },
            }}
          >
            Alejandra Sánchez
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 0.5 }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  disableRipple
                  aria-current={isActive ? "page" : undefined}
                  sx={{
                    color: isActive ? color.accent : color.inkMuted,
                    fontSize: size.small,
                    fontWeight: 500,
                    borderRadius: 0,
                    px: 1.5,
                    minWidth: "auto",
                    "&:hover": { color: color.ink, backgroundColor: "transparent" },
                  }}
                >
                  {link.name}
                </Button>
              );
            })}
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              sx={{ ml: 1.5 }}
            >
              Escríbeme
            </Button>
          </Box>

          <IconButton
            aria-label="Abrir menú"
            aria-expanded={open}
            edge="end"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", sm: "none" }, color: color.ink }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "min(320px, 82vw)",
              backgroundColor: color.bg,
              borderLeft: `1px solid ${color.line}`,
              px: 2,
              py: 2,
            },
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton aria-label="Cerrar menú" onClick={() => setOpen(false)} sx={{ color: color.ink }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {[...navLinks, { name: "Escríbeme", path: "/contact" }].map((link) => (
            <ListItemButton
              key={link.path}
              component={Link}
              to={link.path}
              onClick={() => setOpen(false)}
              sx={{ borderRadius: 0, borderBottom: `1px solid ${color.line}`, py: 2 }}
            >
              <ListItemText
                primary={link.name}
                slotProps={{
                  primary: {
                    sx: {
                      fontFamily: font.display,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      fontSize: "1.5rem",
                      color: pathname === link.path ? color.accent : color.ink,
                    },
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
