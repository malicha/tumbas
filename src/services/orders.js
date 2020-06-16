import { axiosInstance } from '../config';

export const getOrderDetails = async (orderId, headers) => {
  const response = axiosInstance.get(`orders/${orderId}`, headers);
  return response;
};

export const createOrder = async order => {
  try {
    const response = axiosInstance.post('/orders', order);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const cancelOrder = async (orderId, data) => {
  try {
    const response = axiosInstance.put(`/orders/${orderId}`, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getOrders = async email => {
  const response = axiosInstance.get(`/orders?email=${email}`);
  return response;
};

export const getLastOrders = async email => {
  const response = axiosInstance.get(`/orders/last-order?email=${email}`);
  return response;
};
