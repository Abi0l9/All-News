import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import {
  BadgeContent,
  BottomBadge,
  CardContentWrapper,
  CardContentsBottom,
  CardHeader,
  CardVideoFrame,
  HorizontalStack,
  RightHorizontalStack,
  ViewAllButton,
} from "../../../styled";

const VideosSectionBox = styled(Stack)({
  justifyContent: "space-between",
  flexDirection: "row",
});

const LeftSideBox = styled(Box)({
  width: "65%",
});

const RightSideBox = styled(Box)({
  width: "30%",
});

const VideoFrame = styled(Box)({
  width: "100%",
  height: "500px",
  backgroundColor: "grey",
  position: "relative",
});

function VideosSection() {
  return (
    <Box id="videos-section" sx={{ padding: "50px 24px" }}>
      <Box>
        <VideosSectionBox>
          <Typography variant="h5" color="GrayText">
            Videos
          </Typography>
          <Box>
            <ViewAllButton>View All</ViewAllButton>
          </Box>
        </VideosSectionBox>
      </Box>
      <Box>
        <VideosSectionBox>
          <LeftSideBox>
            <VideoFrame>
              <BottomBadge>
                <BadgeContent>Category</BadgeContent>
              </BottomBadge>
            </VideoFrame>
            <CardContentWrapper>
              <CardHeader>
                Some Lorem Ipsum Text comes here Some Lorem Ipsum Text comes
                here Some Lorem Ipsum Text comes here
              </CardHeader>
              <CardContentsBottom>
                <Typography>Author</Typography>
                <Typography>2 hours Ago</Typography>
              </CardContentsBottom>
            </CardContentWrapper>
          </LeftSideBox>
          <RightSideBox>
            <Stack>
              <HorizontalStack>
                <LeftSideBox>
                  <CardVideoFrame />
                </LeftSideBox>
                <RightHorizontalStack>
                  <CardContentWrapper>
                    <CardHeader>
                      Some header goes to the heresss fgf gdd masteer mastr nnaj
                      bajja hja
                    </CardHeader>
                    <CardContentsBottom>
                      <Typography>Author</Typography>
                      <Typography>2 hours Ago</Typography>
                    </CardContentsBottom>
                  </CardContentWrapper>
                </RightHorizontalStack>
              </HorizontalStack>
            </Stack>
          </RightSideBox>
        </VideosSectionBox>
      </Box>
    </Box>
  );
}

export default VideosSection;
