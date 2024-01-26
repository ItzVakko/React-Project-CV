import * as React from "react";
import Box from "@mui/material/Box";
import SideBarWrapper from "./SideBar/SideBarWrapper";
import MainWrapper from "./Main/MainWrapper";

const InnerPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Here is SideBar wrapper rendered */}
      <SideBarWrapper />

      {/* Here is Main Wrapper rendered */}
      <MainWrapper />
    </Box>
  );
};

export default InnerPage;
