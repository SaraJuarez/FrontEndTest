import React from "react";
import ProductItem from "../components/organisms/ProductItem";
import {
  ProductListGrid,
  ProductListContainer,
  ProductListTitle,
} from "../components/styles/productList.styled";
import { Link } from "react-router-dom";

function ProductList(props) {
  const { list, filterFunction } = props;

  return (
    <Link style={{ textDecoration: "none" }} to="/detail">
      <ProductListContainer>
        <ProductListTitle>
          <h2>Mobile List</h2>
          <input onChange={filterFunction} placeholder="search" />
        </ProductListTitle>
        <ProductListGrid>
          {list !== undefined
            ? list.map((element) => {
                return <ProductItem key={element.id} productInfo={element} />;
              })
            : null}
        </ProductListGrid>
      </ProductListContainer>
    </Link>
  );
}

export default ProductList;
