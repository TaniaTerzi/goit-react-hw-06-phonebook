import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { query: ""},
  reducers: {
    setFilter(state, action) {
      return { ...state, query: action.payload };
    }
  }
});

export const setFilter = filterSlice.actions.setFilter;
export const filterReducer = filterSlice.reducer;