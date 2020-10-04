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
}

export default AuthController;
