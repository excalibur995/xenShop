
import { cartService } from "../../../services";
import { retriveStorageToClient, saveToLocaleWithReturn } from "../../helpers/storageTools";
import { CartActions, CartListState, STORAGE_CAR_KEY } from "./types";

export const intialState: CartListState = {
  cart: retriveStorageToClient(STORAGE_CAR_KEY, {
    id: new Date().getMilliseconds(),
    products: []
  }),
}

export function reducer(state: CartListState = intialState, action: CartActions<any>) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: saveToLocaleWithReturn(STORAGE_CAR_KEY, cartService.addToCart(action.payload, state.cart)),
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: saveToLocaleWithReturn(STORAGE_CAR_KEY, cartService.removeFromCart(action.payload, state.cart)),
      }
    default:
      return state;
  }
}