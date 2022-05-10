import axios from "axios";
import { apiUrl } from "../../constants";
export const getMobileList = async () => {
  try {
    const response = await axios.get(`${apiUrl}api/product`);
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
