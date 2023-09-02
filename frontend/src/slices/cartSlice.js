import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((temp) => temp._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((temp) =>
          temp._id === existItem._id ? item : temp
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      state.totalPrice = state.cartItems.reduce(
        (acc, temp) => acc + temp.price * temp.quantity,
        0
      );

      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );

      state.totalPrice = state.cartItems.reduce(
        (acc, temp) => acc + temp.price * temp.quantity,
        0
      );

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
