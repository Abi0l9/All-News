import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Layout() {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box>
        <Main />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Layout;
