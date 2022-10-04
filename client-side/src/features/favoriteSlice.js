import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favItems: localStorage.getItem("favItems")
  ? JSON.parse(localStorage.getItem("favItems"))
  : [],
cartTotalQuantity: 0,
}

const favSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFav(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
    }
    localStorage.setItem("favItems", JSON.stringify(state.favUtens))
  }
}
})

export const { addToFav } = favSlice.actions;

export default favSlice.reducer;