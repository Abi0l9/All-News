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
import { MobileView, ViewAllButton } from "../../../styled";
import { useSelector } from "react-redux";
import { timeReleased } from "../../../utils";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 900,
    },
  },
});

export const PcViewHorizontal = styled(Stack)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
  },
}));

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
            margin: "15px 0",
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
              sm: "800px",
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
                height: "300px",
                display: "flex",
                flexDirection: {
                  xs: "row",
                  sm: "column",
                },
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${post?.urlToImage})`,
                  width: "100%",
                  height: "70%",
                  backgroundSize: "100%",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "8px",
                }}
              ></Box>
              <Stack spacing={2} sx={{ height: "30%", width: "100%" }}>
                <Typography>
                  <Link
                    href={`/news/${post?.title}`}
                    underline="hover"
                    sx={{ cursor: "pointer", color: "black" }}
                  >
                    <Typography fontWeight="bold" sx={{ my: "10px" }}>
                      {post?.title}
                    </Typography>
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
        <MobileView></MobileView>
      </Box>
    </ThemeProvider>
  );
}

export default LatestPost;
