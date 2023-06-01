import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./Hero.css";
import { useSelector } from "react-redux";
import { timeReleased } from "../../../utils";

function Hero() {
  const headlines = useSelector((store) => store.headlines);
  const topHeadline = headlines?.articles?.at(0);
  const topThreeHeadlines = headlines?.articles?.slice(1, 3);
  const nextFive = headlines?.articles?.slice(3, 8);

  return (
    <Box
      id="hero"
      sx={{
        display: "flex",
        padding: "24px 24px",
        backgroundColor: "#1976d2",
        marginBottom: "50px",
      }}
    >
      {/* Left side */}
      <Box id="left">
        <Stack direction="row" spacing={2} my="10px" mb="20px">
          <Typography>News</Typography>
          <Typography>{timeReleased(topHeadline?.publishedAt)}</Typography>
        </Stack>
        <Box sx={{ width: "100%", mb: "100px", paddingRight: "50px" }}>
          <Typography variant="h3" paddingRight="80px">
            {topHeadline?.title}
          </Typography>
        </Box>
        <Box>
          <Stack direction="row" spacing={2} sx={{ paddingRight: "50px" }}>
            {topThreeHeadlines?.map((headline, idx) => (
              <Stack spacing={1} key={idx}>
                <Box sx={{ borderRadius: "5px" }} className="hero-card-img">
                  <img alt={headline?.title} src={`${headline.urlToImage}`} />
                </Box>
                <Box>
                  <Typography variant="body" fontWeight="bold">
                    {headline?.title}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
      {/* Right Side */}
      <Box id="right">
        <Box id="right-content">
          <Box>
            <Typography textAlign="left" variant="h6">
              Popular this week
            </Typography>
          </Box>
          <Box>
            {nextFive?.map((headline, idx) => (
              <Stack direction="row" spacing={1} key={idx}>
                <Box>
                  <img src={`${headline?.urlToImage}`} alt={headline?.title} />
                </Box>
                <Box>
                  <Stack direction="row" spacing={3}>
                    <Typography>Category</Typography>
                    <Typography>
                      {timeReleased(headline?.publishedAt)}
                    </Typography>
                  </Stack>
                  <Typography fontWeight="bold">{headline?.title}</Typography>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
