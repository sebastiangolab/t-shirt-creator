import { configureStore } from '@reduxjs/toolkit';
import tShirtSliceReducer from './tShirtSlice';
import tShirtMiddleware from './tShirtMiddleware';
import { TShirtState } from './tShirtSlice/tShirtSlice.types';

const reHydrateStore = (): TShirtState | undefined => {
   const creatorState = localStorage.getItem('creatorState');

   return creatorState ? JSON.parse(creatorState) : undefined;
};

export const store = configureStore({
   reducer: {
      tShirt: tShirtSliceReducer,
   },
   preloadedState: reHydrateStore(),
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(tShirtMiddleware),
});
