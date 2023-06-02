import { createSlice } from "@reduxjs/toolkit";
import newsServices from "../services";

const headlineSlice = createSlice({
  name: "headline",
  initialState: [],
  reducers: {
    getHeadlines: (_, action) => {
      return action.payload;
    },
  },
});

const { getHeadlines } = headlineSlice.actions;

export const getAllHeadlines = () => {
  return async (dispatch) => {
    const data = await newsServices.getHeadlines();

    dispatch(getHeadlines(data));
  };
};

export default headlineSlice.reducer;
