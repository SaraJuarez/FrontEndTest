import React from "react";
import ProductItem from "../../components/organisms/productItem/ProductItem";
import {
  ProductListGrid,
  ProductListContainer,
  ProductListTitle,
  StyledH2,
  StyledP,
} from "../../components/styles/productList.styled";
import CircularProgress from "@mui/material/CircularProgress";

function ProductList(props) {
  const { list, filterFunction, error } = props;

  return (
    <ProductListContainer>
      <ProductListTitle>
        <StyledH2>Mobile List</StyledH2>
        <input onChange={filterFunction} placeholder="search" />
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
