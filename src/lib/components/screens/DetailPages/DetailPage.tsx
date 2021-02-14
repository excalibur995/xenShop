import React, { Dispatch, useCallback } from "react";
import { Product } from "../../../models/ShopModel";
import { useDispatch, useSelector } from "react-redux";
import XenButton from "../../atom/XenButton";
import {
  CardImage,
  ImageContainer,
  PriceText,
} from "../../molecule/ProductCard/ProductCardStyled";
import { DetailContainers, DetailDescContainer } from "./DetailStyled";
import { addToCartProduct } from "../../../shared/store/Cart/actions";
import { CartListState } from "../../../shared/store/Cart/types";
import { RootState } from "../../../shared/store/rootStore";
import { cartService } from "../../../services";
import CounterButton from "../../atom/CounterButton";

interface DetaiPageProps {
  product: Product | null;
}

export default function DetailPage(props: DetaiPageProps) {
  const dispatch: Dispatch<any> = useDispatch();

  const addToCart = useCallback(
    (product: Product) => dispatch(addToCartProduct(product)),
    [dispatch]
  );

  const { cart } = useSelector(
    (state: RootState) => state.cartReducer
  ) as CartListState;

  const handleDifferent = () => {
    if (props.product) {
      addToCart(props.product);
    }
  };

  const isExist = () => {
    if (props.product) {
      return cartService.isProductAlredyInCart(props.product, cart);
    }
    return false;
  };
  return (
    <DetailContainers>
      <ImageContainer style={{ background: "#fff" }}>
        <CardImage src={props.product?.image} />
      </ImageContainer>
      <DetailDescContainer>
        <h1>{props.product?.title}</h1>
        <PriceText>{props.product?.price}</PriceText>
        <p>{props.product?.description}</p>
        {isExist() ? (
          <CounterButton value={props.product} />
        ) : (
          <XenButton handleClick={handleDifferent}>Add to Cart</XenButton>
        )}
      </DetailDescContainer>
    </DetailContainers>
  );
}
