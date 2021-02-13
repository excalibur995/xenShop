import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import ProductDetailPage from "../pages/ProductDetailPage";
export default function XenRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductListPage} />
        <Route path="/details/:id" component={ProductDetailPage} />
      </Switch>
    </BrowserRouter>
  );
}
