import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.users = action.payload;
    },
    logout(state, action) {
      state.users = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
