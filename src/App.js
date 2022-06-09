import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/molecules/nav/Nav";
import { StyledApp } from "./components/styles/app.styled";
import ProductDetail from "./pages/productDetail/ProductDetail";
import ProductList from "./pages/productList/ProductList";
import ProductProvider from "./provider/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <StyledApp className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/:id" element={<ProductDetail />} />
        </Routes>
      </StyledApp>
    </ProductProvider>
  );
}

export default App;
