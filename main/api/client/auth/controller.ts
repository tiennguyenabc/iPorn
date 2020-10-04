import AuthService from './service';

class AuthController {
  service: AuthService;
  constructor() {
    this.service = new AuthService();
  }

  async login(request) {
    const { payload } = request;
    return await this.service.login(payload);
  }
}

export default AuthController;