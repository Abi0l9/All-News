import { createSlice } from "@reduxjs/toolkit";
import newsServices from "../services";
import { sortByPublishedAt } from "../utils";

const headlineSlice = createSlice({
  name: "headline",
  initialState: [],
  reducers: {
    getHeadlines: (_, action) => {
      return action.payload;
    },
    getLatestHeadline: (_, action) => {
      return action.payload;
    },
  },
});

const { getHeadlines, getLatestHeadline } = headlineSlice.actions;

export const getAllHeadlines = () => {
  return async (dispatch) => {
    const data = await newsServices.getHeadlines();

    dispatch(getHeadlines(data));
  };
};

export const getTopHeadline = () => {
  return async (dispatch) => {
    const request = await newsServices.getHeadlines();

    dispatch(getLatestHeadline(request.data[0]));
  };
};

export default headlineSlice.reducer;
