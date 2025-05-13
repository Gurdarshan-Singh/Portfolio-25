import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { Instagram, LinkedIn } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        color: 'white', // White text for contrast
        py: 5,
        textAlign: 'center',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        {/* Social Media Icons using Box with flex layout */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3, // Spacing between icons
            mb: 3,
          }}
        >
          <IconButton href="https://github.com/Gurdarshan-Singh" target="_blank" color="inherit">
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://leetcode.com/u/gurdarshan408/" target="_blank" color="inherit">
            <CodeIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com/gurdarshan_xd/" target="_blank" color="inherit">
            <Instagram />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/gurdarshan-singh1/" target="_blank" color="inherit">
            <LinkedIn />
          </IconButton>
        </Box>

        {/* Copyright and Links */}
        <Typography variant="body1" sx={{ mb: 2 }}>
          © {new Date().getFullYear()} Gurdarshan Singh. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <Link href="/privacy-policy" color="inherit" underline="hover" sx={{ mr: 2 }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" color="inherit" underline="hover">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
