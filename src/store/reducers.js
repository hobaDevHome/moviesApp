import { combineReducers } from "@reduxjs/toolkit";

const initialState = [];

const imageUrlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IMAGE_URLS":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  imageUrls: imageUrlsReducer,
});

export { rootReducer };
