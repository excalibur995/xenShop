import React from "react";
import { HeaderContainer, HeaderContent } from "./HeaderStyled";
import { HeaderTypes } from "./HeaderTypes";
import Logo from "../../../assets/icons/logo.png";
import BackButton from "../../atom/BackButton";
import NotificationBadge, { LogoHeader } from "../../atom/NotificationBadge";

const leftSection = (isActive: boolean = false) => {
  if (isActive) {
    return <BackButton />;
  }
  return <LogoHeader src={Logo} alt="app Logo" />;
};

export default function Header(props: HeaderTypes) {
  return (
    <HeaderContainer>
      <HeaderContent>
        {leftSection(props.isActive)}
        {!props.hideCart && <NotificationBadge />}
      </HeaderContent>
    </HeaderContainer>
  );
}
