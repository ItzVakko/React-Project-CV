import React from "react";
import MainTitle from "./Titles/MainTitle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../InnerStyle.css";

const AboutMe = () => {
  return (
    <Box id="aboutme">
      <MainTitle title="About me" />
      <Typography variant="p" component="p" className="main-text-content">
        My name is Vako and i'm from georgia. I started to learn programming
        five years ago. At first, i was studying it myself by using different
        social networks. When i grew up, I learned programming mostly at a
        company called Educity. It was with the help of this company that I
        became a full-stack developer. I take responsibility for all tasks and
        have created several projects where my abilities are better seen and I
        have used a lot of materials. I can easily learn new resources that I
        come across in future projects and implement them perfectly.
      </Typography>
    </Box>
  );
};

export default AboutMe;
