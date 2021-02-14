import { ProductListState, ProductListActions } from "./types";

export const intialState: ProductListState = {
  products: [],
  productDetail: null,
  isLoad: false
}


export function reducer<T>(state: ProductListState = intialState, action: ProductListActions<T>) {
  switch (action.type) {
    case "POPULATE_PRODUCT_LIST":
      return {
        ...state,
        products: action.payload
      }
    case "TOGGLE_LIST":
      return {
        ...state,
        isLoad: action.payload
      }
    case "POPULATE_DETAIL_PRODUCT": {
      return {
        ...state,
        productDetail: action.payload
      }
    }
    default:
      return state;
  }
}
