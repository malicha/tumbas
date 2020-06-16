import { axiosInstance } from '../config';

export const getProductTopSellers = async vendorId => {
  const response = await axiosInstance.get(
    `products?vendor=${vendorId}&featured=true`
  );
  return response.data;
};

export const getProductCategories = async () => {
  const response = await axiosInstance.get('/products/categories');
  return response.data;
};

export const getProductBrands = async () => {
  const response = await axiosInstance.get('/products/brands');
  return response.data;
};

export const getProductDetail = async productId => {
  const response = await axiosInstance.get(`/products/${productId}`);
  return response.data;
};

export const getProductbyCategories = async (categoryId, vendorId) => {
  const response = await axiosInstance.get(
    `/products?category=${categoryId}&per_page=100&vendor=${vendorId}`
  );
  return response.data;
};

export const getProductbyKeyword = async (keyword, vendorId) => {
  const response = await axiosInstance.get(
    `/products?search=${keyword}&vendor=${vendorId}`
  );
  return response.data;
};
