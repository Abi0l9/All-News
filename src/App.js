import { Box } from "@mui/material";
import Layout from "./components/Layout";

function App() {
  console.log("key iss :" + process.env.REACT_APP_API_KEY);
  return (
    <Box sx={{}}>
      <Layout />
    </Box>
  );
}

export default App;
