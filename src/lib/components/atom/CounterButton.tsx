import React, { Dispatch, useCallback } from "react";
import styled from "styled-components";
import { Product } from "../../models/ShopModel";
import {
  addToCartProduct,
  removeCartProduct,
} from "../../shared/store/Cart/actions";
import { CartListState } from "../../shared/store/Cart/types";
import { RootState } from "../../shared/store/rootStore";
import { useDispatch, useSelector } from "react-redux";
import { cartService } from "../../services";
import { CounterType } from "../../models/GenericModel";

interface CounterProps {
  value: Product | null;
}
export default function CounterButton(props: CounterProps) {
  const dispatch: Dispatch<any> = useDispatch();
  const addToCart = useCallback(
    (product: Product) => dispatch(addToCartProduct(product)),
    [dispatch]
  );
  const removeProduct = useCallback(
    (product: Product) => dispatch(removeCartProduct(product)),
    [dispatch]
  );

  const { cart } = useSelector(
    (state: RootState) => state.cartReducer
  ) as CartListState;

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    type: CounterType
  ) => {
    e.stopPropagation();
    if (props.value) {
      if (type === "increment") {
        return addToCart(props.value);
      }
      return removeProduct(props.value);
    }
  };

  return (
    <Container>
      <ButtonCirlce onClick={(e) => handleClick(e, "decrement")}>
        -
      </ButtonCirlce>
      {cartService.getCartQuantity(cart, props.value)}
      <ButtonCirlce onClick={(e) => handleClick(e, "increment")}>
        +
      </ButtonCirlce>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row;
  width: 100%;
  font-size: 20px;
  margin: 5px;
`;

const ButtonCirlce = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 30px;
  height: 30px;

  background-color: ${(props) => props.theme.colors.colorAction};
  text-align: center;
  border-radius: 50%;
`;
