import React from "react";
import { Cart, CheckoutItem } from "../../../models/ShopModel";
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
  const handlePay = async () => {
    const payload: CheckoutItem = {
      amount: cartService.totalPrice(props.cart),
      description: "",
      payerEmail: "",
    };

    if (props.cart.products.length) {
      console.log(payload);
    }
  };

  return (
    <BottomBar>
      <CheckoutBarContainer>
        <Centered>
          <PriceText>{cartService.totalPrice(props.cart)}</PriceText>
        </Centered>
        <Centered>
          <XenButton handleClick={handlePay}>Checkout</XenButton>
        </Centered>
      </CheckoutBarContainer>
    </BottomBar>
  );
}
