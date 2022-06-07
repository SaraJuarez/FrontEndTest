import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import React, { useEffect, useState } from "react";

import ProductItem from "../../components/organisms/productItem/ProductItem";
import {
  ProductListGrid,
  ProductListContainer,
  ProductListTitle,
  StyledH2,
  StyledP,
} from "../../components/styles/productList.styled";
import ProductContext from "../../context/ProductContext";
import { isDataExpired } from "../../utils/cache";

function ProductList() {
  const [list, setList] = useState();
  const [copyList, setCopyList] = useState();
  const [error, setError] = useState();

  const listProvider = React.useContext(ProductContext);

  useEffect(() => {
    listProvider.getList();
  }, []);

  useEffect(() => {
    if (listProvider.list !== undefined) {
      setList(listProvider.list);
      setCopyList(listProvider.list);
    } else if (listProvider.error !== undefined) {
      setError(listProvider.error);
    }
  }, [listProvider.list, listProvider.error]);

  console.log("renderizando productlist");
  const filterList = (e) => {
    let valueInput = e.target.value;
    if (valueInput.length > 0) {
      let result = copyList.filter((item) => {
        return (
          item.brand.toLowerCase().includes(valueInput) ||
          item.model.toLowerCase().includes(valueInput)
        );
      });
      setList(result);
    } else {
      setList(listProvider.list);
    }
  };

  return (
    <ProductListContainer>
      <ProductListTitle>
        <StyledH2>Mobile List</StyledH2>
        <input onChange={filterList} placeholder="search" />
      </ProductListTitle>
      <ProductListGrid>
        {list !== [] && list !== undefined ? (
          list.map((element) => {
            return <ProductItem key={element.id} productInfo={element} />;
          })
        ) : error ? (
          <StyledP>{error}</StyledP>
        ) : (
          <CircularProgress />
        )}
      </ProductListGrid>
    </ProductListContainer>
  );
}

export default ProductList;
