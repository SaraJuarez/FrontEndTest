import React from "react";
import ProductItem from "../components/organisms/ProductItem";
import {
  ProductListGrid,
  ProductListContainer,
  ProductListTitle,
  StyledH2,
} from "../components/styles/productList.styled";

function ProductList(props) {
  const { list, filterFunction } = props;
  return (
    <ProductListContainer>
      <ProductListTitle>
        <StyledH2>Mobile List</StyledH2>
        <input onChange={filterFunction} placeholder="search" />
      </ProductListTitle>
      <ProductListGrid>
        {list !== undefined && list !== null
          ? list.map((element) => {
              return <ProductItem key={element.id} productInfo={element} />;
            })
          : null}
      </ProductListGrid>
    </ProductListContainer>
  );
}

export default ProductList;
