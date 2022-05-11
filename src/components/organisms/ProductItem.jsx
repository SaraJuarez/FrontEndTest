import ImageProduct from "../atoms/ImageProduct";
import {
  ProductItemContainer,
  ProductImageContainer,
  ProductTextContainer,
} from "../styles/productItem.styled";
import { Link } from "react-router-dom";
function ProductItem(props) {
  const { productInfo } = props;
  return (
    <Link to={`/${productInfo.id}`}>
      <ProductItemContainer>
        <ProductImageContainer>
          <ImageProduct image={productInfo.imgUrl} />
        </ProductImageContainer>
        <ProductTextContainer>
          <p>Brand:{productInfo.brand}</p>
          <p>Model:{productInfo.model}</p>
          <p>Price:{productInfo.price}</p>
        </ProductTextContainer>
      </ProductItemContainer>
    </Link>
  );
}

export default ProductItem;
