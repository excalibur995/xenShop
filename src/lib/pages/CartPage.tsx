import React from "react";
import { CartListState } from "../shared/store/Cart/types";
import { RootState } from "../shared/store/rootStore";
import { useSelector } from "react-redux";
import { GeneralContainer } from "../components/organism/GeneralContainer/GeneralContainer";
import { ItemList } from "../components/organism/ItemList/ItemList";
import CartCard from "../components/molecule/CartCard/CartCard";
import CheckOutBar from "../components/molecule/CheckOutBar/CheckOutBar";

export default function CartPage() {
  const { cart } = useSelector(
    (state: RootState) => state.cartReducer
  ) as CartListState;

  return (
    <GeneralContainer hideCart={true} isActive={true} haveBottomBar={true}>
      <ItemList
        product={cart.products}
        format="list"
        renderItem={(item, index) => (
          <CartCard key={index.toString()} value={item} />
        )}
      />
      <CheckOutBar cart={cart} />
    </GeneralContainer>
  );
}
