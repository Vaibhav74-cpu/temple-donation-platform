import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    donors: [], // ✅ ALWAYS ARRAY
  },
  reducers: {
    setDonors: (state, action) => {
      state.donors = Array.isArray(action.payload) ? action.payload : [];
    },
    clearDonors: (state) => {
      state.donors = [];
    },
  },
});

export const { setDonors, clearDonors } = adminSlice.actions;
export default adminSlice.reducer;
