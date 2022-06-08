export const dispatchTypes = {
  SET_LIST: "SET_LIST",
  SET_CREATIONDATE: "SET_CREATIONDATE",
  SET_ERROR: "SET_ERROR",
  SET_MOBILEDETAILS: "SET_MOBILEDETAILS",
  SET_SELECTEDPHONES: "SET_SELECTEDPHONES",
};

export const initialState = {
  list: [],
  creationDate: null,
  error: null,
  mobileDetails: [],
  selectedPhones: [],
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
    case dispatchTypes.SET_MOBILEDETAILS:
      return { ...state, mobileDetails: payload };
    case dispatchTypes.SET_SELECTEDPHONES:
      return { ...state, selectedPhones: payload };
    default:
      return { ...state };
  }
};
