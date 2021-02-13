import React from "react";
import styled from "styled-components";
import { Product } from "../../models/ShopModel";
import { Card } from "../atom/Card";

interface ItemCardProps<handleClickTypeReturn> {
  product: Product;
  handleClick?: (
    e?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => handleClickTypeReturn;
}

const ItemContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 200px;
`;

const ImageContainer = styled.div`
  padding: 20px;
  height: 200px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-fit: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const DetailContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: start;
  padding: 0 10px;
  margin: 7px 0 0;
`;

const ProductTitle = styled.h3`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  margin: 0;
  font-size: calc(10px + 1vmin);
`;

const PriceText = styled.p`
  margin: 10px 0;
  font-weight: 600;
  text-align: left;
  &:before {
    content: "$";
  }
`;

export const ProductCard = <T extends unknown>(props: ItemCardProps<T>) => {
  return (
    <ItemContainer onClick={props.handleClick}>
      <Card elevation="float" border="rounded">
        <ImageContainer>
          <CardImage src={props.product.image} alt={props.product.title} />
        </ImageContainer>
      </Card>
      <DetailContainer>
        <ProductTitle>{props.product.title}</ProductTitle>
        <PriceText>{props.product.price}</PriceText>
      </DetailContainer>
    </ItemContainer>
  );
};
