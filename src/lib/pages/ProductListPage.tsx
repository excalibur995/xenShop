import React, { useEffect, useState } from "react";
import { Product } from "../models/ShopModel";
import { productService } from "../services";
import { useHistory } from "react-router-dom";
import { ProductCard } from "../components/molecule/ProductCard/ProductCard";
import { ItemList } from "../components/organism/ItemList/ItemList";
import { GeneralContainer } from "../components/organism/GeneralContainer/GeneralContainer";

export default function ProductListPage() {
  const [state, setstate] = useState<Product[]>([]);
  const [loading, setloading] = useState<boolean>(true);
  const history = useHistory();

  const handleCardClick = (item: Product) =>
    history.push(`/details/${item.id}`);

  useEffect(() => {
    productService
      .getProductList()
      .then((value) => setstate(value))
      .finally(() => setloading(false));
  }, []);

  return (
    <GeneralContainer>
      <ItemList
        loading={loading}
        product={state}
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
