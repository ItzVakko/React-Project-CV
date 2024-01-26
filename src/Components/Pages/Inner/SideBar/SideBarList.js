import React from "react";
import AboutIcon from "../../../Icons/AboutIcon";
import EducationIcon from "../../../Icons/EducationIcon";
import ExperienceIcon from "../../../Icons/ExperienceIcon";
import SkillsIcon from "../../../Icons/SkillsIcon";
import PortfolioIcon from "../../../Icons/PortfolioIcon";
import ContactsIcon from "../../../Icons/ContactsIcon";
import FeedbacksIcon from "../../../Icons/FeedbacksIcon";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import "../InnerStyle.css";

// SideBar icon texts list
const listArray = [
  "About me",
  "Education",
  "Experience",
  "Skills",
  "Portfolio",
  "Contacts",
  "Feedbacks",
];

const SideBarList = ({ open }) => {
  //sidebar button click scroll function
  const buttonClickEvents = (index) => {
    if (index === 0) {
      document.querySelector("#aboutme").scrollIntoView();
    } else if (index === 1) {
      document.querySelector("#education").scrollIntoView();
    } else if (index === 2) {
      document.querySelector("#experience").scrollIntoView();
    } else if (index === 3) {
      document.querySelector("#skills").scrollIntoView();
    } else if (index === 4) {
      document.querySelector("#portfolio").scrollIntoView();
    } else if (index === 5) {
      document.querySelector("#contacts").scrollIntoView();
    } else if (index === 6) {
      document.querySelector("#feedbacks").scrollIntoView();
    }
  };

  return (
    <List
      className="list-side"
      sx={{
        p: 0,
        pt: "22px",
      }}
    >
      {listArray.map((text, index) => (
        <ListItem key={text} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
            }}
            className="list-item-button-container"
            onClick={() => buttonClickEvents(index)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? "20px" : "auto",
                ml: "3px",
                justifyContent: "center",
                mt: "4px",
              }}
            >
              {index === 0 && <AboutIcon />}
              {index === 1 && <EducationIcon />}
              {index === 2 && <ExperienceIcon />}
              {index === 3 && <SkillsIcon />}
              {index === 4 && <PortfolioIcon />}
              {index === 5 && <ContactsIcon />}
              {index === 6 && <FeedbacksIcon />}
            </ListItemIcon>
            <ListItemText
              className="list-item-text"
              primary={text}
              sx={{
                opacity: open ? 1 : 0,
                transition: open ? "all 1s ease" : "all 0s ease",
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBarList;
