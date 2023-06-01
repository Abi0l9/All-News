import { createSlice } from "@reduxjs/toolkit";

const selectedNewsSlice = createSlice({
  name: "selectedNews",
  initialState: {},
  reducers: {
    getSelected: (_, action) => {
      return action.payload;
    },
  },
});

const { getSelected } = selectedNewsSlice.actions;

export const getSelectedNews = (selected) => {
  return (dispatch) => {
    dispatch(getSelected(selected));
  };
};

export default selectedNewsSlice.reducer;
