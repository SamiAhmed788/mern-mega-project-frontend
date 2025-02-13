import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { AppBar, Toolbar, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>

      <Container sx={{ mt: 5 }}>
        <Typography variant="h3" align="center" color="primary" gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 3 }}>
              <Typography variant="h5" color="text.primary" gutterBottom>
                Who We Are
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We are EventX, a premier event management company known for
                organizing world-class events that leave lasting impressions. With
                over 10 years of experience in managing corporate events, weddings,
                product launches, and more, we aim to deliver seamless experiences
                tailored to the unique needs of each client.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 3 }}>
              <Typography variant="h5" color="text.primary" gutterBottom>
                Our Services
              </Typography>
              <Typography variant="body1" color="text.secondary">
                From intimate gatherings to grand celebrations, EventX offers a
                wide range of services, including:
                <ul>
                  <li>Event Planning & Coordination</li>
                  <li>Venue Selection & Decoration</li>
                  <li>Catering & Hospitality</li>
                  <li>Entertainment & Activities</li>
                  <li>Audio/Visual Production</li>
                  <li>Branding & Promotion</li>
                </ul>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Typography variant="h6" color="text.primary">
            Our Mission
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            At EventX, we believe in creating unforgettable experiences. Our
            mission is to provide our clients with flawless event execution, while
            focusing on innovation, creativity, and personalized service.
          </Typography>
        </Box>
      </Container>


    </ThemeProvider>
  );
};

export default AboutUs;
