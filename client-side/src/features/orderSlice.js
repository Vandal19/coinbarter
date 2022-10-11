import { compose } from "@mui/system";
import { createSlice } from "@reduxjs/toolkit";

const orderItems =
  localStorage.getItem("orderItems") !== null
    ? JSON.parse(localStorage.getItem("orderItems"))
    : [];

const orderTotalQuantity =
  localStorage.getItem("orderTotalQuantity") !== null
    ? JSON.parse(localStorage.getItem("orderTotalQuantity"))
    : 0;

    const orderTotalAmount =
    localStorage.getItem("orderTotalAmount") !== null
      ? JSON.parse(localStorage.getItem("orderTotalAmount"))
      : 0;

const setItemFunc = (orderItem) => {
  localStorage.setItem("orderItems", JSON.stringify(orderItem));
  localStorage.setItem("orderTotalQuantity", JSON.stringify(orderTotalQuantity));
  localStorage.setItem("orderTotalAmount", JSON.stringify(orderTotalAmount));
};

const initialState = {
  orderItems: orderItems,
  orderTotalQuantity: orderTotalQuantity,
  orderTotalAmount: orderTotalAmount
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderDetails(state, action) {
      state.orderItems = action.payload;
      console.log("items", state.orderItems)
      const price = state.orderItems[0].price
      // console.log("price", price)
      const quantity = state.orderItems[0].quantity
      // console.log("payload", orderQuantity)
      state.orderTotalQuantity = quantity
      state.orderTotalAmount = state.orderTotalQuantity * price
      setItemFunc(
      state.orderItems.map((item) => item),
      state.orderTotalQuantity,
      state.orderTotalAmount
      );
    },
    createOrder(state, action) {
      // console.log("action", action)
      state.orderItems = action.payload
      setItemFunc(
        state.orderItems.map((item) => item)
      );
    },
    orderTotal(state, action) {
      let { total, quantity } = state.orderItems.reduce(
        (orderTotal, orderItem) => {
          const { price, quantity } = orderItem;
          const itemTotal = price * quantity;

          orderTotal.total += itemTotal;
          orderTotal.quantity += quantity;

          return orderTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
        setItemFunc(
          state.orderItems.map((item) => item),
          state.orderTotalQuantity,
          state.orderTotalAmount
          )
      );
      state.orderTotalQuantity = quantity;
      state.orderTotalAmount = total;
    },
  },
});

export const { orderDetails, orderTotal, createOrder } = orderSlice.actions;

export default orderSlice.reducer;