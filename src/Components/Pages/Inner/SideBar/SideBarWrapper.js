import React, { useState } from "react";
import { Drawer } from "../innerstyle";
import { Link } from "react-router-dom";
import SideBarHeader from "./SideBarHeader";
import SideBarList from "./SideBarList";
import GoBackButton from "../../../Buttons/GoBackButton";
import SmallGoBackButton from "../../../Buttons/SmallGoBackButton";
import "../../../Buttons/ButtonStyle.css";

const SideBarWrapper = () => {
  // SideBar open and close state
  const [open, setOpen] = useState(true);

  return (
    <Drawer variant="permanent" open={open}>
      {/* SideBar Header Is Here */}
      <SideBarHeader open={open} setOpen={setOpen} />
      {/* SideBar Texts and Icons are Here */}
      <SideBarList open={open} />
      {/* Go back page button is here */}
      <div
        className="goback-button-wrapper"
        style={{
          paddingBottom: open ? "31px" : "29px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          {open ? <GoBackButton /> : <SmallGoBackButton />}
        </Link>
      </div>
    </Drawer>
  );
};

export default SideBarWrapper;
