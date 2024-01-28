import React from "react";
import { DrawerHeader } from "../innerstyle";
import ListHeaderToggleIcon from "../../../Icons/list-header-toggle-icon.svg";

const SideBarHeader = ({ open, setOpen }) => {
  //This is responsive sidebar on low resolution
  if (window.innerWidth <= 730) {
    setOpen(false);
  }

  return (
    <DrawerHeader
      className="list-header"
      sx={{
        p: 0,
      }}
    >
      <div
        className="list-header-name-photo-wrapper"
        style={{
          transform: open ? "translateX(-75px)" : "translateX(-7px)",
          marginTop: open ? "10px" : "-75px",
        }}
      >
        <div className="list-header-avatar-container">
          <div
            className="list-header-avatar"
            style={{
              width: open ? "100px" : "40px",
              height: open ? "100px" : "40px",
            }}
          ></div>
        </div>
        {open && <h2 className="list-header-name">Vako Kobulashvili</h2>}
      </div>
      <div
        className="list-header-open-button needs-to-hide-on-mobile"
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
      >
        <img src={ListHeaderToggleIcon} />
      </div>
    </DrawerHeader>
  );
};

export default SideBarHeader;
