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
    isItemInFavorite(state, action) {
       state.favoriteItems.find(
        (item) => item.id === action.payload.id
      );
      localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems))
    },
    addToFavorite(state, action) {
      const itemInFavorite = state.favoriteItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInFavorite) {
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

export const { isItemInFavorite, addToFavorite, removeFromFavorite, clearFavorites, sumQuantity } = favoriteSlice.actions;

export default favoriteSlice.reducer;