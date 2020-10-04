import * as _ from 'lodash';
import auth from './client/auth/routers';
const routes = [
  auth
];

export default _.flatten(routes);