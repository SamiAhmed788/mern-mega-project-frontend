import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from "@mui/material";

const teamMembers = [
  { name: "Muhammad Owais", role: "CEO & Founder", img: "https://cdn.shopify.com/s/files/1/2726/4990/files/Shopify_Resized-_CEO_large.jpg?v=1599451736" },
  { name: "Sara Ahmed", role: "Event Manager", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lrCrOJlYg-9X_nWumbiImOl7IFe7c2dlHQ&s" },
  { name: "Zain Malik", role: "Marketing Head", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyXsFR6Wftp8_eZiYm5ZwQizhUaEXHNli8g&s" },
  { name: "Ayesha Tariq", role: "Logistics Coordinator", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9zDSgECB_Rn3xaAdaCoU0foUI5nP20ulN35cbH27xyqDc0Wnfd8dd3O2Ai4VDpO5_tw&usqp=CAU" }
];

const Team = () => {
  return (
    <Box id="team" sx={{ bgcolor: "#121212", color: "white", py: 5, textAlign: "center" }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Our professional team is dedicated to making your event unforgettable.
        </Typography>

        {/* Team Image */}
        <Box
          component="img"
          src="./DALL·E 2025-02-13 17.08.22 - A group of Pakistani event management staff from DecoEvent, standing together with their hands joined in unity, smiling confidently. They are dressed .webp"
          alt="Our Team"
          sx={{ width: "100%", borderRadius: 2, mb: 4 }}
        />

        {/* Team Members */}
        <Grid container spacing={3} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ bgcolor: "#1E1E1E", color: "white", p: 2, textAlign: "center" }}>
                <Avatar src={member.img} alt={member.name} sx={{ width: 80, height: 80, mx: "auto", mb: 2 }} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
