import { Box, Typography } from "@mui/material";
import React from "react";
import StarterDrawer from "../componenets/StarterDrawer";
import AboutWork from "./AboutWork";
function About() {
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
        <AboutWork />
      </Box>
    </Box>
  );
}

export default About;
