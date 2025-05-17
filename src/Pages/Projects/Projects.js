import React from 'react'
import { Box } from '@mui/material'
import {Typography} from '@mui/material'
import ProjectCardDetailed from '../../Components/CustomComponent/ProjectCardDetailed'


const projects = [
  {
    title: "SymboleoGPT",
    content: "Built an end-to-end automated system that generates and refines Symboleo contracts using ChatGPT-4.0, requiring only a single button click in the Eclipse IDE.",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQEzOElbY-n06w/feedshare-shrink_800/feedshare-shrink_800/0/1719966731545?e=2147483647&v=beta&t=yfhP11lU3PJcCXDgfm4WK7CD83WdiYbSQiU0s_O3qds",
  },
  {
    title: "Secrets",
    content: "Developed a secure, encrypted messaging web app with Google OAuth2 authentication using Passport and Passport-Local-Mongoose, ensuring secure user access",
    image: "https://user-images.githubusercontent.com/79242952/194709152-020321fb-f811-47bb-a97b-365751bcd5a3.PNG",
  },
  {
    title: "Keeper",
    content: "Designed and developed a note-keeping app using React.js for dynamic front-end interactions, Node.js for backend functionality, and MongoDB for data storage",
    image: "https://user-images.githubusercontent.com/19628705/70381921-d3607180-1907-11ea-94f1-48bb7702494e.png",
  },
];

export default function Projects() {
  return (
    <div>
        <Box mt={10}>
            <Typography variant='h2' bold>
                Projects 
            </Typography>
            <ProjectCardDetailed projects={projects}/>
        </Box>
    </div>
  )
}
