import React from "react";

const ListSideToggleIcon = () => {
  return (
    <>
      <svg
        style={{
          width: "100%",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M0 0H25C27.7614 0 30 2.23858 30 5V25C30 27.7614 27.7614 30 25 30H0V0Z"
          fill="#222935"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
        >
          <path
            d="M1 11H13M1 1H13H1ZM1 6H13H1Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    </>
  );
};

export default ListSideToggleIcon;
