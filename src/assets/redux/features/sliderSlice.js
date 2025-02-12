import { createSlice } from '@reduxjs/toolkit';
// import { SlideData } from '../../../Components/Slider/SlideData';
import { sliderData } from '../../../Components/ProductData/ProductData';
const initialState = {
  value: 0,
  length: sliderData.length,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    nextSlider(state, action) {
      console.log("action".action);
      console.log("state",state);
      
      state.value = action.payload > state.length-1 ? 0 : action.payload;
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length-1 : action.payload;
    },
    dotSlide(state, action) {
      state.value = action.payload; 
    },
  },
});

export const { nextSlider, prevSlide, dotSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
