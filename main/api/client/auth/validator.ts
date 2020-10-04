import * as Joi from '@hapi/joi';
import { strEmail, strPassword } from '../../../utils/validator';


export const validateLogin = Joi.object({
  email: strEmail().required().error(new Error('INVALID_EMAIL')),
  password: strPassword().required().error(new Error('INVALID_PASSWORD')),
});