import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Card, SearchCardParams, AdminCardParams } from './types';

export const fetchCardRedux = createAsyncThunk<Card[], SearchCardParams>(
  'card/fetchCardStatus',
  async (params) => {
    const { order, sortBy, categoryId, currentPage } = params;
    const { data } = await axios.get<Card[]>(
      `${process.env.REACT_APP_API_URL}/items?page=${currentPage}&limit=6&category=${categoryId}&sortBy=${sortBy}&order=${order}`,
    );

    return data;
  },
);

export const fetchAdminCardRedux = createAsyncThunk<Card[], AdminCardParams>(
  'card/fetchAdminCardRedux',

  async (params) => {
    const { categoryId, currentPageStr } = params;

    const { data } = await axios.get<Card[]>(
      `${process.env.REACT_APP_API_URL}/items?page=${currentPageStr}&limit=6&category=${categoryId}`,
    );

    return data;
  },
);

export const fetchRemoveCardRedux = createAsyncThunk<Card[], string>(
  'card/fetchRemoveCardRedux',
  //@ts-ignore
  async (id) => {
    const { data } = await axios.delete<Card[]>(`${process.env.REACT_APP_API_URL}/items/${id}`);
  },
);
