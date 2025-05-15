import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import HeroContainer from '../CustomComponent/HeroContainer';

export default function ContactHero() {
  return (
    <HeroContainer title="Contact Me!">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 1000,
          margin: '0 auto',
          padding: 2,
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src="https://img.freepik.com/free-photo/vintage-pink-telephone-composition_23-2148913955.jpg"
          alt="Contact Illustration"
          sx={{
            width: { xs: '100%', md: '50%' },
            borderRadius: 2,
            boxShadow: 3,
            objectFit: 'cover',
            maxHeight: 400,
          }}
        />

        {/* Form Section */}
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: { xs: '100%', md: '50%' },
          }}
        >
          <Typography variant="body1" color="textSecondary" textAlign="center" mb={2}>
            I'd love to hear from you! Whether it's a project, idea, or just to say hello.
          </Typography>

          <TextField label="Name" variant="outlined" fullWidth required />
          <TextField label="Email" variant="outlined" type="email" fullWidth required />
          <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />

          <Button
          href=""
          sx={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold", // Makes text bold
            transition: "transform 0.3s ease, background-color 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)", // Scale up slightly
              backgroundColor: "#f0f0f0", // Light hover background
            },
          }}
        >
          Send Message
        </Button>
        </Box>
      </Box>
    </HeroContainer>
  );
}
