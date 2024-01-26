import React from "react";
import Box from "@mui/material/Box";
import MainTitle from "./Titles/MainTitle";
import FeedbackPersonImage from "../../../../Images/feedback-person.png";

// component for each person who sent feedback
const FeedbackPerson = ({ message, photo, author, work, project }) => {
  return (
    <Box className="feedbacks-person-wrapper">
      <div className="feedbacks-person-text main-text-content">{message}</div>

      <div className="feedbacks-person-info-wrapper">
        <img
          src={photo}
          alt="person-photo"
          className="feedbacks-person-photo"
        />

        <p className="feedbacks-person-author">
          {author} {work} , <a>{project}</a>
        </p>
      </div>
    </Box>
  );
};

// this file main component
const Feedbacks = () => {
  return (
    <Box id="feedbacks">
      <MainTitle title="Feedbacks" />

      <Box className="feedbacks-wrapper">
        <FeedbackPerson
          photo={FeedbackPersonImage}
          author="Martin Friman"
          work="Programmer"
          project="somesite.com"
          message="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. "
        />

        <FeedbackPerson
          photo={FeedbackPersonImage}
          author="Martin Friman"
          work="Programmer"
          project="somesite.com"
          message="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. "
        />
      </Box>
    </Box>
  );
};

export default Feedbacks;
