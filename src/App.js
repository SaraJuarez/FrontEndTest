import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/molecules/nav/Nav";
import { StyledApp } from "./components/styles/app.styled";
/* import ProductContext from "./context/ProductContext";
 */ import ProductDetail from "./pages/productDetail/ProductDetail";
import ProductList from "./pages/productList/ProductList";
import ProductProvider from "./provider/ProductProvider";
function App() {
  const [cartItems, setCartItems] = useState(0);
  const [detailId, setDetailId] = useState();

  return (
    <ProductProvider>
      <StyledApp className="App">
        <Nav detailId={detailId} items={cartItems} />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route
            path="/:id"
            element={
              <ProductDetail
                setDetailId={setDetailId}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
        </Routes>
      </StyledApp>
    </ProductProvider>
  );
}

export default App;
