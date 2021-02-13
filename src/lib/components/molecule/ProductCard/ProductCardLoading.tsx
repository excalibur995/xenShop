import React from "react";
import { Card } from "../../atom/Card";
import SkeletonLoader from "../../atom/Skeleton";
import {
  ItemContainer,
  ImageContainer,
  DetailSkeletonContainer,
} from "./ProductCardStyled";

export default function ProductCardLoading() {
  return (
    <ItemContainer>
      <Card
        inlineStyle={{ minWidth: "100px" }}
        elevation="float"
        border="rounded"
      >
        <ImageContainer>
          <SkeletonLoader width="100%" height="100%" />
        </ImageContainer>
      </Card>
      <DetailSkeletonContainer>
        <SkeletonLoader width="100%" height="20px" />
        <SkeletonLoader width="100%" height="20px" />
      </DetailSkeletonContainer>
    </ItemContainer>
  );
}
