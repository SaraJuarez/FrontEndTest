import { ListContext } from "../utils/context/ListProvider";
import { useParams } from "react-router-dom";
function ProductDetail(props) {
  const { id } = useParams();
  return <div>ProductDetail</div>;
}

export default ProductDetail;
