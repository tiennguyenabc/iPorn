import * as Joi from '@hapi/joi';

const checkToken = Joi.object({
  Authorization: Joi.string()
}).options({ allowUnknown: true });

const searchParams = Joi.object({
  limit: Joi.number()
    .min(1)
    .max(100)
    .default(10),
  offset: Joi.number().default(0),
  orderBy: Joi.string(),
  filter: Joi.string(),
  fields: Joi.array(),
  q: Joi.string(),
  page: Joi.number(),
  perPage: Joi.number(),
  populate: Joi.string(),
  longitude: Joi.number().min(-180).max(180),
  latitude: Joi.number().min(-90).max(90),
  distance: Joi.number().min(0)
});

function stringAllowEmpty() {
  return Joi.string().allow(null).allow('');
}

function stringId() {
  return Joi.string()
    .regex(/^[0-9]{10,20}$/);
};

function strEmail() {
  return Joi.string().email().lowercase({ force: true });
}

function strPassword() {
  return Joi.string()
    .min(6)
    .max(35);
}

function strPhoneNumber() {
  return Joi.string().regex(/^\+{0,1}[0-9]{10,15}$/);
}

export {
  checkToken,
  searchParams,
  stringAllowEmpty,
  stringId,
  strEmail,
  strPassword,
  strPhoneNumber
}