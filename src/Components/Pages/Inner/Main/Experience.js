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
          social="Google"
          date="2013-2014"
          profession="Front-end developer / php programmer"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringil"
        />

        <ExperienceInfo
          social="Twitter"
          date="2012"
          profession="Web Developer"
          description="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim"
        />
      </Box>
    </Box>
  );
};

export default Experience;
