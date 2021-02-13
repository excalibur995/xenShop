import React from "react";
import { ListFormat } from "../../../models/GenericModel";
import ThemeConsume from "../../atom/Theme";
import styled from "styled-components";
import { ListProductConfig } from "./ItemListTypes";

const container = (
  format: ListFormat = "list",
  children: React.ReactNode
): JSX.Element => {
  if (format === "list") {
    return <ListContainer>{children}</ListContainer>;
  }
  return <GridContainer>{children}</GridContainer>;
};

export const ItemList = <T extends any>(products: ListProductConfig<T>) => {
  return (
    <ThemeConsume>
      <>
        {container(
          products.format,
          products.product.map((value, index) =>
            products.renderItem(value, index)
          )
        )}
      </>
    </ThemeConsume>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  @media (min-width: ${(props) => props.theme.breakpoints.miniTablet}) {
    div {
      margin: auto;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: auto auto auto auto;
    grid-gap: 15px;
  }
`;
