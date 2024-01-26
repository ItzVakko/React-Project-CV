import React from "react";
import Box from "@mui/material/Box";
import MainTitle from "./Titles/MainTitle";
import Typography from "@mui/material/Typography";
import "../InnerStyle.css";

//This component creates skillbar structure
const SkillsLevelBar = ({ percentage, language }) => {
  return (
    <div
      className="skills-level-bar"
      style={{
        maxWidth: `${percentage}%`,
      }}
    >
      {language}
    </div>
  );
};

//This is a main component of this file
const Skills = () => {
  return (
    <Box id="skills">
      <MainTitle title="Skills" />
      <Box className="skills-level-wrapper">
        <SkillsLevelBar percentage="100" language="HTML" />
        <SkillsLevelBar percentage="70" language="CSS" />
        <SkillsLevelBar percentage="60" language="jQuery" />
        <SkillsLevelBar percentage="30" language="PHP" />
        <SkillsLevelBar percentage="15" language="Laravel 2 (framework)" />
      </Box>

      <Box className="skills-level-count-line">
        <Box className="skills-level-arrow-wrapper">
          <Box className="skills-level-arrow-line" />
          <Box className="skills-level-arrow-line needs-to-disappear" />
        </Box>

        <Box className="skills-level-arrow-wrapper">
          <Box className="skills-level-arrow-line needs-to-disappear" />
          <Box className="skills-level-arrow-line" />
        </Box>
      </Box>

      <Box className="skills-level-text-wrapper">
        <Box className="skills-level-text-container">
          <Typography variant="p" component="p" className="skills-level-text">
            Beginner
          </Typography>

          <Typography
            variant="p"
            component="p"
            className="skills-level-text needs-to-disappear"
          >
            Proficient
          </Typography>
        </Box>
        <Box className="skills-level-text-container">
          <Typography
            variant="p"
            component="p"
            style={{ transform: "translateX(-19px)", marginTop: "10px" }}
            className="skills-level-text needs-to-disappear"
          >
            Expert
          </Typography>
          <Typography variant="p" component="p" className="skills-level-text">
            Master
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
