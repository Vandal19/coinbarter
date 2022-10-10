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
      const price = state.orderItems[0].price
      console.log("price", price)
      const orderQuantity = state.orderItems[0].quantity
      console.log("payload", orderQuantity)
      state.orderTotalQuantity = orderQuantity
      state.orderTotalAmount = state.orderTotalQuantity * price
      setItemFunc(
      state.orderItems.map((item) => item),
      state.orderTotalQuantity,
      state.orderTotalAmount
      );
    },
    createOrder(state, action) {
      state.orderItems = action.payload
      setItemFunc(
        state.orderItems.map((item) => item),
      );
    }
    // orderTotal(state, action) {
    //   let { total, quantity } = state.orderItems.reduce(
    //     (orderTotal, orderItem) => {
    //       const { price, orderQuantity } = orderItem;
    //       const itemTotal = price * orderQuantity;

    //       orderTotal.total += itemTotal;
    //       orderTotal.quantity += orderQuantity;

    //       return orderTotal;
    //     },
    //     {
    //       total: 0,
    //       quantity: 0,
    //     },
    //     setItemFunc(
    //       state.orderItems.map((item) => item),
    //       state.orderTotalQuantity,
    //       state.orderTotalAmount
    //       )
    //   );
    //   state.orderTotalQuantity = quantity;
    //   state.orderTotalAmount = total;
    // },
  },
});

export const { orderDetails, orderTotal } = orderSlice.actions;

export default orderSlice.reducer;
