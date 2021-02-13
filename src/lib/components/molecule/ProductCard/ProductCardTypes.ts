import { Product } from "../../../models/ShopModel";

export interface ItemCardProps<handleClickTypeReturn> {
  product: Product;
  handleClick?: (
    e?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => handleClickTypeReturn;
}