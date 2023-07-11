import * as yup from 'yup';

export const cartItemValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  product_id: yup.string().nullable().required(),
  cart_id: yup.string().nullable().required(),
});
