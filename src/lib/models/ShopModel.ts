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
  products: CartDetail[]
}

export interface CartDetail extends Product {
  quantity: number;
}
