import { Box, Pagination, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BadgeContent, BottomBadge, HorizontalStack } from "../../../styled";

const VideoFrame = styled(Box)({
  width: "48%",
  height: "300px",
  backgroundColor: "grey",
  position: "relative",
});

function RecommendedVideos() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageToShow, setPageToShow] = useState([pages[0], pages[1]]);

  useEffect(() => {
    const p = [1, 2, 3, 4, 5, 6];
    setPages(p);
  }, []);

  const handlePagination = (e, value) => {
    setPage(value);

    const leftPage = value * 2 - 1;
    const rightPage = value * 2;
    setPageToShow([pages[leftPage - 1], rightPage]);
  };

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
            count={Math.floor(pages.length / 2)}
            shape="rounded"
            color="primary"
            page={page}
            onChange={handlePagination}
          />
        </Box>
      </HorizontalStack>
      <HorizontalStack>
        {pageToShow.map((p, i) => (
          <VideoFrame key={i}>
            {p}
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
