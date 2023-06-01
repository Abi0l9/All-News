import { Box, Pagination, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BadgeContent, BottomBadge, HorizontalStack } from "../../../styled";
import { useSelector } from "react-redux";

const VideoFrame = styled(Box)({
  width: "48%",
  height: "300px",
  backgroundColor: "grey",
  position: "relative",
});

function RecommendedVideos() {
  const headlines = useSelector((store) => store.headlines);
  const pages = headlines?.articles?.slice(4, 19);
  const count = !pages?.length ? 0 : Math.floor(pages?.length / 2);
  const [page, setPage] = useState(1);
  const [pageToShow, setPageToShow] = useState([]);

  useEffect(() => {
    if (pages) {
      setPageToShow(pages?.slice(0, 2));
    }
  }, []);

  const handlePagination = (e, value) => {
    setPage(value);

    const leftPage = value * 2 - 1;
    const rightPage = value * 2;
    setPageToShow([pages?.at(leftPage), pages?.at(rightPage)]);
  };

  if (!pages?.length) return null;

  return (
    <Box
      sx={{
        padding: "50px 24px",
      }}
    >
      <HorizontalStack>
        <Box>
          <Typography variant="h5" color="GrayText">
            Recommended For You
          </Typography>
        </Box>
        <Box>
          <Pagination
            count={count}
            shape="rounded"
            color="primary"
            page={page}
            onChange={handlePagination}
          />
        </Box>
      </HorizontalStack>
      <HorizontalStack>
        {pageToShow.map((p, i) => (
          <VideoFrame
            key={i}
            sx={{
              backgroundImage: `url(${p?.urlToImage})`,
              objectFit: "cover",
              backgroundSize: "100%",
            }}
          >
            <BottomBadge>
              <BadgeContent>Category</BadgeContent>
            </BottomBadge>
          </VideoFrame>
        ))}
      </HorizontalStack>
    </Box>
  );
}

export default RecommendedVideos;
