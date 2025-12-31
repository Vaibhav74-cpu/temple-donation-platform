import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    donors: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.donors = action.payload;
    },
  },
});

export const { setDonors } = userSlice.actions;
export default userSlice.reducer;
