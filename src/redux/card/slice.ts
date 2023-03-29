import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchCardRedux } from './asyncActions';
import { Card, CardSliceState, Status } from './types';

const initialState: CardSliceState = {
  items: [],
  status: Status.LOADING,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Card[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCardRedux.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchCardRedux.fulfilled, (state, action: PayloadAction<Card[]>) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCardRedux.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectCard = (state: RootState) => state.card;
export const { setItems } = cardSlice.actions;

export default cardSlice.reducer;
