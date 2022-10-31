import { createSlice } from "@reduxjs/toolkit";
import { tokenValue } from "../token";

const initialState = {
  email: "",
  password: "",
  error: "",
  accessToken: tokenValue(),
  isLoading: false,
  modalIsOpen: false,
  enter: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPassword(state, action) {
      state.password = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    modalState(state, action) {
      state.modalIsOpen = action.payload;
    },
    setEnter(state, action) {
      state.enter = action.payload;
    },
    authFetching(state) {
      state.isLoading = true;
    },
    authFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.accessToken = action.payload;
    },
    authFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.accessToken = "";
      state.modalIsOpen = true;
    },
  },
});
export default authSlice.reducer;
