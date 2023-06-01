import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";

import Footer from "./Footer";
import Router from "../Routers";

function Layout() {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Router />
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Layout;
