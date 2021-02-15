import React from "react";
import SkeletonLoader from "../../atom/Skeleton";
import { ImageContainer } from "../../molecule/ProductCard/ProductCardStyled";
import { DetailContainers, DetailDescContainer } from "./DetailStyled";

export default function DetailPageLoading() {
  return (
    <DetailContainers>
      <ImageContainer style={{ background: "#fff" }}>
        <SkeletonLoader width="100%" height="100%" />
      </ImageContainer>
      <DetailDescContainer>
        {[1, 2, 3, 4].map((_, index) => (
          <SkeletonLoader
            key={index}
            width="100%"
            height="50px"
            style={{ margin: "20px 0px" }}
          />
        ))}
      </DetailDescContainer>
    </DetailContainers>
  );
}
