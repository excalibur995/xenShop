/**
 *
 * @description structure data of the Products
 * @param id: string
 * @param title: string;
 * @param price: number
 * @param category: string;
 * @param image: string;
 * @param description: string,
 * 
 */
export interface Product {
  id: number;
  title: string;
  price: number
  category: string;
  image: string;
  description: string,
}

/**
 *
 * @description structure data of the Cart
 * @param id: string
 * @param products: CartDetail[];
 * 
 */
export interface Cart {
  id: number;
  products: CartDetail[]
}

/**
 *
 * @description structure data of the CartDetail, extended from Product
 * whiech means have all Product structure
 * @param quantity: number;
 * 
 */
export interface CartDetail extends Product {
  quantity: number;
}

/**
 * @description structure data of the CheckoutItem
 * @param amount: number;
 * @param payerEmail: string;
 * @param description: string;
 */
export interface CheckoutItem {
  amount: number;
  payerEmail: string;
  description: string;
}
