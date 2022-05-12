import axios from "axios";
import { apiUrl } from "../../constants";
export const getMobileList = async () => {
  try {
    const response = await axios.get(`${apiUrl}api/product`);
    console.log(response);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getMobileInfo = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}api/product/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const setMobileInfo = async (infoMobile) => {
  try {
    let info = {
      id: infoMobile.id,
      colorCode: infoMobile.color,
      storageCode: infoMobile.storage,
    };
    let response = await axios.post(`${apiUrl}api/cart`, info);
    console.log(response);
    debugger;
    return response.data.count;
  } catch (error) {
    console.log(error);
    return null;
  }
};
