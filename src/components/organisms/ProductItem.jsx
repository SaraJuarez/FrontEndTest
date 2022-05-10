import ImageProduct from "../atoms/ImageProduct";
import { ProductItemContainer } from "../styles/productItem.styled";
function ProductItem(props) {
  const { productInfo, openModal } = props;
  return (
    <ProductItemContainer onClick={openModal}>
      <div>
        <ImageProduct image={productInfo.imgUrl} />
      </div>
      <div>
        <p>Brand:{productInfo.brand}</p>
        <p>Model:{productInfo.model}</p>
        <p>Price:{productInfo.price}</p>
      </div>
    </ProductItemContainer>
  );
}

export default ProductItem;
