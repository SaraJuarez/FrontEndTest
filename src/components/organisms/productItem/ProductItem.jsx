import ImageProduct from "../../atoms/ImageProduct";
import {
  ProductItemContainer,
  ProductImageContainer,
  ProductTextContainer,
  StyledSpan,
  StyledP,
} from "../../styles/productItem.styled";
import { Link } from "react-router-dom";
function ProductItem(props) {
  const { productInfo } = props;

  return (
    <Link
      id="productItem"
      style={{ textDecoration: "none" }}
      to={`/${productInfo.id}`}
    >
      <ProductItemContainer>
        <ProductImageContainer>
          <ImageProduct image={productInfo.imgUrl} />
        </ProductImageContainer>
        <ProductTextContainer>
          <StyledP>
            <StyledSpan>Brand:</StyledSpan>
            {productInfo.brand}
          </StyledP>
          <StyledP>
            <StyledSpan>Model:</StyledSpan>
            {productInfo.model}
          </StyledP>
          <StyledP>
            <StyledSpan>Price:</StyledSpan>
            {productInfo.price}$
          </StyledP>
        </ProductTextContainer>
      </ProductItemContainer>
    </Link>
  );
}

export default ProductItem;
