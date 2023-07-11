import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().integer().required(),
  image: yup.string(),
  company_id: yup.string().nullable().required(),
});
