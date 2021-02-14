import { Product } from "../../../models/ShopModel";
import { productService } from "../../../services";
import { ProductListActions } from "./types";




export function fetchProducts() {
  return async (dispatch: (arg: ProductListActions<boolean | Product[]>) => ProductListActions<boolean | Product[]>) => {
    dispatch(toggleLoadingId(true));
    return productService
      .getProductList()
      .then((value) => dispatch(populateProduct(value)))
      .catch(() => dispatch(populateProduct([])))
      .finally(() => dispatch(toggleLoadingId(false)));
  }
}

export function populateProductDetail(detail: Product): ProductListActions<Product> {
  return {
    type: "POPULATE_DETAIL_PRODUCT",
    payload: detail
  }
}

export function populateProduct(products: Product[]): ProductListActions<Product[]> {
  return {
    type: "POPULATE_PRODUCT_LIST",
    payload: products
  }
}

export function toggleLoadingId(load: boolean): ProductListActions<boolean> {
  return {
    type: "TOGGLE_LIST",
    payload: load
  }
}