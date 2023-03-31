import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchCardRedux, fetchAdminCardRedux, fetchRemoveCardRedux } from './asyncActions';
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
    //Продукты по категориям
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
    //все продукты для админа
    builder.addCase(fetchAdminCardRedux.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchAdminCardRedux.fulfilled, (state, action: PayloadAction<Card[]>) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchAdminCardRedux.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
    //удаление продукта
    //@ts-ignore
    builder.addCase(fetchRemoveCardRedux.pending, (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.status = Status.LOADING;
    });
  },
});

export const selectCard = (state: RootState) => state.card;
export const { setItems } = cardSlice.actions;

export default cardSlice.reducer;
