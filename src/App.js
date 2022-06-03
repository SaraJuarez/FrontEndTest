import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import ProductList from "./pages/productList/ProductList";
import Nav from "./components/molecules/nav/Nav";
import { StyledApp } from "./components/styles/app.styled";

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [detailId, setDetailId] = useState();

  setTimeout(function () {
    localStorage.removeItem("list");
  }, 1000 * 60 * 60);

  return (
    <StyledApp className="App">
      <Nav detailId={detailId} items={cartItems} />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:id" element={<ProductDetail />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
