import { Box } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import LatestPost from "./LatestPost";
import VideosSection from "./VideosSection";
import RecommendedVideos from "./RecommendedVideos";

function Main() {
  return (
    <Box>
      <Hero />
      <LatestPost />
      <VideosSection />
      <RecommendedVideos />
    </Box>
  );
}

export default Main;
