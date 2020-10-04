import * as Hapi from '@hapi/hapi';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as hapiAuthJWT2 from 'hapi-auth-jwt2';

import routes from './api/routes';
const validateUser = (decoded, request) => {
  console.log(decoded);
  // This is a simple check that the `sub` claim
  // exists in the access token. Modify it to suit
  // the needs of your application
  if (decoded && decoded.id) {
    return {
      isValid: true,
    };
  }

  return {
    isValid: false,
  };
};

export const server = async (opts): Promise<Hapi.Server> => {
  const server: Hapi.Server = new Hapi.Server({
    host: 'localhost',
    port: 3000,
    routes: {
      cors: {
        headers: ['Authorization', 'Content-Type'],
        credentials: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/api/v1/ping',
    handler: function (request, h) {
      return 'Ok';
    },
    options: {
      auth: false
    }
  })

  const plugins: Array<Hapi.Plugin<any>> = [
    Inert,
    Vision,
    hapiAuthJWT2
  ]
  await server.register(plugins, {
    once: true
  })
  server.auth.strategy('jwt', 'jwt', {
    key: process.env.ACCESS_TOKEN,
    validate: validateUser
  })

  server.auth.default('jwt');
  server.route(routes);
  if (opts.start) {
    await server.start();
  }
  if (opts.initialize) {
    await server.initialize();
  }
  return server;
}
