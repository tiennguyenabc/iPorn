import * as Hapi from '@hapi/hapi';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as hapiAuthJWT2 from 'hapi-auth-jwt2';

import routes from './api/routes';
import logger from './plugins/logger';
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
      },
      validate: {
        failAction: async (request, h, err) => {
          console.log('hehihi');
          if (process.env.NODE_ENV === 'production') {
            // In prod, log a limited error message and throw the default Bad Request error.
            throw err;
          } else {
            // During development, log and respond with the full error.
            console.error(err);
            throw err;
          }
        },
      },
    },
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
    hapiAuthJWT2,
    {
      plugin: logger,
      options: {
        prettyPrint: process.env.NODE_ENV !== 'production',
        redact: ['req.headers.authorization'],
        once: true,
      },
    }
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
