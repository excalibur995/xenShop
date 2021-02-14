import React from "react";
import styled, { CSSProperties } from "styled-components";
import { GeneralHandleClick } from "../../models/GenericModel";

interface ButtonProps<handleClickTypeReturn> {
  children?: React.ReactNode;
  background?: string;
  handleClick?: GeneralHandleClick<handleClickTypeReturn>;
  style?: CSSProperties;
}

export default function XenButton<handleClickTypeReturn>(
  props: ButtonProps<handleClickTypeReturn>
) {
  return (
    <PayButton style={props.style} onClick={props.handleClick}>
      {props?.children ?? "Button"}
    </PayButton>
  );
}

const PayButton = styled.div`
  box-sizing: border-box;
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  border-radius: 30px;
`;
