import { Box } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import LatestPost from "./LatestPost";
import VideosSection from "./VideosSection";

function Main() {
  return (
    <Box>
      <Hero />
      <LatestPost />
      <VideosSection />
    </Box>
  );
}

export default Main;
