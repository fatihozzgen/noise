import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./style/register.css";
import "./style/favorite.css";
import "./style/card.css";
import "./style/basket.css";
import "./style/detail.css";
import "./style/changePass.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
