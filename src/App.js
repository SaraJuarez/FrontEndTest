import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Nav from "./components/molecules/nav/Nav";
import { getMobileList, setMobileInfo } from "./utils/api/api";

function App() {
  const [list, setList] = useState();
  const [cartItems, setCartItems] = useState(0);
  const [objectInfo, setObjectInfo] = useState({
    id: "",
    color: "",
    storage: "",
  });

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let result = await getMobileList();
    if (result !== null) {
      setList(result);
      localStorage.setItem("list", JSON.stringify(result));
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
          item.model.toLowerCase().includes(valueInput)
        );
      });
      setList(result);
    } else {
      getList();
    }
  };

  function getSelectDefault(name, value) {
    console.log(name, value);
  }

  function getSelectOption(e) {
    if (e.target.value === "") {
      window.alert(`Please, select a valid ${e.target.name} value`);
      return;
    } else {
      let value = e.target.value;
      let name = e.target.name;
      setObjectInfo((prev) => ({ ...prev, [name]: value }));
    }
  }

  const getCartInfo = async (idMobile) => {
    let newObject = objectInfo;
    newObject.id = idMobile;
    setObjectInfo(newObject);
    let itemsInTheCart = await setMobileInfo(objectInfo);
    setCartItems(itemsInTheCart);
  };

  return (
    <div className="App">
      <Nav items={cartItems} />
      <Routes>
        <Route
          path="/"
          element={<ProductList filterFunction={filterList} list={list} />}
        />
        <Route
          path="/:id"
          list={list}
          element={
            <ProductDetail
              getCartInfo={getCartInfo}
              getSelectOption={getSelectOption}
              getSelectDefault={getSelectDefault}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
