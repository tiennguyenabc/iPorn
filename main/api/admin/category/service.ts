import 'module-alias/register';
import BaseServiceCRUD from '../../../base/BaseServiceCRUD';
import * as Models from '@/db/models/index';

class CategoryService extends BaseServiceCRUD {
  constructor() {
    super(Models.Category, 'Category');
  }
}

export default CategoryService;
