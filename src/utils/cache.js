export const setSelectedPhones = (selectedOption) => {
  let savedPhones = localStorage.getItem("selectedPhones");
  if (savedPhones === null) {
    console.log(savedPhones);
    localStorage.setItem("selectedPhones", JSON.stringify([selectedOption.id]));
  } else {
    let savedArray = JSON.parse(savedPhones);
    savedArray.push(selectedOption.id);
    localStorage.setItem("selectedPhones", JSON.stringify(savedArray));
  }
};

export const isAlreadyInCache = (id) => {
  let savedPhones = JSON.parse(localStorage.getItem("selectedPhones"));
  if (savedPhones !== null) {
    return savedPhones.some((option) => option === id);
  } else {
    return false;
  }
};
