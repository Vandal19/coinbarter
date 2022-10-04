import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: localStorage.getItem("favoriteItems")
  ? JSON.parse(localStorage.getItem("favoriteItems"))
  : [],
favoriteTotalQuantity: 0,
}

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action) {
      const itemIndex = state.favoriteItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.favoriteItems[itemIndex].favoriteQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, favoriteQuantity: 1 };
        state.favoriteItems.push(tempProduct);
      }
      localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems))
    },
    removeFromFavorite(state, action) {
      const updatedFavoriteItems = state.cartItems.filter(
        (favoriteItem) => favoriteItem.id !== action.payload.id
      );
      state.favoriteItems = updatedFavoriteItems;
      localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
    },
  }
})

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;