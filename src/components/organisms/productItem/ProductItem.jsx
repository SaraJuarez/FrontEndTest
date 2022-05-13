import ImageProduct from "../../atoms/ImageProduct";
import {
  ProductItemContainer,
  ProductImageContainer,
  ProductTextContainer,
  StyledSpan,
} from "../../styles/productItem.styled";
import { Link } from "react-router-dom";
function ProductItem(props) {
  const { productInfo } = props;

  return (
    <Link style={{ textDecoration: "none" }} to={`/${productInfo.id}`}>
      <ProductItemContainer>
        <ProductImageContainer>
          <ImageProduct image={productInfo.imgUrl} />
        </ProductImageContainer>
        <ProductTextContainer>
          <p>
            <StyledSpan>Brand:</StyledSpan>
            {productInfo.brand}
          </p>
          <p>
            <StyledSpan>Model:</StyledSpan>
            {productInfo.model}
          </p>
          <p>
            <StyledSpan>Price:</StyledSpan>
            {productInfo.price}$
          </p>
        </ProductTextContainer>
      </ProductItemContainer>
    </Link>
  );
}

export default ProductItem;
