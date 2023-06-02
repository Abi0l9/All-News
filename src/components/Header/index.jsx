import { Newspaper, Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Button,
  Typography,
  Link,
  styled,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";

const MobileView = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const MobileViewFlex = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const PcView = styled(Stack)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const PcViewFlex = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

function Header() {
  const tabs = [
    {
      name: "Home",
    },
    {
      name: "Feature",
    },
    {
      name: "Shop",
    },
  ];
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "darkslategray",
        }}
      >
        <Toolbar sx={{ py: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Stack direction="row" alignItems="center">
              <PcView>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mr: 1, cursor: "pointer" }}
                >
                  <Link underline="none" href="/" color="error">
                    24/7 News
                  </Link>
                </Typography>
              </PcView>
              <MobileViewFlex sx={{ flex: 1 }}>
                <Link underline="none" href="/">
                  <IconButton>
                    <Newspaper />
                  </IconButton>
                </Link>
              </MobileViewFlex>
              <PcViewFlex sx={{ flex: 1 }}>
                {tabs.map((tab) => (
                  <Box sx={{ mx: 1, cursor: "pointer" }} key={tab.name}>
                    {tab.name}
                  </Box>
                ))}
              </PcViewFlex>
              <Stack direction="row" alignItems="center">
                <IconButton>
                  <Search color="inherit" />
                </IconButton>
                <Button
                  size="small"
                  color="inherit"
                  sx={{ bgcolor: deepOrange[500], height: "30px" }}
                >
                  <Link color="inherit" underline="none" href="#subscribe">
                    Subscribe
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
