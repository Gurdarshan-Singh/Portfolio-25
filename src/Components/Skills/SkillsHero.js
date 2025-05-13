import React from "react";
import { Box } from "@mui/material";
import HeroContainer from "../CustomComponent/HeroContainer"; 
import Images from "../Images/Images";

export default function SkillsHero() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Centers the content horizontally
        padding: 2, // Add padding around the container
      }}
    >
      <HeroContainer
        title="Skills"
      >
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', // Flex row layout
            // justifyContent: 'space-around', // Space out images horizontally
            alignItems: 'center', // Center the images vertically
            flexWrap: 'wrap', // Allow wrapping on smaller screens
            gap: 2, // Add spacing between images
          }}
        >
        <Images src='/react.png' title='React' />
        <Images src='/aws.png' title='AWS' />
        </Box>
      </HeroContainer>
    </Box>
  );
}
