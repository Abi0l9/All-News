import {
  Box,
  Link,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import React from "react";
import "./index.css";
import { ViewAllButton } from "../../../styled";
import { useSelector } from "react-redux";
import { timeReleased } from "../../../utils";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 900,
    },
  },
});

// export const PcViewHorizontal = styled(Stack)(({ theme }) => ({
//   display: "none",
//   [theme.breakpoints.up("sm")]: {
//     display: "flex",
//     flexDirection: "row",
//   },
// }));

function LatestPost() {
  const headlines = useSelector((store) => store.headlines);
  const latest = headlines?.articles?.slice(0, 8);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          padding: "50px 24px",
        }}
      >
        <Box
          sx={{
            margin: "30px 0",
            mt: "100px",
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography variant="h5" color="GrayText">
                Latest News
              </Typography>
            </Box>
            <Box>
              <ViewAllButton>View All</ViewAllButton>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "flex",
            },
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "5px",
            width: "100%",
            height: {
              xs: "800px",
              sm: "1000px",
            },
          }}
        >
          {latest?.map((post) => (
            <Box
              key={post?.title}
              sx={{
                width: {
                  xs: "40%",
                  sm: "24%",
                },
                height: {
                  xs: "400px",
                  sm: "500px",
                },

                display: "flex",
                flexDirection: {
                  xs: "row",
                  sm: "column",
                },
                my: "10px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                }}
              >
                <img
                  src={`${post?.urlToImage}`}
                  width="100%"
                  height="100%"
                  alt={post?.title}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Stack
                spacing={2}
                sx={{ height: "30%", width: "100%", padding: 1 }}
              >
                <Typography fontWeight="bold" sx={{ my: "10px" }}>
                  <Link
                    href={`/news/${post?.title}`}
                    underline="hover"
                    sx={{ cursor: "pointer", color: "black" }}
                  >
                    {post?.title}
                  </Link>
                </Typography>
                <Stack spacing={1}>
                  <Typography color="GreyText">{post?.author}</Typography>
                  <Typography color="GreyText">
                    {timeReleased(post?.publishedAt)}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default LatestPost;
