import React from "react";
import { useSelector } from "react-redux";
import { GeneralContainer } from "../components/organism/GeneralContainer/GeneralContainer";
import DetailPage from "../components/screens/DetailPages/DetailPage";
import { ProductListState } from "../shared/store/Product/types";
import { RootState } from "../shared/store/rootStore";

export default function ProductDetailPage() {
  const { productDetail } = useSelector(
    (state: RootState) => state.productReducer
  ) as ProductListState;

  return (
    <GeneralContainer isActive={true}>
      <DetailPage product={productDetail} />
    </GeneralContainer>
  );
}
