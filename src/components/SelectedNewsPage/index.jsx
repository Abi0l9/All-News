import { Avatar, Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { timeReleased } from "../../utils";
import { CardVideoFrame } from "../../styled";

const StyledHeader = styled(Box)({
  padding: "50px 24px",
  backgroundColor: "rgb(182, 181, 181)",
  marginBottom: "50px",
  width: "100%",
  height: "80vh",
  color: "white",
});

const SelectedNewsPage = () => {
  const selected = useSelector((store) => store.selectedNews);
  console.log(selected);

  if (!selected) {
    return null;
  }

  return (
    <Box>
      <StyledHeader>
        <Stack direction="row" spacing={3} color="whitesmoke">
          <Box>News</Box>
          <Box>{timeReleased(selected?.publishedAt)}</Box>
        </Stack>
        <Box sx={{ width: "50%", mb: "30px" }}>
          <Typography variant="h3">{selected?.title}</Typography>
        </Box>
        <Box>
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            color="whitesmoke"
          >
            <Avatar />
            <Typography>{selected?.author}</Typography>
          </Stack>
        </Box>
      </StyledHeader>
      <Box sx={{ padding: "24px" }}>
        <Box
          sx={{
            backgroundImage: `url(${selected?.urlToImage})`,
            backgroundSize: "100%",
            width: "100%",
            height: "400px",
            objectFit: "contain",
          }}
        ></Box>
      </Box>
      <Box sx={{ padding: "10px 24px" }}>{selected?.content}</Box>
    </Box>
  );
};

export default SelectedNewsPage;
