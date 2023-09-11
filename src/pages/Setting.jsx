import { Box, Typography } from "@mui/material";
import React from "react";
import StarterDrawer from "../componenets/StarterDrawer";
import TabsWork from "./TabsWork";
function Setting() {
  return (
    <Box sx={{ display: "flex" }}>
      <StarterDrawer />
      <Box
        sx={{
          backgroundColor: "whitesmoke",
          width: "100%",
          paddingTop: "5rem",
          paddingLeft: "1rem",
        }}
      >
        <TabsWork />
      </Box>
    </Box>
  );
}

export default Setting;
