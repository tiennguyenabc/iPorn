import { register } from './handler';
import AuthService from './service';

class AuthController {
  service: AuthService;
  constructor() {
    this.service = new AuthService();
  }

  login(request) {
    const { payload } = request;
    return this.service.login(payload);
  }
  register(request) {
    return this.service.register(request.payload);
  }
}

export default AuthController;
