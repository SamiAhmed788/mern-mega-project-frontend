import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, InputAdornment, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Email, Message, Person, Event } from '@mui/icons-material';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', eventType: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '', eventType: '' });
    } catch (error) {
      alert('❌ Failed to send message. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: '#121212', // Dark Mode Background
          color: 'white',
          textAlign: 'center',
          border: '8px solid green',
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Contact Us
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          {/* Name Input */}
          <TextField
            fullWidth
            label="Your Name"
            InputLabelProps={{ style: { color: 'white' } }} // Label White
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            sx={{ mb: 2, bgcolor: 'black', borderRadius: 1, input: { color: 'white' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person sx={{ color: 'white' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Email Input */}
          <TextField
            fullWidth
            label="Your Email"
            InputLabelProps={{ style: { color: 'white' } }} // Label White
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            sx={{ mb: 2, bgcolor: 'black', borderRadius: 1, input: { color: 'white' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email sx={{ color: 'white' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Event Type Selection */}
          <FormControl fullWidth sx={{ mb: 2, bgcolor: 'black', borderRadius: 1 }}>
            <InputLabel sx={{ color: 'white' }}>Select Event Type</InputLabel> {/* Label White */}
            <Select
              value={formData.eventType}
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
              sx={{ color: 'white' }} // White Text for Dropdown
              startAdornment={
                <InputAdornment position="start">
                  <Event sx={{ color: 'white' }} />
                </InputAdornment>
              }
            >
              <MenuItem value="Wedding">Wedding</MenuItem>
              <MenuItem value="Corporate">Corporate Event</MenuItem>
              <MenuItem value="Catering">Catering Service</MenuItem>
              <MenuItem value="Birthday">Birthday Party</MenuItem>
            </Select>
          </FormControl>

          {/* Message Input */}
          <TextField
            fullWidth
            label="Your Message"
            InputLabelProps={{ style: { color: 'white' } }} // Label White
            multiline
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            sx={{ mb: 2, bgcolor: 'black', borderRadius: 1, input: { color: 'white' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Message sx={{ color: 'white' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
