import {
  Box,
  Link,
  Stack,
  Typography,
  createTheme,
  ThemeProvider,
  Pagination,
} from "@mui/material";
import { useSelector } from "react-redux";
import { AllPostsWrapper, PostImageWrapper, PostWrapper } from "../../styled";
import { timeReleased } from "../../utils";
import { useEffect, useState } from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 900,
    },
  },
});

const SourcePage = () => {
  const retrievedSource = useSelector((store) => store.retrievedSource);
  const articles = retrievedSource?.articles;

  const pages = articles;
  const count = !pages?.length ? 0 : Math.floor(pages?.length / 2);
  const [page, setPage] = useState(1);
  const [pageToShow, setPageToShow] = useState([]);

  useEffect(() => {
    if (pages) {
      setPageToShow(pages?.slice(0, 10));
    } //eslint-disable-next-line
  }, []);

  const handlePagination = (e, value) => {
    setPage(value);

    const newPage = value * 10;
    setPageToShow(pages?.at(newPage));

    const leftPage = value * 10 - 10;
    const rightPage = value * 10;
    setPageToShow(pages?.slice(leftPage, rightPage));
  };

  if (!pages?.length) return null;
  console.log(retrievedSource);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "80vh", padding: "30px 24px" }}>
        <Stack
          spacing={3}
          flexDirection="row"
          margin="20px auto"
          justifyContent="center"
        >
          <Typography>Articles from {articles?.at(0)?.source?.name}</Typography>
          <Typography>Total Posts: {articles?.length}</Typography>
        </Stack>
        <AllPostsWrapper>
          {pageToShow?.map((article) => (
            <PostWrapper key={article.title} sx={{ margin: "10px 0" }}>
              <PostImageWrapper>
                <img
                  src={`${article?.urlToImage}`}
                  width="100%"
                  height="100%"
                  alt={article?.title}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </PostImageWrapper>
              <Stack
                spacing={2}
                sx={{ height: "30%", width: "100%", padding: 1 }}
              >
                <Typography fontWeight="bold" sx={{ my: "10px" }}>
                  <Link
                    href={`/news/${article?.title}`}
                    underline="hover"
                    sx={{ cursor: "pointer", color: "black" }}
                  >
                    {article?.title}
                  </Link>
                </Typography>
                <Stack spacing={1}>
                  <Typography color="GreyText">{article?.author}</Typography>
                  <Typography color="GreyText">
                    {timeReleased(article?.publishedAt)}
                  </Typography>
                </Stack>
              </Stack>
            </PostWrapper>
          ))}
        </AllPostsWrapper>
        <Box>
          <Pagination
            count={count}
            shape="rounded"
            color="primary"
            page={page}
            onChange={handlePagination}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SourcePage;
