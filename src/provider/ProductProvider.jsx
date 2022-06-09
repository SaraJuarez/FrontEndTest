import { useReducer } from "react";

import ProductContext from "../context/ProductContext";
import { initialState, reducer } from "../reducer/ProductReducer";

const ProductProvider = ({
  children,
  list,
  creationDate,
  error,
  mobileDetails,
  selectedPhones,
  cart,
}) => {
  const init = {
    ...initialState,
    list,
    creationDate,
    error,
    mobileDetails,
    selectedPhones,
    cart,
  };

  const [providerValue, dispatch] = useReducer(reducer, init);

  return (
    <ProductContext.Provider value={{ ...providerValue, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
