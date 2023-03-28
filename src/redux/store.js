import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import cart from './cart/slice';
import card from './card/slice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    card,
  },
});
