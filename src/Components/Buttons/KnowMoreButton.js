import React from "react";
import "./ButtonStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KnowMoreButton = () => {
  return (
    <>
      <button
        className="know-more-button"
        icon={<FontAwesomeIcon icon="chevron-left" />}
      >
        Know more
      </button>
    </>
  );
};

export default KnowMoreButton;
