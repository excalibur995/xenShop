import React from "react";
import { CartDetail } from "../../../models/ShopModel";
import CounterButton from "../../atom/CounterButton";
import {
  CardImage,
  ImageContainer,
  PriceText,
} from "../ProductCard/ProductCardStyled";
import {
  CartCardContainer,
  Centered,
  DetailCartontainer,
} from "./CartCardStyled";

interface CartListProps {
  value: CartDetail;
}

export default function CartCard(props: CartListProps) {
  return (
    <CartCardContainer>
      <Centered>
        <ImageContainer style={{ background: "#fff", height: "80px" }}>
          <CardImage src={props.value.image} />
        </ImageContainer>
      </Centered>
      <DetailCartontainer>
        <h3>{props.value.title}</h3>
        <PriceText>{props.value.price * props.value.quantity}</PriceText>
        <CounterButton value={props.value} />
      </DetailCartontainer>
    </CartCardContainer>
  );
}
