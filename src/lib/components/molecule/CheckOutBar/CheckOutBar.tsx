import React from "react";
import { Cart } from "../../../models/ShopModel";
import { cartService } from "../../../services";
import BottomBar from "../../atom/BottomBar";
import XenButton from "../../atom/XenButton";
import { Centered } from "../CartCard/CartCardStyled";
import { PriceText } from "../ProductCard/ProductCardStyled";
import { CheckoutBarContainer } from "./CheckOutBarStyled";

interface CheckoutBarProps {
  cart: Cart;
}

export default function CheckOutBar(props: CheckoutBarProps) {
  return (
    <BottomBar>
      <CheckoutBarContainer>
        <Centered>
          <PriceText>{cartService.totalPrice(props.cart)}</PriceText>
        </Centered>
        <Centered>
          <XenButton style={{ background: "red" }}>Checkout</XenButton>
        </Centered>
      </CheckoutBarContainer>
    </BottomBar>
  );
}
