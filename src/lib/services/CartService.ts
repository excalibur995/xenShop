import { Cart, Product } from "../models/ShopModel";

export default class CartService {
  /**
   *
   * @description function that will manipulate the product and cart
   * data that will result new cart to save to store 
   * @param products: Product
   * @param cart: Cart;
   * 
   * @returns Cart
   * 
   */
  addToCart(products: Product, cart: Cart): Cart {
    /**
     * find exisiting product
    **/
    const exicstingProduct = cart.products.find((f) => f.id === products.id);
    if (exicstingProduct) {
      /**
        * if exist add quantity
      **/
      exicstingProduct.quantity += 1
    } else {
      /**
        * else push the product
      **/
      cart.products.push(({
        quantity: 1,
        ...products
      }))
    }
    return cart;
  }

  /**
   *
   * @description function that will remove one of the product
   * from the cart and return new cart
   * @param products: Product
   * @param cart: Cart;
   * 
   * @returns Cart
   * 
   */
  removeFromCart(products: Product, cart: Cart): Cart {
    /**
      find exisiting product
    **/
    const exicstingProduct = cart.products.find((f) => f.id === products.id);
    if (exicstingProduct) {
      if (exicstingProduct.quantity > 1) {
        /**
          * if found and more than 1 decrease the quantity
        **/
        exicstingProduct.quantity -= 1
      } else {
        /**
          * else if no more than one, find the product index and remove it
          * from the cart
        **/
        const exicstingProductIndex = cart.products.findIndex((f) => f.id === products.id);
        cart.products.splice(exicstingProductIndex, 1);
      }
    }
    return cart
  }


  /**
     *
     * @description check if selected product is already in cart
     * from the cart and return new cart
     * @param products: Product
     * @param cart: Cart;
     * 
     * @returns boolean
     * 
     */
  isProductAlredyInCart(products: Product, cart: Cart): boolean {
    return cart.products.findIndex((f => f.id === products.id)) !== -1
  }

  /**
     *
     * @description get total of spesific item in cart
     * @param products: Product - can be null
     * @param cart: Cart;
     * 
     * @returns number
     * 
     */
  getCartQuantity(cart: Cart, products: Product | null): number {
    if (products) {
      /**
       * if products exist check the quantity of the products
       **/
      return cart.products.find((f => f.id === products.id))?.quantity ?? 0
    }
    /**
      * if not return zero
    **/
    return 0
  }

  /**
     *
     * @description calculate total price of all item and quantity
     * in the cart
     * @param cart: Cart;
     * 
     * @returns number
     */
  totalPrice(cart: Cart): number {
    return Math.ceil(cart.products.reduce((a, b) => a + Math.ceil(b.price) * b.quantity, 0));
  }
}