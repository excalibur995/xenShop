import React from "react";
import styled from "styled-components";
import ThemeConsume from "../../atom/Theme";
import Header from "../../molecule/Header/Header";
import { GeneralTemplate } from "./GeneralContainerTypes";

export const GeneralContainer = (props: GeneralTemplate) => {
  return (
    <ThemeConsume>
      <Header isActive={props.isActive} />
      <Container>
        <ContentContainer>
          <>{props.children}</>
        </ContentContainer>
      </Container>
    </ThemeConsume>
  );
};

const Container = styled.div`
  position: relative;
  padding: 56px 0 0;
  width: 100%;
  min-height: 100vh;
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
`;
