import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    isItemInCart(state, action) {
      state.cartItems = action.payload.id
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
        )

    },
    addToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.cartItems.find((item) => item.id === newItem.id)

      if(existingItem) {
        existingItem.cartQuantity ++
        console.log("itemInCart1", existingItem)
      } else {
        const tempProduct = { ...newItem, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        console.log("itemInCart2", state.cartItems)
      }

      // const itemIndex = state.cartItems.findIndex(
      //   (item) => item.id === action.payload.id
      //   );
      //   console.log("itemIndex", itemIndex)

      // if (state.cartItems[itemIndex].cartQuantity < 1) {
      //   state.cartItems[itemIndex].cartQuantity += 1;
      //   console.log("cart1", state.cartItems)
      // } else {
      //   const tempProduct = { ...action.payload, cartQuantity: 1 };
      //   state.cartItems.push(tempProduct);
      //   console.log("cart2", state.cartItems)
      // }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = updatedCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex] === 1) {
        const updatedCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = updatedCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    sumTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { isItemInCart, addToCart, removeFromCart, decreaseCart, clearCart, sumTotal } =
  cartSlice.actions;

export default cartSlice.reducer;