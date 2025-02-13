import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DiningSharp } from "@mui/icons-material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="absolute" elevation={0} sx={{ bgcolor: "rgba(0, 0, 0, 0.6)", top: 0, left: 0, right: 0 }}>
        <Toolbar>
          {/* Logo */}
          <Box component="a" href="#home" sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "white" }}>
            <DiningSharp />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>DecoEvent Management</Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }}></Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {["Home", "About", "Services", "Contact", "Team"].map((text) => (
              <Button
                key={text}
                sx={{ color: "white" }}
                href={`#${text.toLowerCase()}`}
              >
                {text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton sx={{ display: { xs: "block", md: "none" }, color: "white" }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {["Home", "Abput", "Services", "Contact", "Team"].map((text) => (
            <ListItem button key={text} component="a" href={`#${text.toLowerCase()}`} onClick={handleDrawerToggle}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url('pexels-asadphoto-169190.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.5)", p: 3, borderRadius: 2 }}>
          <Typography variant="h3" fontWeight="bold">Make Your Event Unforgettable!</Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>Professional Event Management Services for All Occasions.</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
