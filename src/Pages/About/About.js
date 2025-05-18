import React from "react";
import { Box, Typography, Avatar, Divider} from "@mui/material";
import HeroContainer from "../../Components/CustomComponent/HeroContainer";
import {Button} from "@mui/material";

export default function About() {
  return (
    <Box mt={10} px={3}>
      <Typography variant="h2" align="center" gutterBottom >
        About Me!
      </Typography>

      <HeroContainer>
        {/* Intro Section */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          gap={4}
          mb={4}
        >
          <Avatar
            src="/me.png" // Replace with your actual image
            alt="Gurdarshan Singh"
            sx={{
              width: 180,
              height: 180,
              border: "4px solid white", // ✅ Border thickness and color
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)", // optional glow
            }}
          />

          <Box maxWidth="600px">
            <Typography variant="body1" paragraph>
              Hi! I'm <strong>Gurdarshan Singh</strong>, a passionate Computer
              Science graduate student at the University of Ottawa with a strong
              foundation in full-stack development, cloud infrastructure, and
              AI-powered solutions.
            </Typography>
            <Typography variant="body1" paragraph>
              I’ve developed scalable web applications, chatbots, and secure
              platforms using React, AWS, Node.js, MongoDB, and more. My recent
              co-op at MPAC sharpened my DevOps and automation skills, where I
              improved frontend performance by 30% and streamlined data
              pipelines using Airflow and AWS.
            </Typography>
            <Typography variant="body1" paragraph>
              I thrive in both independent and collaborative environments and
              love building tools that solve real-world problems.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Skills Summary */}
        <Typography variant="h5" gutterBottom>
          My Core Competencies:
        </Typography>
        <Box component="ul" pl={2} sx={{ listStyle: "none" }}>
          <li>
            <Typography>
              🌐 Full-Stack Web Development: React, Node.js, TypeScript, MongoDB
            </Typography>
          </li>
          <li>
            <Typography>☁️ Cloud & DevOps: AWS , Docker, Terraform</Typography>
          </li>
          <li>
            <Typography>
              🧠 AI & Machine Learning: ChatGPT, SageMaker, AWS Bedrock
            </Typography>
          </li>
          <li>
            <Typography>
              📊 Data & Automation: Apache Airflow, Python, FastAPI
            </Typography>
          </li>
          <li>
            <Typography>
              📚 Mentorship & Teaching: Web Dev & Computer Architecture TA at
              uOttawa
            </Typography>
          </li>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Education */}
        <Typography variant="h5" gutterBottom>
          Education:
        </Typography>
        <Typography variant="body1">
          🎓 <strong>Master of Computer Science</strong> — University of Ottawa
          (2023–2025) - A+
        </Typography>
        <Typography variant="body1" mb={2}>
          🎓 <strong>B.Tech in Information Technology</strong> — GGSIPU, Delhi
          (CGPA: 9.36)
        </Typography>

        <Divider sx={{ my: 4 }} />
        {/* Resume Button */}
        <Button
      component="a"       // Render as <a> to support download attribute
      href="Gurdarshan_Singh_Resume"
      download            // This tells browser to download the file
      size="small"
      sx={{
        backgroundColor: "white",
        color: "black",
        fontWeight: "bold",
        transition: "transform 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)",
          backgroundColor: "#f0f0f0",
        },
      }}
    >
    View Resume
    </Button>
      </HeroContainer>
    </Box>
  );
}
