import { configureStore } from "@reduxjs/toolkit";
import headlineReducer from "./headlineReducer";
import selectedNewsReducer from "./selectedNewsReducer";

const store = configureStore({
  reducer: {
    headlines: headlineReducer,
    selectedNews: selectedNewsReducer,
  },
});

export default store;
