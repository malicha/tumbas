import { axiosInstance } from '../config';

export const getListPasar = async keyword => {
  const response = await axiosInstance.get(`/vendors?search=${keyword}`);
  return response.data;
};
