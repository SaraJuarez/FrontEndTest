import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/molecules/nav/Nav";
import { StyledApp } from "./components/styles/app.styled";
import ProductContext from "./context/ProductContext";
import ProductDetail from "./pages/productDetail/ProductDetail";
import ProductList from "./pages/productList/ProductList";

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [detailId, setDetailId] = useState();

  let productData = {
    list: [],
    mobileDetails: [],
    selectedPhones: [],
    creationDate: "",
  };

  return (
    <ProductContext.Provider value={productData}>
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
    </ProductContext.Provider>
  );
}

export default App;
