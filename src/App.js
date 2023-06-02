import { Box } from "@mui/material";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import { useEffect } from "react";
import { getAllHeadlines } from "./reducers/headlineReducer";
import { getSelectedNews } from "./reducers/selectedNewsReducer";
import { getAllSources } from "./reducers/sourcesReducer";

function App() {
  const dispatch = useDispatch();

  const headlines = useSelector((store) => store.headlines);
  const match = useMatch("/news/:title");
  const selected = match
    ? headlines?.articles?.find(
        (article) => article.title === match.params.title
      )
    : null;

  useEffect(() => {
    dispatch(getAllHeadlines());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllSources());
  }, [dispatch]);

  useEffect(() => {
    if (selected) {
      dispatch(getSelectedNews(selected));
    }
  });

  return (
    <Box sx={{}}>
      <Layout />
    </Box>
  );
}

export default App;
