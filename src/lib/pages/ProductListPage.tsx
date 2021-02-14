import React, { useEffect, useCallback, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../models/ShopModel";
import { useHistory } from "react-router-dom";
import { ProductCard } from "../components/molecule/ProductCard/ProductCard";
import { ItemList } from "../components/organism/ItemList/ItemList";
import { GeneralContainer } from "../components/organism/GeneralContainer/GeneralContainer";
import {
  fetchProducts,
  populateProductDetail,
} from "../shared/store/Product/actions";
import { ProductListState } from "../shared/store/Product/types";
import { RootState } from "../shared/store/rootStore";

export default function ProductListPage() {
  // Selector
  const { isLoad, products } = useSelector(
    (state: RootState) => state.productReducer
  ) as ProductListState;

  const dispatch: Dispatch<any> = useDispatch();
  const history = useHistory();
  const getAllProducts = useCallback(() => dispatch(fetchProducts()), [
    dispatch,
  ]);
  const getProduct = useCallback(
    (product: Product) => dispatch(populateProductDetail(product)),
    [dispatch]
  );

  const handleCardClick = (item: Product) => {
    history.push(`/details/${item.id}`);
    getProduct(item);
  };

  useEffect(() => {
    if (products.length < 1) {
      getAllProducts();
    }
  }, [products, getAllProducts]);

  return (
    <GeneralContainer>
      <ItemList
        loading={isLoad}
        product={products}
        format="grid"
        renderItem={(item, index) => (
          <ProductCard
            handleClick={() => handleCardClick(item)}
            key={index.toString()}
            product={item}
          />
        )}
      />
    </GeneralContainer>
  );
}
