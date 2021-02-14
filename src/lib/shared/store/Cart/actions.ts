import { Product } from "../../../models/ShopModel";
import { CartActions } from "./types";

export function addToCartProduct(detail: Product): CartActions<Product> {
  return {
    type: "ADD_TO_CART",
    payload: detail
  }
}

export function removeCartProduct(detail: Product): CartActions<Product> {
  return {
    type: "REMOVE_FROM_CART",
    payload: detail
  }
}