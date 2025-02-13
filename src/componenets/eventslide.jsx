import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const EventSlider = () => {
  const events = [
    { id: 1, name: 'Shaadi', image: 'https://media.istockphoto.com/id/2148524264/photo/indian-newlyweds-taking-circles-around-the-sacred-fire-known-as-saptapadi-during-their-hindu.jpg?s=1024x1024&w=is&k=20&c=O4PWYXGsswqOkI_WgdRt5GZgmAAbBTGdZc2L3w4Eqdc=' },
    { id: 2, name: 'Mehndi', image: 'https://th.bing.com/th/id/R.aa6627cec345231b8cc69736c2cfa851?rik=VJh5IRdLTL4Hmg&riu=http%3a%2f%2fyoumeandtrends.com%2fwp-content%2fuploads%2f2015%2f11%2fwedding-stage-decoration-with-flowers.jpg&ehk=2h9J7oqWffAAjaUSGprqOEf3OPcl3khR%2fN4IgWpGRis%3d&risl=&pid=ImgRaw&r=0' },
    // { id: 3, name: 'Mangni', image: 'https://www.happywedding.app/blog/wp-content/uploads/2023/03/Pink-and-white-wedding-stage-decoration.jpg' },
    { id: 3, name: 'Mangni', image: 'https://images.prismic.io/pompnshow/dd0d9268-511a-4da9-9de8-3586103fcde0_0568c426e0d964e7c324ba64ffd98100.jpg?auto=compress,format&rect=0,0,600,400&w=1000&h=667' },
    { id: 3, name: 'Mangni', image: 'https://th.bing.com/th/id/R.52d5b84ef922f160c8615b17245f9344?rik=Thf454qH3ij2wg&pid=ImgRaw&r=0' },
    { id: 3, name: 'Mangni', image: 'https://i.pinimg.com/originals/13/b3/24/13b32474b79279e1d08b4426012deaa9.jpg' }


 
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ textAlign: 'center', my: 4, fontWeight: 'bold' }}>
        Event Management Services
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 4 }}>
        We provide top-notch event management services for all your special occasions, ensuring a seamless and memorable experience.
      </Typography>
      <Box sx={{ width: '100%', height: '100vh' }}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          style={{ width: '100%', height: '100%' }}
        >
          {events.map(event => (
            <SwiperSlide key={event.id}>
              <img
                src={event.image}
                alt={event.name}
                style={{ width: '100%', height: '100vh', objectFit: 'cover', borderRadius: '8px' }}
              />
              <Typography variant="h5" sx={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', color: 'white', background: 'rgba(0, 0, 0, 0.5)', padding: '8px 16px', borderRadius: '8px' }}>
                {event.name}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default EventSlider;
