import BaseControllerCRUD from '../../../base/BaseControllerCRUD';
import CategoryService from './service';

class CategoryController extends BaseControllerCRUD {
  constructor() {
    super(new CategoryService());
  }
}

export default CategoryController;
