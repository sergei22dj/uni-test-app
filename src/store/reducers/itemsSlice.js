import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  error: "",
  isLoading: false,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    fetchItems(state) {
      state.isLoading = true;
    },
    fetchItemsSuccsses(state, action) {
      state.isLoading = false;
      state.error = "";
      state.items = state.items.concat(action.payload);
    },
    fetchItemsError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearItems(state) {
      state.items = [];
    },
  },
});
export default itemsSlice.reducer;
