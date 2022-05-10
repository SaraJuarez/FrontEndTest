import { ImageContainer } from "../styles/imageProduct.styled";
function ImageProduct(props) {
  const { image } = props;
  return <ImageContainer alt="product" src={image} />;
}
export default ImageProduct;
