import { createContext } from "react";

const ProductContext = createContext({
  list: [],
  mobileDetails: [],
  selectedPhones: [],
  creationDate: "",
});

export default ProductContext;
