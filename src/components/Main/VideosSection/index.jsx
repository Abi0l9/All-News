import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import {
  BadgeContent,
  BottomBadge,
  CardContentWrapper,
  CardContentsBottom,
  CardHeader,
  CardVideoFrame,
  GenericOneSideBox,
  ViewAllButton,
} from "../../../styled";
import { useSelector } from "react-redux";
import { timeReleased } from "../../../utils";

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

const RelatedVideoWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  height: "25%",
  gap: "10px",
});

function VideosSection() {
  const headlines = useSelector((store) => store.headlines);
  const randomFour = headlines?.articles?.slice(10, 14);
  const oneOfFour = randomFour?.at(0);
  const threeOfFour = randomFour?.slice(1);
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
            <VideoFrame
              sx={{ backgroundImage: `url(${oneOfFour?.urlToImage})` }}
            >
              <BottomBadge>
                <BadgeContent>Category</BadgeContent>
              </BottomBadge>
            </VideoFrame>
            <CardContentWrapper>
              <CardHeader>{oneOfFour?.title}</CardHeader>
              <CardContentsBottom>
                <Typography>{oneOfFour?.author}</Typography>
                <Typography>{timeReleased(oneOfFour?.publishedAt)}</Typography>
              </CardContentsBottom>
            </CardContentWrapper>
          </LeftSideBox>
          <RightSideBox>
            <Stack spacing={3}>
              {threeOfFour.map((vid, idx) => (
                <RelatedVideoWrapper key={idx}>
                  <GenericOneSideBox width={"50%"}>
                    <CardVideoFrame
                      sx={{ backgroundImage: `url(${vid?.urlToImage})` }}
                    />
                  </GenericOneSideBox>
                  <GenericOneSideBox width={"50%"}>
                    <Stack spacing={2}>
                      <Box>
                        <CardHeader>{vid?.title}</CardHeader>
                      </Box>
                      <CardContentsBottom>
                        <Typography>{vid?.author}</Typography>
                        <Typography>
                          {timeReleased(vid?.publishedAt)}
                        </Typography>
                      </CardContentsBottom>
                    </Stack>
                  </GenericOneSideBox>
                </RelatedVideoWrapper>
              ))}
            </Stack>
          </RightSideBox>
        </VideosSectionBox>
      </Box>
    </Box>
  );
}

export default VideosSection;
