import { ListFormat, LoadingStyle } from "../../../models/GenericModel";

export interface ListProductConfig<ProductType> {
	/**
	 *
	 * @description format of the list either is "list" or a "grid"
	 * @default list
	 *
	 */
	format?: ListFormat;
	/**
	 *
	 * @description flag that indicates that list being loading 
	 * @default false
	 *
	 */
	loading?: boolean;
	/**
	 *
	 * @description style of product loading card
	 * @interface LoadingStyle
	 * @kind "product" | "cart" | "product-detail"
	 *
		*/
	loadingStyle?: LoadingStyle
	/**
	 *
	 * @description product that need to map
	 * @interface ProductType[]
	 * @kind Array
	 *
	 */
	product: ProductType[];
	/**
	 *
	 * @description function to render item in parent will retrun the type
	 * base on what kind of product user give
	 * @interface item:ProductType
	 * @interface index: number
	 * @kind function
	 * @example ((item, index)=><Component key={item.id}>{item}</Component>)
	 * @returns React.ReactNode // jsx
	 *
	 */
	renderItem: (item: ProductType, index: number) => React.ReactNode;
}

export interface ContainerConfig {
	/**
	 *
	 * @description children component to be rendered
	 *
	 */
	children: React.ReactNode;
	/**
	 *
	 * @description format of the list either is "list" or a "grid"
	 *
	 */
	format: ListFormat;
}