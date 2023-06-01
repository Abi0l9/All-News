import { configureStore } from "@reduxjs/toolkit";
import headlineReducer from "./headlineReducer";

const store = configureStore({
  reducer: {
    headlines: headlineReducer,
  },
});

export default store;
