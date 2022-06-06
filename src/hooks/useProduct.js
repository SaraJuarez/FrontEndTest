import { useContext } from "react";

import ProductContext from "../context/ProductContext";

let useProduct = () => useContext(ProductContext);

export default useProduct;
