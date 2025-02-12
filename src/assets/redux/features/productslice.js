import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../../Components/ProductData/ProductData';

const initialState = {
  filteredProducts: storeData, // Directly assign storeData to fallback
  singlProduct: JSON.parse(sessionStorage.getItem('singlProduct')) || storeData, // Null for single product
  error: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filteredProducts(state, action) {
      try {
        const filter = storeData.filter((product) => product.type === action.payload);
        state.filteredProducts = filter;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem('filteredData', saveState);
      } catch (error) {
        console.error('Error filtering products:', error);
      }
    },
    singleProduct(state, action) {
      const oneProduct = filteredProducts.find((product) => product.id === action.payload);
      state.singlProduct = oneProduct || null;
      const saveState = JSON.stringify(oneProduct);
      sessionStorage.setItem('singlProduct', saveState);
    },
    filteredGender(state, action) {
      const gender = filteredProducts.filter((product) => product.gender === action.payload);
      state.error = gender.length === 0; // Set error if no matching products
      state.filteredProducts = gender.length > 0 ? gender : [];
      const saveState = JSON.stringify(gender);
      sessionStorage.setItem('filteredData', saveState);
    },
    filteredColor(state, action) {
      const color = filteredProducts.filter((product) =>
        product.color.includes(action.payload)
      );
      state.error = color.length === 0; // Set error if no matching products
      state.filteredProducts = color.length > 0 ? color : [];
      const saveState = JSON.stringify(color);
      sessionStorage.setItem('filteredData', saveState);
    },
    filteredPrice(state, action) {
      const price = [...state.filteredProducts].sort((a, b) =>
        a.price > b.price ? -1 : 1
      );
      state.filteredProducts = price;
      const saveState = JSON.stringify(price);
      sessionStorage.setItem('filteredData', saveState);
    },
    filteredSize(state, action) {
      const size = state.filteredProducts.filter((product) =>
        product.size.includes(action.payload)
      );
      state.error = size.length === 0; // Set error if no matching products
      state.filteredProducts = size.length > 0 ? size : [];
      const saveState = JSON.stringify(size);
      sessionStorage.setItem('filteredData', saveState);
    },
  },
});

export const {
  filteredProducts,
  singleProduct,
  filteredGender,
  filteredPrice,
  filteredColor,
  filteredSize,
} = productSlice.actions;
export default productSlice.reducer;
