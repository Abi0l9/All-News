import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { HorizontalStack } from "../../styled";
import { GMobiledata } from "@mui/icons-material";

function FooterContent() {
  return (
    <Box sx={{ padding: "24px" }}>
      <HorizontalStack>
        <Box width="50%">
          <Stack justifyContent="space-between">
            <Stack spacing={3}>
              <GMobiledata />
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                vel nam impedit, voluptatibus sunt dicta eius reiciendis
                laudantium earum ipsam perspiciatis. In qui hic quaerat labore
                harum dolore dolores assumenda!
              </Typography>
            </Stack>
            <Box sx={{ mt: "80px" }}>Copyright News 24hrs</Box>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={3} color="GrayText">
            <Typography fontWeight="bold">Categories</Typography>
            <Typography>International</Typography>
            <Typography>Regional</Typography>
            <Typography>Politics</Typography>
            <Typography>Business</Typography>
            <Typography>Sports</Typography>
            <Typography>Health</Typography>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={3} color="GrayText">
            <Typography fontWeight="bold">Company</Typography>
            <Typography>About Us</Typography>
            <Typography>Careers</Typography>
            <Typography>Privacy Policy</Typography>
            <Typography>Terms of Services</Typography>
            <Typography>Contact Us</Typography>
          </Stack>
        </Box>
        <Box>
          <Stack spacing={3} color="GrayText">
            <Typography fontWeight="bold">Social Media</Typography>
            <Typography>Youtube</Typography>
            <Typography>Instagram</Typography>
            <Typography>Facebook Twitter</Typography>
          </Stack>
        </Box>
      </HorizontalStack>
    </Box>
  );
}

export default FooterContent;
