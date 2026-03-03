import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  selectedCategory: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearFilters: (state) => {
      state.searchTerm = "";
      state.selectedCategory = "";
    },
  },
});

export const { setSearchTerm, setSelectedCategory, clearFilters } =
  filterSlice.actions;

export default filterSlice.reducer;