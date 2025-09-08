import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts(state, action) {
      state.products.push({
        id: state.products.length + 1,
        product: action.payload.product,
        about: action.payload.about,
        price: action.payload.price,
        aval: action.payload.aval,
      });
    },
    deleteProduct(state, action) {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
    },
    changeAval(state, action) {
      const changeAval = state.products.find((item) => item.id === action.payload.id);
      changeAval.aval = !changeAval.aval;
    },
    changeTheProduct(state, action) {
      const index = state.products.findIndex((item) => item.id === action.payload.id);

      state.products[index].product = action.payload.newProduct !== "" ? action.payload.newProduct : state.products[index].product;

      state.products[index].about = action.payload.newAbout !== "" ? action.payload.newAbout : state.products[index].about;

      state.products[index].price = action.payload.newPrice !== "" ? action.payload.newPrice : state.products[index].price;
    },
  },
});

export const { addProducts, deleteProduct, changeAval, changeTheProduct } = productSlice.actions;
export default productSlice.reducer;
