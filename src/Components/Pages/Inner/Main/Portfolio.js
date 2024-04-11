import React, { useEffect, useState } from "react";
import MainTitle from "./Titles/MainTitle";
import Box from "@mui/material/Box";
import Isotope from "isotope-layout";
import "../InnerStyle.css";
import PortfolioHover from "./PortfolioHover";

const Portfolio = () => {
  // logic of the filtering portfolio cards

  const [isotope, setIsotope] = useState(null);
  // state for storing the filter keyword, with an initial value of *, which matches everything
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setIsotope(
      new Isotope(".portfolio-cards-wrapper", {
        // filter-container: className of the parent of the isotope elements
        itemSelector: ".portfolio-card-item",
        layoutMode: "fitRows",
        fitRows: {
          gutter: 20,
        },
      })
    );
  }, []);

  useEffect(() => {
    if (isotope) {
      // sanity check
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  // button activation code in colors

  let selectedFilterElement;

  const buttonActivation = () => {
    const filterButton = document.querySelectorAll(".portfolio-button");
    filterButton.forEach((button) =>
      button.addEventListener("click", () => {
        document
          .querySelector(".portfolio-first-button")
          .classList.remove("portfolio-button-active");
        if (selectedFilterElement) {
          selectedFilterElement.classList.remove("portfolio-button-active");
        }
        selectedFilterElement = button;
        selectedFilterElement.classList.add("portfolio-button-active");
      })
    );
  };

  buttonActivation();

  return (
    <Box id="portfolio">
      <MainTitle title="Portfolio" />

      <Box className="portfolio-sort-wrapper">
        <Box className="portfolio-buttons-wrapper">
          <button
            onClick={() => setFilterKey("*")}
            className="portfolio-button portfolio-first-button portfolio-button-active"
          >
            All
          </button>
          /
          <button
            onClick={() => setFilterKey("code-item")}
            className="portfolio-button"
          >
            Game
          </button>
          /
          <button
            onClick={() => setFilterKey("ui-item")}
            className="portfolio-button"
          >
            Website
          </button>
        </Box>

        <Box className="portfolio-cards-wrapper">
          <div className="portfolio-card-item code-item">
            <PortfolioHover
              title="Dice Game"
              description="It's a dice web game, in this project i used Javascript , HTML and CSS. It's a simple game!"
              link="https://itzvakko.github.io/DiceGame/"
            />
          </div>
          <div className="portfolio-card-item code-item">
            <PortfolioHover
              title="Guess-my-number Game"
              description="It's a guess my number game, in this project i used Javascript , HTML and CSS. It's a simple game!"
              link="https://itzvakko.github.io/Guess-my-number-Game/"
            />
          </div>
          <div className="portfolio-card-item ui-item">
            <PortfolioHover
              title="Educity.ge Website Project"
              description="It's Educity website project, in this project i used Javascript functionals, react, scroll animation, styled-components, custom hooks , swiper, emailJS, responsive , fetching data and use it in cards, HTML CSS."
              link="https://educity.ge/"
            />
          </div>
          <div className="portfolio-card-item ui-item">
            <PortfolioHover
              title="Lattanta Website Project"
              description="It's a lattanta website project, shop style, in this project i used Javascript functionals, pagination , swiper , fetching data and use it in cards, HTML CSS."
              link="https://itzvakko.github.io/Lattanta-Website-Project/"
            />
          </div>
          <div className="portfolio-card-item ui-item">
            <PortfolioHover
              title="Collection-Be Website Project"
              description="It's a business style website project, in this project i used Redux, Javascript functional, fetching data, cart system, react router and so on!"
              link="https://itzvakko.github.io/Collection-Be-Website-Project/"
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
