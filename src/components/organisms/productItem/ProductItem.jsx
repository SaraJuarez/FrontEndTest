import ImageProduct from "../../atoms/ImageProduct";
import {
  ProductItemContainer,
  ProductImageContainer,
  ProductTextContainer,
  StyledSpan,
  StyledP,
} from "../../styles/productItem.styled";
import { StyledLink } from "../../styles/nav.styled";
function ProductItem(props) {
  const { productInfo } = props;

  return (
    <StyledLink id="productItem" to={`/${productInfo.id}`}>
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
    </StyledLink>
  );
}

export default ProductItem;
