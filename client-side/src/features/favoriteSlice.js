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
      const itemInCart = state.favoriteItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        state.favoriteItems.favoriteQuantity ++;
      } else {
        const tempProduct = { ...action.payload, favoriteQuantity: 1 };
        state.favoriteItems.push(tempProduct);
      }
      localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems))
    },
    removeFromFavorite(state, action) {
      const updatedFavoriteItems = state.favoriteItems.filter(
        (favoriteItem) => favoriteItem.id !== action.payload.id
      );
      state.favoriteItems = updatedFavoriteItems;
      localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
    },
    clearFavorites(state, action) {
      state.favoriteItems = [];
      localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
    },
    sumQuantity(state, action) {
      let { quantity } = state.favoriteItems.reduce(
        (favoriteTotal, favoriteItem) => {
          const {favoriteQuantity} = favoriteItem

          favoriteTotal.quantity += favoriteQuantity

          return favoriteTotal
        },
        {
          quantity: 0}
      );
      state.favoriteTotalQuantity = quantity;
    }
  }
})

export const { addToFavorite, removeFromFavorite, clearFavorites, sumQuantity } = favoriteSlice.actions;

export default favoriteSlice.reducer;