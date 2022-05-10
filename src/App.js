import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Nav from "./components/molecules/nav/Nav";
import { getMobileList } from "./utils/api/api";
import Modal from "./components/organisms/Modal";
function App() {
  const [list, setList] = useState();
  const [showModal, setShowModal] = useState(false);

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

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <Nav />
      {showModal === true && (
        <Modal openFunction={openModal} closeFunction={closeModal} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              openModal={openModal}
              filterFunction={filterList}
              list={list}
            />
          }
        />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
