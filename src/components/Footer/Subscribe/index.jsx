import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { HorizontalStack, ViewAllButton } from "../../../styled";
import SubModal from "./Submodal.jsx";

const SubscribeWrapper = styled(Box)({
  backgroundColor: "#1976d2",
  width: "100%",
  height: "400px",
});

function Subscribe() {
  const [email, setEmail] = useState("");
  const [modalState, setModalState] = useState(false);

  const handleModalState = () => {
    setModalState(!modalState);
    setEmail("");
  };

  return (
    <Box id="subscribe" sx={{ padding: "24px" }}>
      <Box sx={{ margin: "0 auto", width: "50%" }}>
        <SubModal modalState={modalState} handleModalState={handleModalState} />
      </Box>
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
              type="email"
              required
              style={{
                flexGrow: 1,
                borderRadius: ".4rem",
                border: "0 solid white",
                marginRight: "5px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!email ? (
              <ViewAllButton disabled onClick={handleModalState}>
                Subscribe Now
              </ViewAllButton>
            ) : (
              <ViewAllButton onClick={handleModalState}>
                Subscribe Now
              </ViewAllButton>
            )}
          </form>
        </Box>
      </SubscribeWrapper>
    </Box>
  );
}

export default Subscribe;
