import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const sourcePage = () => {
  const retrievedSource = useSelector((store) => store);
  console.log(retrievedSource);
  return <Box></Box>;
};

export default sourcePage;
