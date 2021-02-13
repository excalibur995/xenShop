export interface Product {
  id: number;
  title: string;
  price: number
  category: string;
  description: string,
  image: string;
}


export interface Cart {
  id: number;
  date: Date;
  products: CartDetail[]
}

export interface CartDetail {
  productId: number;
  quantity: number;
}
