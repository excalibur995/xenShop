import { Product } from "../models/ShopModel";
import BaseService from "./BaseService";

export default class ProductService extends BaseService {
	async getProductList(): Promise<Product[]> {
		try {
			const res = await fetch(this.base_api + this.list_product_api);
			const item = await res.json();
			return item;
		} catch (e) {
			return [];
		}
	}

	async getProductDetail(id: string): Promise<Product | null> {
		try {
			const res = await fetch(this.base_api + this.mutateProductDetail(id));
			const item = await res.json();
			return item;
		} catch (e) {
			return null;
		}
	}
}
