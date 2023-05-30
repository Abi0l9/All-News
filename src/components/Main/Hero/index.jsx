import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./Hero.css";
import IMG from "../../../assets/img/error 2.jpg";

function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        display: "flex",
        padding: "24px 24px",
        backgroundColor: "#1976d2",
      }}
    >
      {/* Left side */}
      <Box id="left">
        <Stack direction="row" spacing={2} my="10px">
          <Typography>Category</Typography>
          <Typography>2 hours ago</Typography>
        </Stack>
        <Box sx={{ width: "100%", mb: "140px", paddingRight: "50px" }}>
          <Typography variant="h3" paddingRight="80px">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            illum quasi repudiandae adipisci soluta, quos in.
          </Typography>
        </Box>
        <Box>
          <Stack direction="row" spacing={2} sx={{ paddingRight: "50px" }}>
            <Stack spacing={1}>
              <Box sx={{}} className="hero-card-img">
                <img alt="some category kind imageeeeeeee" src={`${IMG}`} />
              </Box>
              <Box>
                <Typography variant="body" fontWeight="bold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus illum quasi repudiandae adipisci soluta, quos in.
                </Typography>
              </Box>
            </Stack>
            <Stack spacing={1}>
              <Box sx={{}} className="hero-card-img">
                <img alt="some category kind imageeeeeeee" src={`${IMG}`} />
              </Box>
              <Box>
                <Typography variant="body" fontWeight="bold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus illum quasi repudiandae adipisci soluta, quos in.
                </Typography>
              </Box>
            </Stack>
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
            <Stack direction="row" spacing={1}>
              <Box>
                <img src={`${IMG}`} alt="some element" />
              </Box>
              <Box>
                <Stack direction="row" spacing={3}>
                  <Typography>Category</Typography>
                  <Typography>Time released</Typography>
                </Stack>
                <Typography variant="h6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus illum quasi
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Box>
                <img src={`${IMG}`} alt="some element" />
              </Box>
              <Box>
                <Stack direction="row" spacing={3}>
                  <Typography>Category</Typography>
                  <Typography>Time released</Typography>
                </Stack>
                <Typography variant="h6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus illum quasi
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Box>
                <img src={`${IMG}`} alt="some element" />
              </Box>
              <Box>
                <Stack direction="row" spacing={3}>
                  <Typography>Category</Typography>
                  <Typography>Time released</Typography>
                </Stack>
                <Typography variant="h6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus illum quasi
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Box>
                <img src={`${IMG}`} alt="some element" />
              </Box>
              <Box>
                <Stack direction="row" spacing={3}>
                  <Typography>Category</Typography>
                  <Typography>Time released</Typography>
                </Stack>
                <Typography variant="h6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus illum quasi
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Box>
                <img src={`${IMG}`} alt="some element" />
              </Box>
              <Box>
                <Stack direction="row" spacing={3}>
                  <Typography>Category</Typography>
                  <Typography>Time released</Typography>
                </Stack>
                <Typography variant="h6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus illum quasi
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
