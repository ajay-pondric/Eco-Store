import { createSlice } from "@reduxjs/toolkit";

const loadCartState = () => {
    const getItem = localStorage.getItem("cart");
     return getItem === null ? undefined : JSON.parse(getItem);
};

const saveCartState = (state) => {
    const getItem = JSON.stringify(state);
    localStorage.setItem("cart", getItem);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartState() || {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const itemExist = state.items.some((item) => item.id === action.payload.id);
      if(!itemExist) {
        state.items.push(action.payload);
      }
      saveCartState(state); 
    },
    removeItems: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveCartState(state); 
    },
    clearCart: (state, action) => {
      state.items = [];
      saveCartState(state); 
    }
  }
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
