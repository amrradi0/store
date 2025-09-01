import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [], 
};

export const appSlice = createSlice({
    name: "Ecommerce",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart: (state) => {
            state.products = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = appSlice.actions; 
export default appSlice.reducer; 
