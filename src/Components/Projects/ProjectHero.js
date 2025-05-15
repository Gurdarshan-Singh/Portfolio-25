import React from "react";
import HeroContainer from "../CustomComponent/HeroContainer";
import ProjectCard from "../CustomComponent/ProjectCard";
import { Box } from "@mui/material";

export default function ProjectHero() {
  return (
    <HeroContainer title="Projects">
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap", // Allow wrapping for small screens
          justifyContent: "center",
        }}
      >
        <Box sx={{ flex: 1, minWidth: 300, maxWidth: 400 }}>
          <ProjectCard
            title="SymboleoGPT"
            content="Built an end-to-end automated system that generates and refines Symboleo contracts using ChatGPT-4.0, requiring only a single button click in the Eclipse IDE."
            image="https://media.licdn.com/dms/image/v2/D4E22AQEzOElbY-n06w/feedshare-shrink_800/feedshare-shrink_800/0/1719966731545?e=2147483647&v=beta&t=yfhP11lU3PJcCXDgfm4WK7CD83WdiYbSQiU0s_O3qds"
          />
        </Box>
        <Box sx={{ flex: 1, minWidth: 300, maxWidth: 400 }}>
          <ProjectCard
            title="Secrets"
            content="Developed a secure, encrypted messaging web app with Google OAuth2 authentication using Passport and Passport-Local-Mongoose, ensuring secure user access"
            image="https://user-images.githubusercontent.com/79242952/194709152-020321fb-f811-47bb-a97b-365751bcd5a3.PNG"
          />
        </Box>
        <Box sx={{ flex: 1, minWidth: 300, maxWidth: 400 }}>
          <ProjectCard 
          title="Keeper"
          content="Designed and developed a note-keeping app using React.js for dynamic front-end interactions, Node.js for backend functionality, and MongoDB for data storage" 
          image="https://user-images.githubusercontent.com/19628705/70381921-d3607180-1907-11ea-94f1-48bb7702494e.png"
          />
        </Box>
      </Box>
    </HeroContainer>
  );
}
