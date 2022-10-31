import { combineReducers, configureStore } from "@reduxjs/toolkit";
// reducers
import authReducer from "./reducers/authSlice";
import itemsReducer from "./reducers/itemsSlice";

const rootReducer = combineReducers({
  authReducer,
  itemsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
