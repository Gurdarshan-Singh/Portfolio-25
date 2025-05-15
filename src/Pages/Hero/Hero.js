import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../../Components/Hero/Navbar/Navbar';
import Front from '../../Components/Hero/Body/Front';
import Footer from '../../Components/Hero/Footer/Footer';
import AboutHero from '../../Components/About/AboutHero';
import SkillsHero from '../../Components/Skills/SkillsHero';
import ProjectHero from '../../Components/Projects/ProjectHero';
import Contact from '../../Components/Contact/Contact';
import ContactHero from '../../Components/Contact/ContactHero';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h3: {
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h6: {
      fontSize: '1.2rem',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
});

export default function Hero() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline /> {/* Ensures the default styles match the dark theme */}
        
        <video
          src="/space.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
          onLoadedData={() => console.log("Video loaded and ready to play!")}
        >
          Your browser does not support the video tag.
        </video>
        
        <Navbar />
        
        {/* Main Content */}
        <div style={{ padding: '0 10px' }}>
          <Front />
          <AboutHero />
          <SkillsHero />
          <ProjectHero />
          <ContactHero />
        </div>

        {/* Footer */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}
