import React from "react";
import styled from "styled-components";
import { Border, Elevation } from "../../models/GenericModel";
import {
  handleBorderRadius,
  handleElevation,
} from "../../shared/helpers/styledTools";

interface CardProps<ReturnValue = any> {
  /**
   *
   * @description generate card elevation
   * @enum "thin" | "interactive" | "float" | "thicker";
   * @interface Elevation
   * @example elevation: "thin"
   *
   */
  elevation?: Elevation;
  /**
   *
   * @description generate card border
   * @enum "flat" | "rounded"
   * @interface Border
   * @example border: "flat"
   *
   */
  border?: Border;
  /**
   *
   * @description handle press when user click the card
   * @interface <ReturnValue>
   * @example handlePress={handleParentFunction}
   *
   */
  handlePress?: () => ReturnValue;
  /**
   *
   * @description children component to be rendered
   *
   */
  children?: React.ReactNode;
  /**
   *
   * @description react inline style properties
   * @example inlineStyle={display:"flex", flexFlow:"row"}
   *
   */
  inlineStyle?: React.CSSProperties;
}

type ButtonStyled = Pick<CardProps, "border" | "elevation">;

const GenericCard = styled.div<ButtonStyled>`
  transition: all 0.2s;
  outline: none;
  background: #fff;
  margin: 10px;
  border-radius: ${(props) => handleBorderRadius(props.border)};
  box-shadow: ${(props) => handleElevation(props.elevation)};
`;

export const Card = (cardProps: CardProps) => {
  return (
    <GenericCard
      style={cardProps.inlineStyle}
      onClick={cardProps.handlePress}
      border={cardProps.border}
      elevation={cardProps.elevation}
    >
      {cardProps.children}
    </GenericCard>
  );
};
