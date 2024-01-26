import React, { useState } from "react";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className="scroll-up-button-wrapper"
      onClick={scrollToTop}
      style={{ display: visible ? "block" : "none" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className="scroll-up-button"
      >
        <path
          d="M3.34202 12.6595C3.44973 12.7674 3.57767 12.8531 3.71852 12.9115C3.85936 12.9699 4.01035 13 4.16283 13C4.31531 13 4.4663 12.9699 4.60714 12.9115C4.74799 12.8531 4.87593 12.7674 4.98364 12.6595L9.50101 8.14214L14.0184 12.6595C14.2361 12.8772 14.5313 12.9995 14.8392 12.9995C15.1471 12.9995 15.4423 12.8772 15.66 12.6595C15.8777 12.4418 16 12.1466 16 11.8387C16 11.5308 15.8777 11.2356 15.66 11.0179L10.316 5.67389C10.2083 5.56595 10.0804 5.48033 9.93951 5.4219C9.79866 5.36348 9.64768 5.3334 9.49519 5.3334C9.34271 5.3334 9.19172 5.36348 9.05088 5.4219C8.91003 5.48033 8.78209 5.56595 8.67438 5.67389L3.33038 11.0179C2.88795 11.4603 2.88795 12.2054 3.34202 12.6595Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default ScrollUpButton;
