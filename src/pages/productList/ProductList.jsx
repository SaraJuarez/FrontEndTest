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
import useProduct from "../../hooks/useProduct";
import { getMobileList } from "../../utils/api/api";
import { isDataExpired } from "../../utils/cache";

function ProductList() {
  const [list, setList] = useState();
  const [copyList, setCopyList] = useState();
  const [error, setError] = useState();

  const info = useProduct();
  console.log(info);

  useEffect(() => {
    if (
      localStorage.getItem("list") === undefined ||
      localStorage.getItem("list") === false ||
      localStorage.getItem("list") === null
    ) {
      getList();
    } else {
      if (isDataExpired()) {
        localStorage.removeItem("list");
        localStorage.removeItem("mobileDetails");
        localStorage.removeItem("selectedPhones");
        localStorage.removeItem("creationDate");
        getList();
      } else {
        let stringList = JSON.parse(localStorage.getItem("list"));
        setCopyList(stringList);
        setList(stringList);
      }
    }
  }, []);

  const getList = async () => {
    let result = await getMobileList();
    if (result.isAxiosError === true) {
      setError(result.message);
      setList(null);
    } else {
      setList(result);
      setCopyList(result);
      let now = new moment();
      localStorage.setItem("list", JSON.stringify(result));
      localStorage.setItem("creationDate", JSON.stringify(now));
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
      getList();
    }
  };

  return (
    <ProductListContainer>
      <ProductListTitle>
        <StyledH2>Mobile List</StyledH2>
        <input onChange={filterList} placeholder="search" />
      </ProductListTitle>
      <ProductListGrid>
        {list !== undefined && list !== null ? (
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
