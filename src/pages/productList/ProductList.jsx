import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import React, { useEffect, useState, useContext } from "react";

import ProductItem from "../../components/organisms/productItem/ProductItem";
import {
  ProductListGrid,
  ProductListContainer,
  ProductListTitle,
  StyledH2,
  StyledP,
} from "../../components/styles/productList.styled";
import ProductContext from "../../context/ProductContext";
import { dispatchTypes } from "../../reducer/ProductReducer";
import { getMobileList } from "../../utils/api/api";
import { isDataExpired } from "../../utils/cache";

function ProductList() {
  const [list, setList] = useState();
  const [copyList, setCopyList] = useState();
  const [error, setError] = useState();

  const listProvider = useContext(ProductContext);

  useEffect(() => {
    if (listProvider.list === undefined) {
      getList();
    } else if (isDataExpired(listProvider)) {
      listProvider.dispatch({ type: dispatchTypes.RESET_INITIALSTATE });
      setList(undefined);
      getList();
    } else {
      setList(listProvider.list);
      setCopyList(listProvider.list);
    }
  }, []);

  const getList = async () => {
    let result = await getMobileList();
    if (result.isAxiosError === true) {
      listProvider.dispatch({
        type: dispatchTypes.SET_ERROR,
        payload: result.message,
      });
      setError(result.message);
    } else {
      let now = new moment();
      listProvider.dispatch({
        type: dispatchTypes.SET_CREATIONDATE,
        payload: now,
      });
      listProvider.dispatch({ type: dispatchTypes.SET_LIST, payload: result });
      setList(result);
      setCopyList(result);
    }
  };

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
