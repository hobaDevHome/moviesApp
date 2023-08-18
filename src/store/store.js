// store.js
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import thunkMiddleware from "redux-thunk"; // Import Redux Thunk

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  middleware: [thunkMiddleware], // Add Redux Thunk middleware
});

export default store;
