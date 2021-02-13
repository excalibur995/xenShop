import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 200px;
`;

export const ImageContainer = styled.div`
  padding: 20px;
  height: 200px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-fit: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const DetailContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: start;
  padding: 0 10px;
  margin: 7px 0 0;
`;

export const DetailSkeletonContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 0 10px;
  margin: 7px 0 0;
  div {
    margin: 5px 0;
  }
`;

export const ProductTitle = styled.h3`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
  margin: 0;
  font-size: calc(10px + 1vmin);
`;

export const PriceText = styled.p`
  margin: 10px 0;
  font-weight: 600;
  text-align: left;
  &:before {
    content: "$";
  }
`;
