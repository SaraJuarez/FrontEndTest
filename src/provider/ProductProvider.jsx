import moment from "moment";
import { useEffect, useReducer } from "react";

import ProductContext from "../context/ProductContext";
import { initialState, reducer } from "../reducer/ProductReducer";
import { dispatchTypes } from "../reducer/ProductReducer";
import { getMobileList } from "../utils/api/api";

const ProductProvider = ({
  children,
  list,
  creationDate,
  error,
  mobileDetails,
}) => {
  const init = {
    ...initialState,
    list,
    creationDate,
    error,
    mobileDetails,
  };

  const [providerValue, dispatch] = useReducer(reducer, init);

  return (
    <ProductContext.Provider value={{ ...providerValue, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
