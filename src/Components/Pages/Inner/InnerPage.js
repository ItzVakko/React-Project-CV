import * as React from "react";
import Box from "@mui/material/Box";
import SideBarWrapper from "./SideBar/SideBarWrapper";
import MainWrapper from "./Main/MainWrapper";
import { FacebookProvider, CustomChat } from "react-facebook";

const InnerPage = () => {
  return (
    <Box sx={{ display: "flex", overflowX: "hidden" }}>
      {/* Here is SideBar wrapper rendered */}
      <SideBarWrapper />

      {/* Here is Main Wrapper rendered */}
      <MainWrapper />

      <FacebookProvider appId="2126083514486740" chatSupport>
        <CustomChat pageId="576324402235215" minimized="true" />
      </FacebookProvider>
    </Box>
  );
};

export default InnerPage;
