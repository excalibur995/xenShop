import React from "react";
import {
  Badge,
  HeaderContainer,
  HeaderContent,
  LogoHeader,
  NotificationContainer,
} from "./HeaderStyled";
import { HeaderTypes } from "./HeaderTypes";
import Logo from "../../../assets/icons/logo.png";
import Cart from "../../../assets/icons/cart.png";
import BackButton from "../../atom/BackButton";

const leftSection = (isActive: boolean = false) => {
  if (isActive) {
    return <BackButton />;
  }
  return <LogoHeader src={Logo} alt="app Logo" />;
};

const rightSection = (isActive: boolean = false) => {
  if (isActive) {
    return <></>;
  }
  return (
    <NotificationContainer>
      <LogoHeader src={Cart} alt="app Logo" />
      <Badge>3</Badge>
    </NotificationContainer>
  );
};

export default function Header(props: HeaderTypes) {
  return (
    <HeaderContainer>
      <HeaderContent>
        {leftSection(props.isActive)}
        {rightSection(props.isActive)}
      </HeaderContent>
    </HeaderContainer>
  );
}
