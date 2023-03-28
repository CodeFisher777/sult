import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCardRedux = createAsyncThunk('pizza/fetchCardStatus', async (params) => {
  const { order, sortBy, categoryId, currentPage } = params;
  const { data } = await axios.get(
    `https://641e8eecad55ae01ccabd4a2.mockapi.io/items?page=${currentPage}&limit=6&category=${categoryId}&sortBy=${sortBy}&order=${order}`,
  );

  return data;
});
