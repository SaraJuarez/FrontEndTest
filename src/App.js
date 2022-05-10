import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Nav from "./components/molecules/nav/Nav";
import { getMobileList } from "./utils/api/api";

function App() {
  const [list, setList] = useState();

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let result = await getMobileList();
    if (result !== null) {
      setList(result);
    } else {
      setList(undefined);
    }
  };

  const filterList = (e) => {
    let valueInput = e.target.value;
    if (valueInput.length > 0) {
      let result = list.filter((item) => {
        return (
          item.brand.toLowerCase().includes(valueInput) ||
          item.model.toLowerCase().includes(valueInput) ||
          item.price.includes(valueInput)
        );
      });
      setList(result);
    } else {
      getList();
    }
  };

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<ProductList filterFunction={filterList} list={list} />}
        />
        <Route path="/:id" list={list} element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
