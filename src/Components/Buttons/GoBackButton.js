import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./ButtonStyle.css";

const GoBackButton = () => {
  return (
    <button className="goback-button">
      <ArrowBackIosNewIcon
        sx={{
          width: "14px",
          height: "17px",
        }}
      />
      Go back
    </button>
  );
};

export default GoBackButton;
