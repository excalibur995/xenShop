import { Cart, Product } from "../../../models/ShopModel";
import { RootAction } from "../../../models/StoreModel";

export interface CartListState {
  cart: Cart;
  cartProductTemp: Product[]
}

enum CartActionEnum {
  ADD_TO_CART,
  REMOVE_FROM_CART,
}

export type CartActionTypes = keyof typeof CartActionEnum;

export type CartActions<T> = RootAction<CartActionTypes, T>