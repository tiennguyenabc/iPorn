import * as jsonwebtoken from 'jsonwebtoken';
import * as _ from 'lodash';
import ts from '../type';
import config from '../config';

class Jwt {
  issueAccessToken(payload: ts.tokenData): string {
    return jsonwebtoken.sign(
      _.assign(payload, {
        ttl: config.jwt.accessTokenLife,
      }),
      config.jwt.accessKeySecret,
      { expiresIn: config.jwt.accessTokenLife }
    );
  }

  issueRefreshToken(payload: ts.tokenData): string {
    return jsonwebtoken.sign(
      _.assign(payload, {
        ttl: config.jwt.accessTokenLife,
      }),
      config.jwt.accessKeySecret,
      { expiresIn: config.jwt.accessTokenLife }
    );
  }
}

export default new Jwt();