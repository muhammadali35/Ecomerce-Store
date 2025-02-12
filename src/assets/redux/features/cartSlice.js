import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [], // Changed from object to array
    totalAmount: 0, // Represents total quantity of all products
    totalPrice: 0, // Represents total price of all products
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existingProduct = state.cart.find(
                (item) =>
                    item.id === product.id &&
                    item.size === product.size &&
                    item.color === product.color
            );

            if (existingProduct) {
                // If the product with the same size and color exists, update it
                existingProduct.amount++;
                existingProduct.totalPrice += product.price;
                state.totalAmount++;
                state.totalPrice += product.price;
            } else {
                // If it's a new product, add it to the cart
                state.cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    size: product.size,
                    color: product.color,
                    img:product.img,
                    text:product.text,
                    amount: 1,
                    totalPrice: product.price,
                });
                state.totalAmount++;
                state.totalPrice += product.price;
            }
        },
        removeCart(state, action) {
            const product = action.payload;
            const existingProduct = state.cart.find(
              (item) =>
                item.id === product.id &&
                item.size === product.size &&
                item.color === product.color
            );
          
            if (existingProduct) {
              if (existingProduct.amount === 1) {
                // Remove the product completely
                state.cart = state.cart.filter(
                  (item) =>
                    item.id !== product.id ||
                    item.size !== product.size ||
                    item.color !== product.color
                );
              } else {
                // Decrease the quantity
                existingProduct.amount--;
                existingProduct.totalPrice -= product.price;
              }
              state.totalAmount--;
              state.totalPrice -= product.price;
            }
          }
          
    },
});

export const { addToCart ,removeCart} = cartSlice.actions;
export default cartSlice.reducer;
