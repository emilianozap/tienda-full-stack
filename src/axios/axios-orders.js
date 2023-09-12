import axios from 'axios';
import { BASE_URL } from '../utils/constants';

import { fetchOrderFail, fetchOrderStart, fetchOrderSuccess, createOrderFail } from "../redux/orders/ordersSlice";

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrderStart());

  try {
    const orders = await axios.get(`${BASE_URL}/ordenes`, {
      headers: {
        'x-token': currentUser.token,
      },
    });
    if (orders) {
      dispatch(fetchOrderSuccess(orders.data.data));
    }
  } catch (error) {
    console.error({ error });
    dispatch(
      fetchOrderFail('No hay ordenes sin usuario.')
    );
  }
};

export const createOrder = async (orders, dispatch, currentUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/ordenes`, orders, {
      headers: {
        'x-token': currentUser.token,
      },
    });
    if (response) {
      getOrders(dispatch, currentUser);
    }
  } catch (error) {
    dispatch(createOrderFail());
    
  }
};
