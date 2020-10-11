import type from '@/type'
import CategoryController from './controller';
import * as validator from './validator';

const controller: CategoryController = new CategoryController();

export const createOne: type.handler = {
  description: 'Create category',
  notes: 'Return created category',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: {
    strategy: 'jwt',
    scope: ['superadmin']
  },
  validate: {
    payload: validator.createCategory,
    headers: validator.checkToken
  },
}
