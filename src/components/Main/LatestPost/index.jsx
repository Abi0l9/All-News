import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import "./index.css";
import { ViewAllButton } from "../../../styled";
import { useSelector } from "react-redux";
import { timeReleased } from "../../../utils";

function LatestPost() {
  const headlines = useSelector((store) => store.headlines);
  const latest = headlines?.articles?.slice(0, 8);

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
          gap: "5px",
        }}
      >
        {latest?.map((post) => (
          <Box className="card" key={post?.title}>
            <img src={`${post?.urlToImage}`} alt={post?.title} />
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
                    <Typography fontWeight="bold" sx={{ my: "10px" }}>
                      {post?.title}
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Stack direction="row" spacing={3} color="GrayText">
                    <Typography>{post?.author}</Typography>
                    <Typography>{timeReleased(post?.publishedAt)}</Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default LatestPost;
