import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { HorizontalStack, ViewAllButton } from "../../../styled";

const SubscribeWrapper = styled(Box)({
  backgroundColor: "#1976d2",
  width: "100%",
  height: "400px",
});

function Subscribe() {
  return (
    <Box sx={{ padding: "24px" }}>
      <SubscribeWrapper>
        <HorizontalStack
          sx={{
            padding: "80px",
            paddingBottom: "40px",
            justifyContent: "space-around",
            color: "white",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography variant="h2" textAlign="left">
              Sign Up For Our Newsletters
            </Typography>
          </Box>
          <Box sx={{ width: "50%", display: "flex", alignItems: "end" }}>
            <Typography variant="p" textAlign="left" fontSize="12px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ut dolorum error deleniti quisquam velit distinctio fugiat iste
              earum in, minus ex doloremque repellat adipisci amet repellendus!
              earum in, minus ex doloremque repellat adipisci amet repellendus!
              earum Dolores, adipisci illo!
            </Typography>
          </Box>
        </HorizontalStack>
        <Box
          sx={{
            px: "80px",
          }}
        >
          <form style={{ display: "flex", flexDirection: "row" }}>
            <input
              style={{
                flexGrow: 1,
                borderRadius: ".4rem",
                border: "0 solid white",
                marginRight: "5px",
              }}
            />
            <ViewAllButton>Subscribe Now</ViewAllButton>
          </form>
        </Box>
      </SubscribeWrapper>
    </Box>
  );
}

export default Subscribe;
