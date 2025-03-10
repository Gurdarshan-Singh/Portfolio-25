import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../../Components/Navbar/Navbar';
import Body from '../../Components/Body/Body';
import Footer from '../../Components/Footer/Footer';

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Hero() {
  return (
    <div>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Ensures the default styles match the dark theme */}
      <Navbar />
      <Body />
      <Footer />
    </ThemeProvider>
    </div>
  );
}
