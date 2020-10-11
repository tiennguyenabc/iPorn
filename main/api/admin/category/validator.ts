import * as Joi from '@hapi/joi';
import {
  searchParams,
  checkToken
} from '../../../utils/validator';

const createCategory = Joi.object({
  name: Joi.string().required(),
  description: Joi.string()
})

export {
  searchParams,
  checkToken,
  createCategory
};
