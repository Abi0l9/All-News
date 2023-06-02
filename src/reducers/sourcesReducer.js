import { createSlice } from "@reduxjs/toolkit";
import newsServices from "../services";

const sourcesSlice = createSlice({
  name: "sources",
  initialState: [],
  reducers: {
    getSources: (_, action) => {
      return action.payload;
    },
  },
});

const { getSources } = sourcesSlice.actions;

export const getAllSources = () => {
  return async (dispatch) => {
    const data = await newsServices.getNewsBySources();

    dispatch(getSources(data));
  };
};

export default sourcesSlice.reducer;
