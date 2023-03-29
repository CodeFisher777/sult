import { Sort } from '../filter/types';

export type Card = {
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: string;
  code: number;
  brand: string;
  manufacture: string;
  id: string;
  description: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface CardSliceState {
  items: Card[];
  status: Status;
}
export type SearchCardParams = {
  sortBy: string;
  order: string;
  categoryId: string;
  currentPage: string;
};
