import React, { useEffect, useState } from "react";
import "./App.css";
import { Provider } from "./lib/shared/helpers/userContext";
import { GeneralContainer } from "./lib/components/organism/GeneralContainer/GeneralContainer";
import { ItemList } from "./lib/components/organism/ItemList/ItemList";
import { ProductCard } from "./lib/components/molecule/ProductCard";
import { productService } from "./lib/services";
import { Product } from "./lib/models/ShopModel";

function App() {
  const [state, setstate] = useState<Product[]>([]);

  useEffect(() => {
    productService.getProductList().then((value) => setstate(value));
  }, []);

  return (
    <Provider value={null}>
      <GeneralContainer>
        <>
          <ItemList
            product={state}
            format="grid"
            renderItem={(item, index) => (
              <ProductCard key={index.toString()} product={item} />
            )}
          />
        </>
      </GeneralContainer>
    </Provider>
  );
}
export default App;
