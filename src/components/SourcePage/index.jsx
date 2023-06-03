import { Box, Link, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { AllPostsWrapper, PostImageWrapper, PostWrapper } from "../../styled";
import { timeReleased } from "../../utils";

const SourcePage = () => {
  const retrievedSource = useSelector((store) => store.retrievedSource);
  const articles = retrievedSource?.articles;
  console.log(retrievedSource);
  return (
    <Box sx={{ minHeight: "80vh" }}>
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
        {articles?.map((article) => (
          <PostWrapper key={article.title}>
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
    </Box>
  );
};

export default SourcePage;
