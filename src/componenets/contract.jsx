import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

const services = [
  {
    title: 'Wedding Planning',
    description: 'Wedding is not a day; it’s an emotion for those who want a beautiful destination.',
    image: 'https://th.bing.com/th/id/OIP.IzuVRE23fQf9CDj-X2jfLAHaEK?rs=1&pid=ImgDetMain'
  },
  {
    title: 'Corporate Events',
    description: 'Since 2006, we have been elevating the standards of corporate event management.',
    image: 'https://th.bing.com/th/id/OIP.3E8KVzEkIevADrCp__rByAHaE8?w=286&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    title: 'Catering Service',
    description: 'After 3 years of research, we have the best chefs to serve delicious cuisines.',
    image: 'https://th.bing.com/th/id/OIP.mXk6kBcrindk6DZZUj6gKgHaE0?w=297&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  }
];

const ServicesSection = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 6, backgroundColor: '#121212', color: 'white' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        A RANGE OF SERVICES ADAPTED TO YOUR NEEDS
      </Typography>
      <Grid container spacing={3} justifyContent="center" >
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 350, mx: 'auto', borderRadius: 2, boxShadow: 4, transition: '0.3s',
              '&:hover': { transform: 'scale(1.05)' } }}>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{service.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
