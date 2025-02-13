import React from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        bgcolor: "#121212",
        color: "white",
        py: 4,
        textAlign: "center",
        borderTop: "4px solid green",
      }}
    >
      <Container>
        {/* Company Info */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Event Management Company
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Creating Unforgettable Experiences
        </Typography>

        {/* Social Media Icons */}
        <Box>
          <IconButton href="https://facebook.com" target="_blank" sx={{ color: "white", "&:hover": { color: "#1877F2" } }}>
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: "white", "&:hover": { color: "#1DA1F2" } }}>
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: "white", "&:hover": { color: "#E1306C" } }}>
            <Instagram fontSize="large" />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "white", "&:hover": { color: "#0077B5" } }}>
            <LinkedIn fontSize="large" />
          </IconButton>
        </Box>

        {/* Copyright & Owner */}
        <Typography variant="body2" sx={{ mt: 3 }}>
          © {currentYear} Event Management Company. All rights reserved.
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          Owner: Muhammad Owais
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
