import React from "react";
import "../InnerStyle.css";

const PortfolioHover = ({ title, description, link }) => {
  return (
    <div className="portfolio-card-hover">
      <h3 className="portfolio-card-title">{title}</h3>
      <p className="main-text-content">{description}</p>
      <a className="portfolio-card-link" href={link} target="_blank">
        View resource
      </a>
    </div>
  );
};

export default PortfolioHover;
