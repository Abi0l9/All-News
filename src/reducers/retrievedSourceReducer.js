import { createSlice } from "@reduxjs/toolkit";
import newsServices from "../services";

const retrievedSourceSlice = createSlice({
  name: "retrievedSource",
  initialState: {},
  reducers: {
    getRetrieved: (_, action) => {
      return action.payload;
    },
  },
});

const { getRetrieved } = retrievedSourceSlice.actions;

export const getRetrievedSources = (source) => {
  return async (dispatch) => {
    const data = await newsServices.getEverything(source);
    dispatch(getRetrieved(data));
  };
};

export default retrievedSourceSlice.reducer;
