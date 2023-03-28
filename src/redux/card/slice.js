import { createSlice } from '@reduxjs/toolkit';
import { fetchCardRedux } from './asyncActions';

const initialState = {
  items: [],
  status: '',
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCardRedux.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchCardRedux.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchCardRedux.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const selectCartItemById = (id) => (state) => state.cart.items.find((obj) => obj.id === id);
export const selectCard = (state) => state.card;
export const { setItems } = cardSlice.actions;

export default cardSlice.reducer;
