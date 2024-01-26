import React from "react";
import Box from "@mui/material/Box";
import AboutMe from "./AboutMe";
import "../InnerStyle.css";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import Feedbacks from "./Feedbacks";
import ScrollUpButton from "./ScrollUpButton";

const MainWrapper = () => {
  return (
    <Box component="main" sx={{ p: "40px 30px" }} className="main-wrapper">
      <AboutMe />

      <Education />

      <Experience />

      <Skills />

      <Portfolio />

      <Contacts />

      <Feedbacks />

      <ScrollUpButton />
    </Box>
  );
};

export default MainWrapper;
