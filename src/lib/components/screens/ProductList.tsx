import React from "react";
import styled from "styled-components";
import { Product } from "../../models/ShopModel";

interface ProductListComponent {
  loading: boolean;
  products: Product[];
}

export default function ProductList(props: ProductListComponent) {
  switch (true) {
    case props.loading:
      return <div>...loading</div>;
    case !props.products.length:
      return <div>product empty</div>;
    default:
      return listProduct(props.products);
  }
}

const listProduct = (products: Product[]) => {
  return (
    <ProductListContainer>
      {products.map((value) => (
        <ProudctItemContainer key={value.id.toString()}>
          {/* <ProductCard product={value} /> */}
        </ProudctItemContainer>
      ))}
    </ProductListContainer>
  );
};

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 760px) {
    grid-template-columns: auto auto;
  }
`;

const ProudctItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
