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
            Code
          </button>
          /
          <button
            onClick={() => setFilterKey("ui-item")}
            className="portfolio-button"
          >
            UI
          </button>
        </Box>

        <Box className="portfolio-cards-wrapper">
          <div className="portfolio-card-item code-item">
            <PortfolioHover
              title="Some text"
              description="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis "
              link="https://www.youtube.com/"
            />
          </div>
          <div className="portfolio-card-item code-item">
            <PortfolioHover
              title="Some text"
              description="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis "
              link="https://www.youtube.com/"
            />
          </div>
          <div className="portfolio-card-item ui-item">
            <PortfolioHover
              title="Some text"
              description="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis "
              link="https://www.youtube.com/"
            />
          </div>
          <div className="portfolio-card-item ui-item">
            <PortfolioHover
              title="Some text"
              description="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis "
              link="https://www.youtube.com/"
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
