import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./APP.css";
import { MantineProvider } from "@mantine/core";
import CartProvider from "./context/CartContext";
ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <MantineProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </MantineProvider>
);
