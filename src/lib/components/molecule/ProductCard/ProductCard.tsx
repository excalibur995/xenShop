import React from "react";
import { Card } from "../../atom/Card";
import {
  ItemContainer,
  ImageContainer,
  CardImage,
  DetailContainer,
  ProductTitle,
  PriceText,
} from "./ProductCardStyled";
import { ItemCardProps } from "./ProductCardTypes";

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
