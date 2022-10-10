import { createSlice } from "@reduxjs/toolkit";

const favoriteItems =
  localStorage.getItem("favoriteItems") !== null
  ? JSON.parse(localStorage.getItem("favoriteItems"))
  : [];

const favoriteTotalQuantity =
  localStorage.getItem("favoriteTotalQuantity") !== null
  ? JSON.parse(localStorage.getItem("favoriteTotalQuantity"))
  : 0;

const setItemFunc = (favoriteItem, favoriteTotalQuantity) => {
  localStorage.setItem("favoriteItems", JSON.stringify(favoriteItem));
  localStorage.setItem("favoriteTotalQuantity", JSON.stringify(favoriteTotalQuantity));
}

const initialState = {
  favoriteItems: favoriteItems,
  favoriteTotalQuantity: favoriteTotalQuantity,
}

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    isItemInFavorite(state, action) {
      state.favoriteItems = action.payload
      // state.favoriteTotalQuantity = action.payload
      const itemInFavorite = state.favoriteItems.find(
        (item) => item.id === action.payload.id
      );
      console.log("action", action.payload)
      if (itemInFavorite) {
        const updatedFavState = state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload.id)
        state.favoriteItems = updatedFavState
      } else {
        const updatedFavState = state.favoriteItems.filter((item) => item.id !== action.payload.id)
        state.favoriteItems = updatedFavState
        console.log(state.favoriteItems)
        state.favoriteQuantity = state.favoriteItems.length
        state.favoriteTotalQuantity = state.favoriteQuantity
      }
      setItemFunc(
        state.favoriteItems.map((item) => item),
        state.favoriteTotalQuantity
      )
    },
    addToFavorite(state, action) {
      const newItem = action.payload
      const itemInFavorite = state.favoriteItems.find(
        (item) => item.id === newItem.id
      );
      if (itemInFavorite) {
        itemInFavorite.favoriteQuantity ++;
      } else {
        const tempProduct = { ...newItem, favoriteQuantity: 1 };
        state.favoriteItems.push(tempProduct);
        state.favoriteTotalQuantity ++
      }
      setItemFunc(
        state.favoriteItems.map((item) => item),
        state.favoriteTotalQuantity
      )
    },
    removeFromFavorite(state, action) {
      const itemInFavorite = state.favoriteItems.find((item) => item.id === action.payload.id)

      if (itemInFavorite) {
        state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload.id)
        state.favoriteTotalQuantity--
       };
        setItemFunc(
          state.favoriteItems.map((item) => item),
          state.favoriteTotalQuantity
        )
    },
    clearFavorites(state, action) {
      state.favoriteItems = [];
      state.favoriteQuantity = null
      state.favoriteTotalQuantity = null
      setItemFunc(
        state.favoriteItems.map((item) => item),
        state.favoriteTotalQuantity
      )
    },
  }
})

export const { isItemInFavorite, addToFavorite, removeFromFavorite, clearFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;