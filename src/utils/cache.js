import moment from "moment";

import { dispatchTypes } from "../reducer/ProductReducer";

export const setSelectedPhones = (selectedOption, listProvider) => {
  let savedPhones = listProvider.selectedPhones;
  if (savedPhones === undefined) {
    listProvider.dispatch({
      type: dispatchTypes.SET_SELECTEDPHONES,
      payload: [selectedOption.id],
    });
  } else {
    let savedArray = savedPhones;
    savedArray.push(selectedOption.id);
    listProvider.dispatch({
      type: dispatchTypes.SET_SELECTEDPHONES,
      payload: savedArray,
    });
  }
};

export const isAlreadyInSelected = (id, listProvider) => {
  let savedPhones = listProvider.selectedPhones;
  if (savedPhones !== undefined) {
    return savedPhones.some((option) => option === id);
  } else {
    return false;
  }
};

export const informationAlreadyPresent = (id, listProvider) => {
  let savedPhones = listProvider.mobileDetails;
  let mobileInfo = savedPhones.find((element) => element.id === id);
  return mobileInfo;
};

export const saveMobileDetails = (mobileDetail, listProvider) => {
  if (listProvider.mobileDetails === undefined) {
    listProvider.dispatch({
      type: dispatchTypes.SET_MOBILEDETAILS,
      payload: [mobileDetail],
    });
  } else {
    let list = listProvider.mobileDetails;
    list.push(mobileDetail);
    listProvider.dispatch({
      type: dispatchTypes.SET_MOBILEDETAILS,
      payload: list,
    });
  }
};

export const isDataExpired = (listProvider) => {
  let savedTime = listProvider.creationDate;
  let expiringTime = moment(savedTime).add(1, "h");
  return expiringTime < new moment();
};
