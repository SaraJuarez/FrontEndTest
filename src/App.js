import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import ProductList from "./pages/productList/ProductList";
import Nav from "./components/molecules/nav/Nav";
import { getMobileList, setMobileInfo } from "./utils/api/api";
import { StyledApp } from "./components/styles/app.styled";
import { useNavigate } from "react-router-dom";

function App() {
  const [list, setList] = useState();
  const [cartItems, setCartItems] = useState(0);
  const [detailId, setDetailId] = useState();
  const [selectedOption, setSelectedOption] = useState({
    id: "",
    color: "",
    storage: "",
  });
  /*   const [objectInfo, setObjectInfo] = useState({
    id: "",
    color: "",
    storage: "",
  }); */

  let navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("list") === undefined ||
      localStorage.getItem("list") === false ||
      localStorage.getItem("list") === null
    ) {
      getList();
    } else {
      let stringList = JSON.parse(localStorage.getItem("list"));
      setList(stringList);
    }
  }, []);

  setTimeout(function () {
    localStorage.removeItem("list");
  }, 1000 * 60 * 60);

  const getList = async () => {
    let result = await getMobileList();
    if (result !== null) {
      setList(result);
      localStorage.setItem("list", JSON.stringify(result));
    } else {
      setList(null);
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

  const handleSelect = (selected) => {
    if (selected !== null) {
      let selectedName = Object.keys(selected)[0];
      let selectedValue = Object.values(selected)[0];
      setSelectedOption((prev) => ({ ...prev, [selectedName]: selectedValue }));
    }
  };

  const getCartInfo = async (idMobile) => {
    if (selectedOption.color === "" || selectedOption.storage === "") {
      window.alert("Please, select color and storage capacity before adding ");
      return;
    } else {
      let newObject = selectedOption;
      setSelectedOption(newObject);
      /* The POST method only returns 1, so I prefer to make the sum here */
      let itemsInTheCart = await setMobileInfo(selectedOption);
      debugger;
      if (itemsInTheCart === 1) {
        setCartItems(cartItems + 1);
        navigate("/");
      } else if (itemsInTheCart === null) {
        window.alert("An error has ocurred");
      }
    }
  };

  return (
    <StyledApp className="App">
      <Nav detailId={detailId} items={cartItems} />
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
              setSelectedOption={setSelectedOption}
              getCartInfo={getCartInfo}
              getSelectOption={handleSelect}
              setDetailId={setDetailId}
            />
          }
        />
      </Routes>
    </StyledApp>
  );
}

export default App;
