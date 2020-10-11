import 'module-alias/register';
import * as Models from '@/db/models/index';
import * as PasswordUtils from '@/utils/password';
import type from '@/type';
import jwt from '@/services/jwt';

import * as Boom from '@hapi/boom';
import * as _ from 'lodash';

class AuthService {
  async login(payload) {
    const user: Models.User = await Models.User.query().findOne({
      email: payload.email
    });

    if (!user) {
      throw Boom.notFound('User not found');
    }

    const isCorrectPassword: Boolean = await PasswordUtils.compare(payload.password, user.password);

    if (!isCorrectPassword) {
      throw Boom.badRequest('EMAIL_PASSWORD_INVALID');
    }

    const tokenData: type.tokenData = _.pick(user, [
      'id',
      'email',
      'fullName'
    ]);
    tokenData.scope = user.systemRole;
    delete user.password;

    const accessToken: string = jwt.issueAccessToken(tokenData);

    const refreshToken: string = jwt.issueRefreshToken(tokenData);
    return {
      accessToken,
      refreshToken,
      data: user,
      success: true,
      message: 'LOGIN_SUCCESS'
    }
  }

  async register(payload) {
    const user: Models.User = await Models.User.query().findOne({ email: payload.email });
    if (user) {
      throw Boom.badRequest('EMAIL_IN_USED');
    }

    const hashPassword = await PasswordUtils.hash(payload.password);
    payload.password = hashPassword;

    const data: Models.User = await Models.User.query().insert(payload);
    console.log(data);
    const tokenData: type.tokenData = _.pick(data, [
      'id',
      'email',
      'fullName'
    ]);
    tokenData.scope = data.systemRole;
    const accessToken: string = jwt.issueAccessToken(tokenData);
    const refreshToken: string = jwt.issueRefreshToken(tokenData)
    delete data.password;
    return {
      accessToken,
      refreshToken,
      data,
      success: true,
      message: 'REGISTER_SUCCESS'
    }
  }
}

export default AuthService;
