export const dispatchTypes = {
  SET_LIST: "SET_LIST",
  SET_CREATIONDATE: "SET_CREATIONDATE",
  SET_ERROR: "SET_ERROR",
};

export const initialState = {
  list: [],
  creationDate: null,
  error: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case dispatchTypes.SET_LIST:
      return { ...state, list: payload };
    case dispatchTypes.SET_CREATIONDATE:
      return { ...state, creationDate: payload };
    case dispatchTypes.SET_ERROR:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};
