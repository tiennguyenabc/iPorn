
import * as handler from './handler';

const Routes = [
  {
    method: 'POST',
    path: '/api/v1/admin/categories',
    config: handler.createOne
  }
]

export default Routes;
