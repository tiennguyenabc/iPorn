import * as Models from '../../../db/models';
import * as PasswordUtils from '../../../utils/password';
import ts from '../../../type';
import jwt from '../../../services/jwt';

import { sign } from 'jsonwebtoken';
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

    const tokenData: ts.tokenData = _.pick(user, [
      'id',
      'email',
      'fullName'
    ]);
    // tokenData.scope = user.systemRole;
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
}

export default AuthService;
