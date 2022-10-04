import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: null
}

// export const productsFetch = createAsyncThunk(
//   "products/productsFetch",
//   async () => {
//     const response = await axios.get("http://localhost:8000/products")
//     return response?.data
//   }
// )

const productsSlice = createSlice({
  name: 'products',
  initialState:{
    value:{
      products: []
    }
  },
  reducers: {
    setProducts: (state, action) => {
      state.value.products = action.payload;
    }
  },
  // extraReducers: {
  //   [productsFetch.pending]: (state, action) => {
  //     state.status = "pending"
  //   },
  //   [productsFetch.fulfilled]: (state, action) => {
  //     state.status = "success"
  //     state.items = action.payload
  //   },
  //   [productsFetch.rejected]: (state, action) => {
  //     state.status = "rejected"
  //   }
  // }
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer