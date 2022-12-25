import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "constants/products";
import { RootState } from "../store";

interface CartState {
  totalAmount: number;
  totalQuantity: number;
  cartItems: Item[];
}

interface Item {
  id: string;
  productName: string;
  price: number;
  quantity: number;
  totalPrice: number;
  imgUrl: string;
}

const initialState: CartState = {
  totalAmount: 0,
  totalQuantity: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action: PayloadAction<ProductType>) {
        const newItem = action.payload;
        const existingItem = state.cartItems.find(
          (item) => item.id === newItem.id,
        );

        state.totalQuantity++;
        if (!existingItem) {
          state.cartItems.push({
            id: newItem.id,
            productName: newItem.productName,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            imgUrl: newItem.imgUrl,
          });
        } else {
          existingItem.quantity++;
          existingItem.totalPrice += Number(newItem.price);
        }

        state.totalAmount += newItem.price;
      },
      prepare(item) {
        return { payload: item };
      },
    },
    removeProduct: {
      reducer(state, action: PayloadAction<string>) {
        const productId = action.payload;
        const existingItem = state.cartItems.find(
          (item) => item.id === productId,
        );

        console.log("payload", productId);

        console.log(existingItem);
        if (existingItem) {
          state.cartItems = state.cartItems
            .slice()
            .filter((item) => item.id !== productId);
          state.totalQuantity -= existingItem.quantity;
          state.totalAmount -= existingItem?.totalPrice;
        }
      },
      prepare(productId) {
        return { payload: productId };
      },
    },
  },
});

export const selectAllProducts = (state: RootState) => state.cart.cartItems;

export const selectAllAmountProducts = (state: RootState) =>
  state.cart.totalAmount;

export const selectAllQuantityProducts = (state: RootState) =>
  state.cart.totalQuantity;

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
