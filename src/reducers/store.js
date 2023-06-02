import { configureStore } from "@reduxjs/toolkit";
import headlineReducer from "./headlineReducer";
import selectedNewsReducer from "./selectedNewsReducer";
import sourcesReducer from "./sourcesReducer";
import retrievedSourceReducer from "./retrievedSourceReducer";

const store = configureStore({
  reducer: {
    headlines: headlineReducer,
    selectedNews: selectedNewsReducer,
    sources: sourcesReducer,
    retrievedSource: retrievedSourceReducer,
  },
});

export default store;
