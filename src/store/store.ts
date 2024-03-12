import { configureStore } from '@reduxjs/toolkit';
import tShirtSliceReducer from './tShirtSlice';

export const store = configureStore({
   reducer: {
      tShirt: tShirtSliceReducer,
   },
});
