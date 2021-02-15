import { Cart } from "../../../models/ShopModel";
import { RootAction } from "../../../models/StoreModel";


enum CartActionEnum {
  ADD_TO_CART,
  REMOVE_FROM_CART,
}
export interface CartListState {
  cart: Cart;
}


export const STORAGE_CAR_KEY = 'storageCartKey'



export type CartActionTypes = keyof typeof CartActionEnum;

export type CartActions<T> = RootAction<CartActionTypes, T>