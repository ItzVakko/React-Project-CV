import React from "react";
import "./OuterPageStyle.css";
import KnowMoreButton from "../../Buttons/KnowMoreButton";
import { Link } from "react-router-dom";

const OuterInfoBox = () => {
  return (
    <div className="outer-info-container">
      <div className="outer-info-image"></div>
      <h1 className="outer-info-name">Vako Kobulashvili</h1>
      <h2 className="outer-info-profession">Full-Stack Web Developer</h2>
      <p className="outer-info-text">
        i am full-stack web developer, have an experience in several projects,
        currently student
      </p>
      <Link to="/inner" style={{ textDecoration: "none" }}>
        <KnowMoreButton />
      </Link>
    </div>
  );
};

export default OuterInfoBox;
