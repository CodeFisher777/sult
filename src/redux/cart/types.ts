export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  count: number;
  itemCount: number;
  description: string;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
