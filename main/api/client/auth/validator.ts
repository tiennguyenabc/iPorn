import * as Joi from '@hapi/joi';
import {
  strEmail,
  strPassword,
  strPhoneNumber,
  stringAllowEmpty
} from '../../../utils/validator';


export const validateLogin = Joi.object({
  email: strEmail().required().error(new Error('INVALID_EMAIL')),
  password: strPassword().required().error(new Error('INVALID_PASSWORD')),
});

export const register = Joi.object({
  email: strEmail().required().error(new Error('INVALID_EMAIL')),
  password: strPassword().required().error(new Error('INVALID_PASSWORD')),
  fullName: Joi.string().min(2).max(100).required(),
  phoneNumber: strPhoneNumber(),
  address: stringAllowEmpty()
});
