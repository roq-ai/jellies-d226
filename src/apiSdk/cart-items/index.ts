import axios from 'axios';
import queryString from 'query-string';
import { CartItemInterface, CartItemGetQueryInterface } from 'interfaces/cart-item';
import { GetQueryInterface } from '../../interfaces';

export const getCartItems = async (query?: CartItemGetQueryInterface) => {
  const response = await axios.get(`/api/cart-items${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCartItem = async (cartItem: CartItemInterface) => {
  const response = await axios.post('/api/cart-items', cartItem);
  return response.data;
};

export const updateCartItemById = async (id: string, cartItem: CartItemInterface) => {
  const response = await axios.put(`/api/cart-items/${id}`, cartItem);
  return response.data;
};

export const getCartItemById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/cart-items/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCartItemById = async (id: string) => {
  const response = await axios.delete(`/api/cart-items/${id}`);
  return response.data;
};
