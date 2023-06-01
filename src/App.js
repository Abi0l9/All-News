import { Box } from "@mui/material";
import Layout from "./components/Layout";
import newsServices from "./services";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllHeadlines } from "./reducers/headlineReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHeadlines());
  }, [dispatch]);

  return (
    <Box sx={{}}>
      <Layout />
    </Box>
  );
}

export default App;
