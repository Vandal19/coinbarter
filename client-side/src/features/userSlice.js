import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout(state, action) {
      state.user = null;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
