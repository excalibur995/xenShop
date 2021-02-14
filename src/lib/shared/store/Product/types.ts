import { Product } from "../../../models/ShopModel";
import { RootAction } from "../../../models/StoreModel";

export interface ProductListState {
  isLoad: boolean;
  products: Product[];
  productDetail: Product | null;
}

enum ProductListActionEnum {
  POPULATE_PRODUCT_LIST,
  POPULATE_DETAIL_PRODUCT,
  TOGGLE_PRODUCT,
  TOGGLE_LIST,
}

export type ProductListActionTypes = keyof typeof ProductListActionEnum;

export type ProductListActions<T> = RootAction<ProductListActionTypes, T>