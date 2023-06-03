import { Newspaper, Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Button,
  Typography,
  Link,
  styled,
  TextField,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRetrievedSources } from "../../reducers/retrievedSourceReducer";
import { useNavigate } from "react-router-dom";

const MobileViewFlex = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const PcView = styled(Stack)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const PcViewFlex = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sources = useSelector((store) => store.sources);

  const filteredSources = sources?.sources
    ?.filter((source) => source.country === "us")
    .map((source) => {
      return {
        id: source.id,
        name: source.name,
      };
    });

  const [openSearch, setOpenSearch] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      dispatch(getRetrievedSources(value));
      navigate("/sources/");
    }
  }, [value, dispatch, navigate]);

  const handleSearchClick = () => {
    setOpenSearch(!openSearch);
  };

  const tabs = [
    {
      name: "Home",
    },
    {
      name: "Latest News",
    },
  ];
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "darkslategray",
        }}
      >
        <Toolbar sx={{ py: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Stack direction="row" alignItems="center">
              <PcView>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mr: 1, cursor: "pointer" }}
                >
                  <Link underline="none" href="/" color="error">
                    24/7 News
                  </Link>
                </Typography>
              </PcView>
              <MobileViewFlex sx={{ flex: 1 }}>
                <Link underline="none" href="/">
                  <IconButton>
                    <Newspaper />
                  </IconButton>
                </Link>
              </MobileViewFlex>
              <PcViewFlex sx={{ flex: 1 }}>
                {tabs.map((tab) => (
                  <Box sx={{ mx: 1, cursor: "pointer" }} key={tab.name}>
                    {tab.name}
                  </Box>
                ))}
              </PcViewFlex>
              <Stack direction="row" alignItems="center">
                <IconButton onClick={handleSearchClick}>
                  <Search color="inherit" />
                </IconButton>
                <Button
                  size="small"
                  color="inherit"
                  sx={{ bgcolor: deepOrange[500], height: "30px" }}
                >
                  <Link color="inherit" underline="none" href="#subscribe">
                    Subscribe
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Toolbar>
        <Box
          sx={{ display: openSearch ? "block" : "none", margin: "5px auto", width: "50%" }}
        >
          
          <FormControl fullWidth>
            <InputLabel>Select your desired source from the list</InputLabel>
            <Select
              label="source"
              variant="standard"
              size="small"
              value={value}
              onChange={({ target }) => setValue(target.value)}
            >
              {filteredSources?.map((source) => (
                <MenuItem key={source.id} value={source.id}>
                  {source.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Header;
