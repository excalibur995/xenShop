import { Product } from "../models/ShopModel";
import BaseService from "./BaseService";

export default class ProductService extends BaseService {

	defaultValue: Product = {
		category: "none",
		description: "none",
		id: -1,
		image: "",
		price: 0,
		title: ""
	}

	/**
	 *
	 * @description get all product list
	 * @returns Promise<Product[]>
	 */
	async getProductList(): Promise<Product[]> {
		try {
			const res = await fetch(this.base_api + this.list_product_api);
			const item = await res.json();
			return item;
		} catch (e) {
			return [];
		}
	}



	/**
	 *
	 * @description get a single product detail
	 * @param id: string
	 * @returns Promise<Product>
	 */
	async getProductDetail(id: string): Promise<Product> {
		try {
			const res = await fetch(this.base_api + this.mutateProductDetail(id));
			const item = await res.json();
			return item;
		} catch (e) {
			return this.defaultValue
		}
	}
}
