import axios from "axios";
import { apiUrl } from "../../constants";
export const getMobileList = async () =>{
    try {
        const response = await axios.get(`${apiUrl}api/product`);
        return response.data;
    } catch (error) {
        return null;
    }
}