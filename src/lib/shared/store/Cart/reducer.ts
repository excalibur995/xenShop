import { act } from "react-dom/test-utils";
import { cartService } from "../../../services";
import { CartActions, CartListState } from "./types";

export const intialState: CartListState = {
  cart: {
    id: new Date().getMilliseconds(),
    products: []
  },
  cartProductTemp: []
}

export function reducer(state: CartListState = intialState, action: CartActions<any>) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: cartService.addToCart(action.payload, state.cart),
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: cartService.removeFromCart(action.payload, state.cart)
      }
    default:
      return state;
  }
}