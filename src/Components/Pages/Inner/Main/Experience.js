import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../InnerStyle.css";
import MainTitle from "./Titles/MainTitle";
import SecondaryTitle from "./Titles/SecondaryTitle";

//Component which returns social info structure
const ExperienceInfo = ({ social, date, profession, description }) => {
  return (
    <Box className="experience-info-wrapper">
      <Box>
        <SecondaryTitle title={social} />
        <Typography
          variant="p"
          component="p"
          className="experience-date"
          sx={{
            marginTop: "5px",
          }}
        >
          {date}
        </Typography>
      </Box>

      <Box>
        <SecondaryTitle title={profession} />
        <Typography
          variant="p"
          component="p"
          className="main-text-content"
          sx={{
            marginTop: "5px",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

//This is a main component of this file
const Experience = () => {
  return (
    <Box id="experience">
      <MainTitle title="Experience" />

      <Box className="experience-whole-info-wrapper">
        <ExperienceInfo
          social="Proficient"
          date="2023-2024"
          profession="Team Work"
          description="I have worked in a team with other members of the company and thus have experience in teamwork."
        />

        <ExperienceInfo
          social="Junior"
          date="2021-2024"
          profession="Web Developer"
          description="Experienced React web developer, worked on several frameworks. For example: Redux, Redux/toolkit, Axios, Swiper, MaterialUI, Bootstrap."
        />
      </Box>
    </Box>
  );
};

export default Experience;
