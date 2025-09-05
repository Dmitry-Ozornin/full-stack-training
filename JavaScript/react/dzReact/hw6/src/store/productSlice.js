import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push({
        id: state.products.length + 1,
        name: action.payload.nameProduct,
        description: action.payload.description,
        price: action.payload.price,
        availability: action.payload.availability,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
