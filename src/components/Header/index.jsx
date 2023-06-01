import {
  Facebook,
  Instagram,
  Newspaper,
  Search,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";

function Header() {
  const pages = [
    {
      name: "News",
    },
    {
      name: "Innovation",
    },
    {
      name: "Science",
    },
    {
      name: "Industry",
    },
    {
      name: "More",
    },
  ];

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
    {
      name: "Gallery",
    },
    {
      name: "Blog",
    },
    {
      name: "About",
    },
    {
      name: "Contact",
    },
  ];
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgb(182, 181, 181)",
        }}
      >
        <Toolbar sx={{ py: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={3} sx={{ cursor: "pointer" }}>
                {pages.map((page) => (
                  <Box key={page.name}>{page.name}</Box>
                ))}
              </Stack>
              <Stack direction="row" spacing={1} sx={{ cursor: "pointer" }}>
                <Facebook />
                <Twitter />
                <Instagram />
                <YouTube />
              </Stack>
            </Stack>

            <Divider
              sx={{ bgcolor: "navajowhite", mt: 1 }}
              variant="fullWidth"
            />

            <Stack direction="row" alignItems="center">
              <Typography variant="h6" sx={{ mr: 1, cursor: "pointer" }}>
                <Link underline="none" href="/">
                  <IconButton>
                    <Newspaper />
                  </IconButton>
                </Link>
              </Typography>
              <Box sx={{ display: "flex", flex: 1 }}>
                {tabs.map((tab) => (
                  <Box sx={{ mx: 1, cursor: "pointer" }} key={tab.name}>
                    {tab.name}
                  </Box>
                ))}
              </Box>
              <Stack direction="row" alignItems="center">
                <IconButton>
                  <Search color="inherit" />
                </IconButton>
                <Button
                  size="small"
                  color="inherit"
                  sx={{ bgcolor: deepOrange[500], height: "30px" }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Stack>
            <Divider
              sx={{ bgcolor: "navajowhite", mb: 1 }}
              variant="fullWidth"
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
