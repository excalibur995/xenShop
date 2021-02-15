import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Dispatch } from "redux";
import { GeneralContainer } from "../components/organism/GeneralContainer/GeneralContainer";
import DetailPage from "../components/screens/DetailPages/DetailPage";
import DetailPageLoading from "../components/screens/DetailPages/DetailPageLoading";
import { fetchSingleProduct } from "../shared/store/Product/actions";
import { ProductListState } from "../shared/store/Product/types";
import { RootState } from "../shared/store/rootStore";

export default function ProductDetailPage() {
  const { productDetail, isLoad } = useSelector(
    (state: RootState) => state.productReducer
  ) as ProductListState;

  const dispatch: Dispatch<any> = useDispatch();
  const getSingleProduct = useCallback(
    (id: string) => dispatch(fetchSingleProduct(id)),
    [dispatch]
  );
  const params: { id: string } = useParams();
  useEffect(() => {
    if (!productDetail) {
      getSingleProduct(params.id);
    }
  }, [getSingleProduct, params.id, productDetail]);

  return (
    <GeneralContainer isActive={true}>
      {isLoad ? <DetailPageLoading /> : <DetailPage product={productDetail} />}
    </GeneralContainer>
  );
}
