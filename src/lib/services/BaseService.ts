import { BaseConfig } from "../models/GenericModel";


export default class BaseService {
  /**
   * @description your base api
   * @example "https://fakestoreapi.com"
    **/
  base_api: string;
  /**
   * @description your product api
   * @example "/products"
    **/
  list_product_api: string;
  /**
  * @description your product detail api
  * @example "/products/:id"
   **/
  product_detail_api: string;

  constructor(config: BaseConfig) {
    this.base_api = config.base_api
    this.list_product_api = config.list_product_api
    this.product_detail_api = config.product_detail_api
  }

  mutateProductDetail(id: string) {
    const paramsIdentifier = this.product_detail_api.substring(this.product_detail_api.indexOf(":"),
      this.product_detail_api.length)
    return this.product_detail_api.replace(paramsIdentifier, id);
  }
}