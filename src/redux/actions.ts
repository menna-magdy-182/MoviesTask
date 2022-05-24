
import { STORE_URL } from "../constants";
import { endpoints } from "../constants/endpoints";
import { SET_CATEGORIES } from "./types";
import axios from 'axios';
export const getCategories = () => {
  try {
    return async dispatch => {
      const res = await axios.get(STORE_URL + endpoints.categories);
      if (res.data) {
        dispatch({
          type: SET_CATEGORIES,
          payload: res.data.categories,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};
