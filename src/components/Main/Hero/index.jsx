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
import "./Hero.css";
import { useSelector } from "react-redux";
import { timeReleased } from "../../../utils";
import { MobileViewVertical } from "../../../styled";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 830,
    },
  },
});

const HeroSectionWrapper = styled(Box)({
  padding: "24px 24px",
  marginBottom: "50px",
});

export const PcViewHorizontal = styled(Stack)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
  },
}));

function Hero() {
  const headlines = useSelector((store) => store.headlines);
  const topHeadline = headlines?.articles?.at(0);

  return (
    <ThemeProvider theme={theme}>
      <HeroSectionWrapper>
        <PcViewHorizontal justifyContent="space-between" height="300px">
          <Box
            sx={{
              width: "48%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                backgroundImage: `url(${topHeadline?.urlToImage})`,
                backgroundSize: "100%",
                objectFit: "contain",
              }}
            ></Box>
          </Box>
          <Box sx={{ width: "48%", height: "100%" }}>
            <Stack spacing={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography fontWeight="bold">
                  <Link underline="hover" color="black">
                    {topHeadline?.author}
                  </Link>
                </Typography>
                <Typography color="GrayText" marginX={2}>
                  {timeReleased(topHeadline?.publishedAt)}
                </Typography>
              </Box>

              <Typography variant="h5" fontWeight="bold">
                <Link underline="hover" color="black">
                  {topHeadline?.title}
                </Link>
              </Typography>

              <Typography variant="p">{topHeadline?.description}</Typography>
            </Stack>
          </Box>
        </PcViewHorizontal>
        <MobileViewVertical alignItems="center" height="70vh">
          <Typography variant="h5" fontWeight="bold">
            <Link underline="hover" color="black">
              {topHeadline?.title}
            </Link>
          </Typography>
          <Box sx={{ height: "70%", width: "100%", my: 2 }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                backgroundImage: `url(${topHeadline?.urlToImage})`,
                backgroundSize: "100%",
                objectFit: "cover",
              }}
            ></Box>
            <Box sx={{ height: "30%", width: "100%", my: 2 }}>
              <Stack spacing={2}>
                <Typography
                  textOverflow="ellipsis"
                  overflow="hidden"
                  noWrap
                  variant="p"
                >
                  {topHeadline?.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography fontWeight="bold">
                    <Link underline="hover" color="black">
                      {topHeadline?.author}
                    </Link>
                  </Typography>
                  <Typography color="GrayText" marginX={2}>
                    {timeReleased(topHeadline?.publishedAt)}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </MobileViewVertical>
      </HeroSectionWrapper>
    </ThemeProvider>
  );
}

export default Hero;
