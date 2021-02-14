import { type } from "os";

export interface BaseConfig {
  base_api: string;
  list_product_api: string;
  product_detail_api: string;
}


export type GeneralHandleClick<handleClickTypeReturn> = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => handleClickTypeReturn;
export type Elevation = "thin" | "interactive" | "float" | "thicker";
export type Border = "flat" | "rounded"
export type ListFormat = "list" | "grid";

export type LoadingStyle = "product" | "cart" | "product-detail"