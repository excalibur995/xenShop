import React from "react";
import "./App.css";
import { Provider } from "./lib/shared/helpers/userContext";
import XenRouter from "./lib/router/router";

function App() {
  return (
    <Provider value={null}>
      <XenRouter />
    </Provider>
  );
}
export default App;
