import type from '../../../type';
import AuthController from './controller';
import * as validator from './validator';

const controller: AuthController = new AuthController();

export const login: type.handler = {
  description: 'Login to an account',
  notes: 'Return user and token',
  tags: ['api', 'v1'],
  handler: controller.login.bind(controller),
  auth: false,
  validate: {
    payload: validator.validateLogin,
  },
}

export const register: type.handler = {
  description: 'register an account to system',
  notes: 'Return user and token',
  tags: ['api', 'v1'],
  handler: controller.register.bind(controller),
  auth: false,
  validate: {
    payload: validator.register,
  },
}
