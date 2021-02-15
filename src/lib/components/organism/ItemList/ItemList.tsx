import React from "react";
import { ListFormat, LoadingStyle } from "../../../models/GenericModel";
import ThemeConsume from "../../atom/Theme";
import styled from "styled-components";
import { ListProductConfig } from "./ItemListTypes";
import ProductCardLoading from "../../molecule/ProductCard/ProductCardLoading";
import EmptyPages from "../../screens/EmptyPages";

/**
 *
 * @description render list using either grid or column style
 *
 */
const container = (
  format: ListFormat = "list",
  children: React.ReactNode
): JSX.Element => {
  if (format === "list") {
    return <ListContainer>{children}</ListContainer>;
  }
  return <GridContainer>{children}</GridContainer>;
};

/**
 *
 * @description render loading based on LoadingStyle
 *
 */
const loadingStyle = (style: LoadingStyle = "product", key: string) => {
  switch (style) {
    default:
      return <ProductCardLoading key={key} />;
  }
};

/**
 *
 * @description render itemList
 * @param ListProductConfig see ItemListTypes.ts for more info
 *
 *
 */
export const ItemList = <T extends any>(products: ListProductConfig<T>) => {
  if (products.loading) {
    return (
      <>
        {container(
          products.format,
          [1, 2, 3, 4, 5, 6, 7, 8].map((value) =>
            loadingStyle(products.loadingStyle, value.toString())
          )
        )}
      </>
    );
  } else if (!products.loading && products.product.length) {
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
  } else {
    return <EmptyPages message="Empty Product" />;
  }
};

const ListContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: 5px;
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
