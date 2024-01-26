import React from "react";
import "./ButtonStyle.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const SmallGoBackButton = () => {
  return (
    <button className="small-goback-button">
      <ArrowBackIosNewIcon
        sx={{
          width: "14px",
          height: "17px",
        }}
      />
    </button>
  );
};

export default SmallGoBackButton;
