import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import products from "../data/data";

const initialState = {
  cards: [],
  isLoading: false,
  basket: [],
};

const dataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    addBasket(state, action) {
      try {
        if (state.basket.length < 1) {
          state.basket.push({
            id: action.payload.id,
            name: state.cards[action.payload.id - 1].name,
            description: state.cards[action.payload.id - 1].description,
            price: state.cards[action.payload.id - 1].price,
            img: state.cards[action.payload.id - 1].img,
            size: state.cards[action.payload.id - 1].size,
            quantity: 1,
          });
        } else {
          if (state.basket.some((card) => card.id === action.payload.id) === false) {
            state.basket.push({
              id: action.payload.id,
              name: state.cards[action.payload.id - 1].name,
              description: state.cards[action.payload.id - 1].description,
              price: state.cards[action.payload.id - 1].price,
              img: state.cards[action.payload.id - 1].img,
              size: state.cards[action.payload.id - 1].size,
              quantity: 1,
            });
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    changeBasketProductQuantity(state, action) {
      for (let i = 0; i < state.basket.length; i++) {
        if (state.basket[i].id === action.payload.id) {
          state.basket[i].quantity = action.payload.quantity;
        }
      }
    },
    deleteCardAtBasket(state, action) {
      state.basket.splice(
        state.basket.findIndex((card) => card.id === action.payload.id),
        1,
      );
    },
    clearBasket(state, action) {
      state.basket = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.cards = action.payload.data;
    });
  },
});

export const fetchTasks = createAsyncThunk("cards/fetchTasks", async () => {
  return new Promise((resolve) => setTimeout(() => resolve({ data: products }), 1000));
});

export const { addBasket, changeBasketProductQuantity, deleteCardAtBasket, clearBasket } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
