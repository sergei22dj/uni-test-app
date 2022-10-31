import axios from "axios";
import { tokenValue } from "../token";
import { authSlice } from "./authSlice";
import { itemsSlice } from "./itemsSlice";

const API_URL = "http://dummy-api.d0.acom.cloud";

export const auth = (password, email) => async (dispatch) => {
  try {
    dispatch(authSlice.actions.authFetching());
    const response = await axios.post(`${API_URL}/api/auth/login`, null, {
      params: {
        email: email,
        password: password,
      },
    });
    document.cookie = "token=" + response.data.access_token;
    dispatch(authSlice.actions.authFetchingSuccess(tokenValue()));
    dispatch(authSlice.actions.setEnter(true));
  } catch (error) {
    dispatch(authSlice.actions.setEnter(false));
    dispatch(authSlice.actions.authFetchingError(error.message));
  }
};

export const getItems = (accessToken, reqParams) => async (dispatch) => {
  try {
    dispatch(itemsSlice.actions.fetchItems());
    const response = await axios.get(`${API_URL}/api/products?`, {
      headers: {
        Authorization: `Bearer ${accessToken} `,
      },
      params: {
        page: reqParams.pageNumber,
        from: reqParams.from,
        to: reqParams.to,
        price_from: reqParams.price_from,
        price_to: reqParams.price_to,
        title: reqParams.title,
      },
    });
    dispatch(itemsSlice.actions.fetchItemsSuccsses(response.data.data));
  } catch (error) {
    dispatch(authSlice.actions.setEnter(false));
    if (error.response.status === 401) {
      return (window.location.href = "/");
    }
    dispatch(itemsSlice.actions.fetchItemsError(error.message));
  }
};
