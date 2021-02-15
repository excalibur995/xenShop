import React, { Dispatch, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../models/ShopModel";
import { cartService } from "../../../services";
import { addToCartProduct } from "../../../shared/store/Cart/actions";
import { CartListState } from "../../../shared/store/Cart/types";
import { RootState } from "../../../shared/store/rootStore";
import { Card } from "../../atom/Card";
import CounterButton from "../../atom/CounterButton";
import XenButton from "../../atom/XenButton";
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
  const { cart } = useSelector(
    (state: RootState) => state.cartReducer
  ) as CartListState;

  const dispatch: Dispatch<any> = useDispatch();

  const addToCart = useCallback(
    (product: Product) => dispatch(addToCartProduct(product)),
    [dispatch]
  );
  const handleDifferent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    addToCart(props.product);
  };

  const isExist = () => {
    if (props.product) {
      return cartService.isProductAlredyInCart(props.product, cart);
    }
    return false;
  };
  return (
    <ItemContainer onClick={props.handleClick}>
      <Card elevation="float" border="rounded">
        <ImageContainer>
          <CardImage src={props.product.image} alt={props.product.title} />
        </ImageContainer>
      </Card>
      <DetailContainer>
        <ProductTitle>{props.product.title}</ProductTitle>
        <PriceText>{Math.ceil(props.product.price)}</PriceText>
        {isExist() ? (
          <CounterButton value={props.product} />
        ) : (
          <XenButton handleClick={handleDifferent}>Add to Cart</XenButton>
        )}
      </DetailContainer>
    </ItemContainer>
  );
};
