import moment from "moment";
import { useEffect, useReducer } from "react";

import ProductContext from "../context/ProductContext";
import { initialState, reducer } from "../reducer/ProductReducer";
import { dispatchTypes } from "../reducer/ProductReducer";
import { getMobileList } from "../utils/api/api";

const ProductProvider = ({ children, list, creationDate, error }) => {
  const init = {
    ...initialState,
    list,
    creationDate,
    error,
  };

  const [providerValue, dispatch] = useReducer(reducer, init);

  const getList = async () => {
    let result = await getMobileList();
    if (result.isAxiosError === true) {
      dispatch({ type: dispatchTypes.SET_ERROR, payload: result.message });
    } else {
      let now = new moment();
      dispatch({ type: dispatchTypes.SET_CREATIONDATE, payload: now });
      dispatch({ type: dispatchTypes.SET_LIST, payload: result });
      return "sucess";
    }
  };

  return (
    <ProductContext.Provider value={{ ...providerValue, dispatch, getList }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
