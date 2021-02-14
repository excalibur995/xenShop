import React from "react";
import styled from "styled-components";

interface BottomBarProps {
  children?: React.ReactNode;
}

export default function BottomBar(props: BottomBarProps) {
  return <BottomBarComponent>{props.children}</BottomBarComponent>;
}

const BottomBarComponent = styled.div`
  background-color: ${(props) => props.theme.colors.colorDefault};
  height: 56px;
  width: 100%;
  z-index: 99;
  bottom: 0;
  margin: 0 auto;
  overflow: hidden;
  position: fixed;
  max-width: 800px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
`;
