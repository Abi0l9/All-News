import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import IMG from "../../../assets/img/error 2.jpg";
import "./index.css";
import { ViewAllButton } from "../../../styled";

function LatestPost() {
  return (
    <Box
      sx={{
        padding: "50px 24px",
      }}
    >
      <Box
        sx={{
          margin: "15px 0",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography variant="h5" color="GrayText">
              Our Latest Post
            </Typography>
          </Box>
          <Box>
            <ViewAllButton>View All</ViewAllButton>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Box className="card">
          <img src={`${IMG}`} alt="sss" />
          <Box className="img-card">
            <Box className="img-badge">
              <Typography component="span" color="azure">
                Category
              </Typography>
            </Box>
          </Box>
          <Box>
            <Stack>
              <Box>
                <Link href="" underline="none" sx={{ cursor: "pointer" }}>
                  <Typography variant="h5" sx={{ my: "10px" }}>
                    Some lorem ipsum headline will go here and flow to next line
                  </Typography>
                </Link>
              </Box>
              <Box>
                <Stack direction="row" spacing={3} color="GrayText">
                  <Typography>Author name</Typography>
                  <Typography>3 Days Ago</Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LatestPost;
