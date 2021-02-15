/**
 * @description structure data of the BaseConfig
 * which hold the data of api list
 * @param base_api: string;
 * @param list_product_api: string;
 * @param product_detail_api: string;
 */
export interface BaseConfig {
  base_api: string;
  list_product_api: string;
  product_detail_api: string;
}

/**
 * @description a generic type data of the GeneralHandleClick
 * @param event: React.MouseEvent<HTMLDivElement, MouseEvent>;
 * @returns handleClickTypeReturn - a generic type of return
 */
export type GeneralHandleClick<handleClickTypeReturn> = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => handleClickTypeReturn;

/**
 * @description a type of Elevation data
 * @returns "thin" | "interactive" | "float" | "thicker";
 */
export type Elevation = "thin" | "interactive" | "float" | "thicker";
/**
 * @description a type of Border data
 * @returns "flat" | "rounded"
 */
export type Border = "flat" | "rounded"
/**
 * @description a type of ListFormat data
 * @returns "list" | "grid";
 */
export type ListFormat = "list" | "grid";
/**
 * @description a type of LoadingStyle data
 * @returns "product" | "cart" | "product-detail"
 */
export type LoadingStyle = "product" | "cart" | "product-detail"
/**
 * @description a type of CounterType data
 * @returns "increment" | "decrement"
 */
export type CounterType = "increment" | "decrement"