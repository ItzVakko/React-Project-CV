import React from "react";
import "./OuterPageStyle.css";
import KnowMoreButton from "../../Buttons/KnowMoreButton";
import { Link } from "react-router-dom";

const OuterInfoBox = () => {
  return (
    <div className="outer-info-container">
      <div className="outer-info-image"></div>
      <h1 className="outer-info-name">John Doe</h1>
      <h2 className="outer-info-profession">Programmer. Creative. Innovator</h2>
      <p className="outer-info-text">
        ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget
        felis eget nunc lobortis mattis aliquam faucibus
      </p>
      <Link to="/inner" style={{ textDecoration: "none" }}>
        <KnowMoreButton />
      </Link>
    </div>
  );
};

export default OuterInfoBox;
