import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../shared/store/rootStore";
import Cart from "../../assets/icons/cart.png";
import styled from "styled-components";
import { CartListState } from "../../shared/store/Cart/types";
import { useHistory } from "react-router-dom";

export const LogoHeader = styled.img`
  max-width: 36px;
  max-height: 36x;
  object-fit: content;
`;

export const NotificationContainer = styled.div`
  position: relative;
`;

export const Badge = styled.div`
  position: absolute;
  top: 13px;
  right: -5px;
  min-width: 10px;
  min-height: 10px;
  line-height: 10px;
  padding: 5px;
  color: ${(props) => props.theme.colors.colorTextSecondary};
  background-color: ${(props) => props.theme.colors.colorDestructive};
  font-size: 10px;
  border-radius: 20px;
  border: solid 1px ${(props) => props.theme.colors.colorDestructive};
`;

export default function NotificationBadge() {
  const { cart } = useSelector(
    (state: RootState) => state.cartReducer
  ) as CartListState;

  const history = useHistory();
  const handleClick = () => {
    history.push("/cart");
  };
  return (
    <NotificationContainer onClick={handleClick}>
      <LogoHeader src={Cart} alt="app Logo" />
      {cart.products.length > 0 && <Badge>{cart.products.length}</Badge>}
    </NotificationContainer>
  );
}
