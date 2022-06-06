export const setSelectedPhones = (selectedOption) => {
  let savedPhones = localStorage.getItem("selectedPhones");
  if (savedPhones === null) {
    debugger;
    let now = Date.now();
    console.log(now);
    localStorage.setItem("selectedPhones", JSON.stringify([selectedOption.id]));
  } else {
    let savedArray = JSON.parse(savedPhones);
    savedArray.push(selectedOption.id);
    localStorage.setItem("selectedPhones", JSON.stringify(savedArray));
  }
};

export const isAlreadyInSelected = (id) => {
  let savedPhones = JSON.parse(localStorage.getItem("selectedPhones"));
  if (savedPhones !== null) {
    return savedPhones.some((option) => option === id);
  } else {
    return false;
  }
};

export const informationAlreadyPresent = (id) => {
  let savedPhones = JSON.parse(localStorage.getItem("mobileDetails"));
  if (savedPhones !== null) {
    let mobileInfo = savedPhones.find((element) => element.id === id);
    return mobileInfo;
  } else {
    return null;
  }
};

export const saveMobileDetails = (mobileDetail) => {
  let mobileDetailsArray = localStorage.getItem("mobileDetails");
  if (mobileDetailsArray === null) {
    localStorage.setItem("mobileDetails", JSON.stringify([mobileDetail]));
  } else {
    let savedArray = JSON.parse(mobileDetailsArray);
    savedArray.push(mobileDetail);
    localStorage.setItem("mobileDetails", JSON.stringify(savedArray));
  }
};

export const isDataExpired = () => {
  let savedTime = localStorage.getItem("creationDate");
  return savedTime < Date.now();
};
