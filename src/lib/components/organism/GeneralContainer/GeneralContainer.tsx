import React from "react";
import styled from "styled-components";
import ThemeConsume from "../../atom/Theme";
import Header from "../../molecule/Header/Header";
import { GeneralTemplate } from "./GeneralContainerTypes";

export const GeneralContainer = (props: GeneralTemplate) => {
  return (
    <ThemeConsume>
      <Header hideCart={props.hideCart} isActive={props.isActive} />
      <Container haveBottomBar={props.haveBottomBar}>
        <ContentContainer>
          <>{props.children}</>
        </ContentContainer>
      </Container>
    </ThemeConsume>
  );
};
const Container = styled.div<GeneralTemplate>`
  position: relative;
  padding: 49px 0px ${(props) => (props.haveBottomBar ? "66px" : "10px")};
  width: 100%;
  min-height: ${(props) =>
    props.haveBottomBar ? "calc(100vh - 56px - 52px)" : "calc(100vh - 56px)"};
  left: 0;
  transition: left 0.5s;
  background: ${(props) => props.theme.colors.colorPrimary};
`;

const ContentContainer = styled.section`
  overflow: hidden;
  margin: 0 auto;
  max-width: 800px;
  min-height: 100%;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
`;
