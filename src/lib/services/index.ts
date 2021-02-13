import { BaseConfig } from "../models/GenericModel"
import ProductService from "./ProductService"

const apiConfig: BaseConfig = {
  base_api: "https://fakestoreapi.com",
  list_product_api: "/products",
  product_detail_api: "/products/:id"
}

export const productService = new ProductService(apiConfig);