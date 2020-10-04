import ts from '../../../type';
import AuthController from './controller';
import * as validator from './validator';

const controller: AuthController = new AuthController();

export const login: ts.handler = {
  description: 'Login to an account',
  notes: 'Return user and token',
  tags: ['api', 'v1'],
  handler: controller.login.bind(controller),
  auth: false,
  validate: {
    payload: validator.validateLogin,
  },
}