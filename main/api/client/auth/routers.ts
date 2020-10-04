
import * as handler from './handler';

const Routes = [
  {
    method: 'POST',
    path: '/api/v1/client/auth/login',
    config: handler.login
  }
]

export default Routes;