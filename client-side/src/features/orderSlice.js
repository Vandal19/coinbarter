import { createSlice } from "@reduxjs/toolkit";

const orderItems =
  localStorage.getItem("orderItems") !== null
    ? JSON.parse(localStorage.getItem("orderItems"))
    : [];

const orderTotalQuantity =
  localStorage.getItem("orderTotalQuantity") !== null
    ? JSON.parse(localStorage.getItem("orderTotalQuantity"))
    : 0;

const setItemFunc = (orderItem) => {
  localStorage.setItem("orderItems", JSON.stringify(orderItem));
  localStorage.setItem("orderTotalQuantity", JSON.stringify(orderTotalQuantity));
};

const initialState = {
  orderItems: orderItems,
  orderTotalQuantity: orderTotalQuantity,
  // orderTotalAmount: orderTotalAmount
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderDetails(state, action) {
      state.orderItems = action.payload;
      const orderQuantity = state.orderItems[0].quantity
      console.log("payload", orderQuantity)
      state.orderTotalQuantity = orderQuantity
      setItemFunc(
      state.orderItems.map((item) => item),
      state.orderTotalQuantity
      );
    },
  },
});

export const { orderDetails } = orderSlice.actions;

export default orderSlice.reducer;
