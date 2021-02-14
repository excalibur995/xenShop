import { Cart, Product } from "../models/ShopModel";

export default class CartService {
  addToCart(products: Product, cart: Cart): Cart {
    const exicstingProduct = cart.products.find((f) => f.id === products.id);
    if (exicstingProduct) {
      exicstingProduct.quantity += 1
    } else {
      cart.products.push(({
        quantity: 1,
        ...products
      }))
    }
    return cart;
  }

  removeFromCart(products: Product, cart: Cart): Cart {
    const exicstingProduct = cart.products.find((f) => f.id === products.id);
    if (exicstingProduct) {
      if (exicstingProduct.quantity > 1) {
        exicstingProduct.quantity -= 1
      } else {
        const exicstingProductIndex = cart.products.findIndex((f) => f.id === products.id);
        cart.products.splice(exicstingProductIndex, 1);
      }
    }
    return cart
  }

  isProductAlredyInCart(products: Product, cart: Cart): boolean {
    return cart.products.findIndex((f => f.id === products.id)) !== -1
  }

  getCartQuantity(cart: Cart, products: Product | null): number {
    if (products) {
      return cart.products.find((f => f.id === products.id))?.quantity ?? 0
    }
    return 0
  }

  totalPrice(cart: Cart): number {
    return Math.floor(cart.products.reduce((a, b) => a + b.price * b.quantity, 0));
  }
}