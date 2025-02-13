import React from 'react';
import { Container, Typography } from '@mui/material';
import EventSlider from '../componenets/eventslide';
import ContactForm from '../componenets/contactform';
import ServicesSection from '../componenets/contract';
import VideoSection from '../componenets/section';
import Team from '../componenets/ourteam';

const Home = () => {
  return (
    <>
      {/* Scrollable Sections with IDs */}
      <div id="home">
        <Container>
          <EventSlider />
        </Container>
      </div>

      <div id="services">
        <Container>
          <ServicesSection />
        </Container>
      </div>

      <div id="contact">
        <Container>
          <ContactForm />
        </Container>
      </div>
      <div id="team">
        <Container>
          <Team />
        </Container>
      </div>
      <div id="video">
        <Container>
          <VideoSection />
        </Container>
      </div>
    </>
  );
};

export default Home;
